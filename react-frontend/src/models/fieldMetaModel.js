import client from '../services/restClient';

export const fieldMeta = {
    state: {
        selectedFieldMeta: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectFieldMeta(state, fieldMeta) {
            let toReturn = { ...state, selectedFieldMeta: fieldMeta };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE FieldMeta ////
        ///////////////////////////
        async getOneFieldMeta(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.fieldMeta.selectedFieldMeta?._id === _id) {
                    resolve(reduxState.fieldMeta.selectedFieldMeta);
                    return;
                }
                client
                    .service('fieldMeta')
                    .get(_id)
                    .then((res) => {
                        this.selectFieldMeta(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get fieldMeta', error);
                        dispatch.toast.alert({ type: 'error', title: 'FieldMeta', message: 'Failed to get fieldMeta' });
                        reject(error);
                    });
            });
        },
        setOneFieldMeta(_id, reduxState) {
            if (reduxState.fieldMeta.selectedFieldMeta?._id === _id) {
              return;
            }
            client
              .service("fieldMeta")
              .get(_id)
              .then((res) => {
                this.selectFieldMeta(res);
              })
              .catch((error) => {
                console.log("Failed to set FieldMeta", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "FieldMeta",
                  message: "Failed to set fieldMeta",
                });
              });
          },
    })
};