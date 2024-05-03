import client from '../services/restClient';

export const profileStatus = {
    state: {
        selectedProfileStatus: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectProfileStatus(state, profileStatus) {
            let toReturn = { ...state, selectedProfileStatus: profileStatus };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE ProfileStatus ////
        ///////////////////////////
        async getOneProfileStatus(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.profileStatus.selectedProfileStatus?._id === _id) {
                    resolve(reduxState.profileStatus.selectedProfileStatus);
                    return;
                }
                client
                    .service('profileStatus')
                    .get(_id)
                    .then((res) => {
                        this.selectProfileStatus(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get profileStatus', error);
                        dispatch.toast.alert({ type: 'error', title: 'ProfileStatus', message: 'Failed to get profileStatus' });
                        reject(error);
                    });
            });
        },
        setOneProfileStatus(_id, reduxState) {
            if (reduxState.profileStatus.selectedProfileStatus?._id === _id) {
              return;
            }
            client
              .service("profileStatus")
              .get(_id)
              .then((res) => {
                this.selectProfileStatus(res);
              })
              .catch((error) => {
                console.log("Failed to set ProfileStatus", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "ProfileStatus",
                  message: "Failed to set profileStatus",
                });
              });
          },
    })
};