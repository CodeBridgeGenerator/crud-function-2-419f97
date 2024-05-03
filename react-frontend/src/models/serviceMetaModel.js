import client from '../services/restClient';

export const serviceMeta = {
    state: {
        selectedServiceMeta: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectServiceMeta(state, serviceMeta) {
            let toReturn = { ...state, selectedServiceMeta: serviceMeta };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE ServiceMeta ////
        ///////////////////////////
        async getOneServiceMeta(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.serviceMeta.selectedServiceMeta?._id === _id) {
                    resolve(reduxState.serviceMeta.selectedServiceMeta);
                    return;
                }
                client
                    .service('serviceMeta')
                    .get(_id)
                    .then((res) => {
                        this.selectServiceMeta(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get serviceMeta', error);
                        dispatch.toast.alert({ type: 'error', title: 'ServiceMeta', message: 'Failed to get serviceMeta' });
                        reject(error);
                    });
            });
        },
        setOneServiceMeta(_id, reduxState) {
            if (reduxState.serviceMeta.selectedServiceMeta?._id === _id) {
              return;
            }
            client
              .service("serviceMeta")
              .get(_id)
              .then((res) => {
                this.selectServiceMeta(res);
              })
              .catch((error) => {
                console.log("Failed to set ServiceMeta", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "ServiceMeta",
                  message: "Failed to set serviceMeta",
                });
              });
          },
    })
};