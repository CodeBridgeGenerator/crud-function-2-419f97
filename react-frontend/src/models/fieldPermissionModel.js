import client from '../services/restClient';

export const fieldPermission = {
    state: {
        selectedFieldPermission: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectFieldPermission(state, fieldPermission) {
            let toReturn = { ...state, selectedFieldPermission: fieldPermission };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE FieldPermission ////
        ///////////////////////////
        async getOneFieldPermission(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.fieldPermission.selectedFieldPermission?._id === _id) {
                    resolve(reduxState.fieldPermission.selectedFieldPermission);
                    return;
                }
                client
                    .service('fieldPermissions')
                    .get(_id)
                    .then((res) => {
                        this.selectFieldPermission(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get fieldPermission', error);
                        dispatch.toast.alert({ type: 'error', title: 'FieldPermission', message: 'Failed to get fieldPermission' });
                        reject(error);
                    });
            });
        },
        setOneFieldPermission(_id, reduxState) {
            if (reduxState.fieldPermission.selectedFieldPermission?._id === _id) {
              return;
            }
            client
              .service("fieldPermissions")
              .get(_id)
              .then((res) => {
                this.selectFieldPermission(res);
              })
              .catch((error) => {
                console.log("Failed to set FieldPermission", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "FieldPermission",
                  message: "Failed to set fieldPermission",
                });
              });
          },
    })
};