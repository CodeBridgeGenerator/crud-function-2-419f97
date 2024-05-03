import client from '../services/restClient';

export const refPosition = {
    state: {
        selectedRefPosition: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectRefPosition(state, refPosition) {
            let toReturn = { ...state, selectedRefPosition: refPosition };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE RefPosition ////
        ///////////////////////////
        async getOneRefPosition(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.refPosition.selectedRefPosition?._id === _id) {
                    resolve(reduxState.refPosition.selectedRefPosition);
                    return;
                }
                client
                    .service('refPositions')
                    .get(_id)
                    .then((res) => {
                        this.selectRefPosition(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get refPosition', error);
                        dispatch.toast.alert({ type: 'error', title: 'RefPosition', message: 'Failed to get refPosition' });
                        reject(error);
                    });
            });
        },
        setOneRefPosition(_id, reduxState) {
            if (reduxState.refPosition.selectedRefPosition?._id === _id) {
              return;
            }
            client
              .service("refPositions")
              .get(_id)
              .then((res) => {
                this.selectRefPosition(res);
              })
              .catch((error) => {
                console.log("Failed to set RefPosition", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "RefPosition",
                  message: "Failed to set refPosition",
                });
              });
          },
    })
};