import client from '../services/restClient';

export const userProfile = {
    state: {
        selectedUserProfile: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectUserProfile(state, userProfile) {
            let toReturn = { ...state, selectedUserProfile: userProfile };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE UserProfile ////
        ///////////////////////////
        async getOneUserProfile(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.userProfile.selectedUserProfile?._id === _id) {
                    resolve(reduxState.userProfile.selectedUserProfile);
                    return;
                }
                client
                    .service('userProfiles')
                    .get(_id)
                    .then((res) => {
                        this.selectUserProfile(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get userProfile', error);
                        dispatch.toast.alert({ type: 'error', title: 'UserProfile', message: 'Failed to get userProfile' });
                        reject(error);
                    });
            });
        },
        setOneUserProfile(_id, reduxState) {
            if (reduxState.userProfile.selectedUserProfile?._id === _id) {
              return;
            }
            client
              .service("userProfiles")
              .get(_id)
              .then((res) => {
                this.selectUserProfile(res);
              })
              .catch((error) => {
                console.log("Failed to set UserProfile", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "UserProfile",
                  message: "Failed to set userProfile",
                });
              });
          },
    })
};