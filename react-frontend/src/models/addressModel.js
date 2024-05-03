import client from '../services/restClient';

export const address = {
    state: {
        selectedAddress: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectAddress(state, address) {
            let toReturn = { ...state, selectedAddress: address };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE Address ////
        ///////////////////////////
        async getOneAddress(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.address.selectedAddress?._id === _id) {
                    resolve(reduxState.address.selectedAddress);
                    return;
                }
                client
                    .service('addresses')
                    .get(_id)
                    .then((res) => {
                        this.selectAddress(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get address', error);
                        dispatch.toast.alert({ type: 'error', title: 'Address', message: 'Failed to get address' });
                        reject(error);
                    });
            });
        },
        setOneAddress(_id, reduxState) {
            if (reduxState.address.selectedAddress?._id === _id) {
              return;
            }
            client
              .service("addresses")
              .get(_id)
              .then((res) => {
                this.selectAddress(res);
              })
              .catch((error) => {
                console.log("Failed to set Address", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "Address",
                  message: "Failed to set address",
                });
              });
          },
    })
};