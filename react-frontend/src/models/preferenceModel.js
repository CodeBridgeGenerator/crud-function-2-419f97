import client from '../services/restClient';

export const preference = {
    state: {
        selectedPreference: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectPreference(state, preference) {
            let toReturn = { ...state, selectedPreference: preference };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE Preference ////
        ///////////////////////////
        async getOnePreference(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.preference.selectedPreference?._id === _id) {
                    resolve(reduxState.preference.selectedPreference);
                    return;
                }
                client
                    .service('preferences')
                    .get(_id)
                    .then((res) => {
                        this.selectPreference(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get preference', error);
                        dispatch.toast.alert({ type: 'error', title: 'Preference', message: 'Failed to get preference' });
                        reject(error);
                    });
            });
        },
        setOnePreference(_id, reduxState) {
            if (reduxState.preference.selectedPreference?._id === _id) {
              return;
            }
            client
              .service("preferences")
              .get(_id)
              .then((res) => {
                this.selectPreference(res);
              })
              .catch((error) => {
                console.log("Failed to set Preference", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "Preference",
                  message: "Failed to set preference",
                });
              });
          },
    })
};