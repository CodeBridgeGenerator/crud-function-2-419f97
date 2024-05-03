import client from '../services/restClient';

export const userCompany = {
    state: {
        selectedUserCompany: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectUserCompany(state, userCompany) {
            let toReturn = { ...state, selectedUserCompany: userCompany };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE UserCompany ////
        ///////////////////////////
        async getOneUserCompany(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.userCompany.selectedUserCompany?._id === _id) {
                    resolve(reduxState.userCompany.selectedUserCompany);
                    return;
                }
                client
                    .service('userCompanies')
                    .get(_id)
                    .then((res) => {
                        this.selectUserCompany(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get userCompany', error);
                        dispatch.toast.alert({ type: 'error', title: 'UserCompany', message: 'Failed to get userCompany' });
                        reject(error);
                    });
            });
        },
        setOneUserCompany(_id, reduxState) {
            if (reduxState.userCompany.selectedUserCompany?._id === _id) {
              return;
            }
            client
              .service("userCompanies")
              .get(_id)
              .then((res) => {
                this.selectUserCompany(res);
              })
              .catch((error) => {
                console.log("Failed to set UserCompany", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "UserCompany",
                  message: "Failed to set userCompany",
                });
              });
          },
    })
};