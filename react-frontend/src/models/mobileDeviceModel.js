import client from '../services/restClient';

export const mobileDevice = {
    state: {
        selectedMobileDevice: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectMobileDevice(state, mobileDevice) {
            let toReturn = { ...state, selectedMobileDevice: mobileDevice };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE MobileDevice ////
        ///////////////////////////
        async getOneMobileDevice(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.mobileDevice.selectedMobileDevice?._id === _id) {
                    resolve(reduxState.mobileDevice.selectedMobileDevice);
                    return;
                }
                client
                    .service('mobileDevices')
                    .get(_id)
                    .then((res) => {
                        this.selectMobileDevice(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get mobileDevice', error);
                        dispatch.toast.alert({ type: 'error', title: 'MobileDevice', message: 'Failed to get mobileDevice' });
                        reject(error);
                    });
            });
        },
        setOneMobileDevice(_id, reduxState) {
            if (reduxState.mobileDevice.selectedMobileDevice?._id === _id) {
              return;
            }
            client
              .service("mobileDevices")
              .get(_id)
              .then((res) => {
                this.selectMobileDevice(res);
              })
              .catch((error) => {
                console.log("Failed to set MobileDevice", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "MobileDevice",
                  message: "Failed to set mobileDevice",
                });
              });
          },
    })
};