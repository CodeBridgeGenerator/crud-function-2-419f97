import client from '../services/restClient';

export const positionRoleDepartment = {
    state: {
        selectedPositionRoleDepartment: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectPositionRoleDepartment(state, positionRoleDepartment) {
            let toReturn = { ...state, selectedPositionRoleDepartment: positionRoleDepartment };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE PositionRoleDepartment ////
        ///////////////////////////
        async getOnePositionRoleDepartment(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.positionRoleDepartment.selectedPositionRoleDepartment?._id === _id) {
                    resolve(reduxState.positionRoleDepartment.selectedPositionRoleDepartment);
                    return;
                }
                client
                    .service('positionRoleDepartment')
                    .get(_id)
                    .then((res) => {
                        this.selectPositionRoleDepartment(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get positionRoleDepartment', error);
                        dispatch.toast.alert({ type: 'error', title: 'PositionRoleDepartment', message: 'Failed to get positionRoleDepartment' });
                        reject(error);
                    });
            });
        },
        setOnePositionRoleDepartment(_id, reduxState) {
            if (reduxState.positionRoleDepartment.selectedPositionRoleDepartment?._id === _id) {
              return;
            }
            client
              .service("positionRoleDepartment")
              .get(_id)
              .then((res) => {
                this.selectPositionRoleDepartment(res);
              })
              .catch((error) => {
                console.log("Failed to set PositionRoleDepartment", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "PositionRoleDepartment",
                  message: "Failed to set positionRoleDepartment",
                });
              });
          },
    })
};