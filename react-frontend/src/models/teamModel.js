import client from '../services/restClient';

export const team = {
    state: {
        selectedTeam: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectTeam(state, team) {
            let toReturn = { ...state, selectedTeam: team };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE Team ////
        ///////////////////////////
        async getOneTeam(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.team.selectedTeam?._id === _id) {
                    resolve(reduxState.team.selectedTeam);
                    return;
                }
                client
                    .service('teams')
                    .get(_id)
                    .then((res) => {
                        this.selectTeam(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get team', error);
                        dispatch.toast.alert({ type: 'error', title: 'Team', message: 'Failed to get team' });
                        reject(error);
                    });
            });
        },
        setOneTeam(_id, reduxState) {
            if (reduxState.team.selectedTeam?._id === _id) {
              return;
            }
            client
              .service("teams")
              .get(_id)
              .then((res) => {
                this.selectTeam(res);
              })
              .catch((error) => {
                console.log("Failed to set Team", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "Team",
                  message: "Failed to set team",
                });
              });
          },
    })
};