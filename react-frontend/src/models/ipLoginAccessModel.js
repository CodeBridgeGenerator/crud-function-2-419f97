import client from '../services/restClient';

export const ipLoginAccess = {
    state: {
        selectedIpLoginAccess: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectIpLoginAccess(state, ipLoginAccess) {
            let toReturn = { ...state, selectedIpLoginAccess: ipLoginAccess };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE IpLoginAccess ////
        ///////////////////////////
        async getOneIpLoginAccess(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.ipLoginAccess.selectedIpLoginAccess?._id === _id) {
                    resolve(reduxState.ipLoginAccess.selectedIpLoginAccess);
                    return;
                }
                client
                    .service('ipLoginAccess')
                    .get(_id)
                    .then((res) => {
                        this.selectIpLoginAccess(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get ipLoginAccess', error);
                        dispatch.toast.alert({ type: 'error', title: 'IpLoginAccess', message: 'Failed to get ipLoginAccess' });
                        reject(error);
                    });
            });
        },
        setOneIpLoginAccess(_id, reduxState) {
            if (reduxState.ipLoginAccess.selectedIpLoginAccess?._id === _id) {
              return;
            }
            client
              .service("ipLoginAccess")
              .get(_id)
              .then((res) => {
                this.selectIpLoginAccess(res);
              })
              .catch((error) => {
                console.log("Failed to set IpLoginAccess", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "IpLoginAccess",
                  message: "Failed to set ipLoginAccess",
                });
              });
          },
    })
};