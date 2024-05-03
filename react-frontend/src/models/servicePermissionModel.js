import client from '../services/restClient';

export const servicePermission = {
    state: {
        selectedServicePermission: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectServicePermission(state, servicePermission) {
            let toReturn = { ...state, selectedServicePermission: servicePermission };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE ServicePermission ////
        ///////////////////////////
        async getOneServicePermission(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.servicePermission.selectedServicePermission?._id === _id) {
                    resolve(reduxState.servicePermission.selectedServicePermission);
                    return;
                }
                client
                    .service('servicePermissions')
                    .get(_id)
                    .then((res) => {
                        this.selectServicePermission(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get servicePermission', error);
                        dispatch.toast.alert({ type: 'error', title: 'ServicePermission', message: 'Failed to get servicePermission' });
                        reject(error);
                    });
            });
        },
        setOneServicePermission(_id, reduxState) {
            if (reduxState.servicePermission.selectedServicePermission?._id === _id) {
              return;
            }
            client
              .service("servicePermissions")
              .get(_id)
              .then((res) => {
                this.selectServicePermission(res);
              })
              .catch((error) => {
                console.log("Failed to set ServicePermission", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "ServicePermission",
                  message: "Failed to set servicePermission",
                });
              });
          },
    })
};