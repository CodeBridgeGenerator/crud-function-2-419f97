import client from '../services/restClient';

export const phone = {
    state: {
        selectedPhone: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectPhone(state, phone) {
            let toReturn = { ...state, selectedPhone: phone };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE Phone ////
        ///////////////////////////
        async getOnePhone(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.phone.selectedPhone?._id === _id) {
                    resolve(reduxState.phone.selectedPhone);
                    return;
                }
                client
                    .service('phones')
                    .get(_id)
                    .then((res) => {
                        this.selectPhone(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get phone', error);
                        dispatch.toast.alert({ type: 'error', title: 'Phone', message: 'Failed to get phone' });
                        reject(error);
                    });
            });
        },
        setOnePhone(_id, reduxState) {
            if (reduxState.phone.selectedPhone?._id === _id) {
              return;
            }
            client
              .service("phones")
              .get(_id)
              .then((res) => {
                this.selectPhone(res);
              })
              .catch((error) => {
                console.log("Failed to set Phone", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "Phone",
                  message: "Failed to set phone",
                });
              });
          },
    })
};