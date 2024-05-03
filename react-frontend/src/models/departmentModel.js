import client from '../services/restClient';

export const department = {
    state: {
        selectedDepartment: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectDepartment(state, department) {
            let toReturn = { ...state, selectedDepartment: department };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE Department ////
        ///////////////////////////
        async getOneDepartment(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.department.selectedDepartment?._id === _id) {
                    resolve(reduxState.department.selectedDepartment);
                    return;
                }
                client
                    .service('departments')
                    .get(_id)
                    .then((res) => {
                        this.selectDepartment(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get department', error);
                        dispatch.toast.alert({ type: 'error', title: 'Department', message: 'Failed to get department' });
                        reject(error);
                    });
            });
        },
        setOneDepartment(_id, reduxState) {
            if (reduxState.department.selectedDepartment?._id === _id) {
              return;
            }
            client
              .service("departments")
              .get(_id)
              .then((res) => {
                this.selectDepartment(res);
              })
              .catch((error) => {
                console.log("Failed to set Department", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "Department",
                  message: "Failed to set department",
                });
              });
          },
    })
};