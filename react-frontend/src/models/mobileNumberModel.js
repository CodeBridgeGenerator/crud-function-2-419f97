import client from '../services/restClient';

export const mobileNumber = {
    state: {
        selectedMobileNumber: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectMobileNumber(state, mobileNumber) {
            let toReturn = { ...state, selectedMobileNumber: mobileNumber };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE MobileNumber ////
        ///////////////////////////
        async getOneMobileNumber(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.mobileNumber.selectedMobileNumber?._id === _id) {
                    resolve(reduxState.mobileNumber.selectedMobileNumber);
                    return;
                }
                client
                    .service('mobileNumbers')
                    .get(_id)
                    .then((res) => {
                        this.selectMobileNumber(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get mobileNumber', error);
                        dispatch.toast.alert({ type: 'error', title: 'MobileNumber', message: 'Failed to get mobileNumber' });
                        reject(error);
                    });
            });
        },
        setOneMobileNumber(_id, reduxState) {
            if (reduxState.mobileNumber.selectedMobileNumber?._id === _id) {
              return;
            }
            client
              .service("mobileNumbers")
              .get(_id)
              .then((res) => {
                this.selectMobileNumber(res);
              })
              .catch((error) => {
                console.log("Failed to set MobileNumber", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "MobileNumber",
                  message: "Failed to set mobileNumber",
                });
              });
          },
    })
};