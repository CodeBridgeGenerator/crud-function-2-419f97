import client from '../services/restClient';

export const branch = {
    state: {
        selectedBranch: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectBranch(state, branch) {
            let toReturn = { ...state, selectedBranch: branch };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE Branch ////
        ///////////////////////////
        async getOneBranch(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.branch.selectedBranch?._id === _id) {
                    resolve(reduxState.branch.selectedBranch);
                    return;
                }
                client
                    .service('branches')
                    .get(_id)
                    .then((res) => {
                        this.selectBranch(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get branch', error);
                        dispatch.toast.alert({ type: 'error', title: 'Branch', message: 'Failed to get branch' });
                        reject(error);
                    });
            });
        },
        setOneBranch(_id, reduxState) {
            if (reduxState.branch.selectedBranch?._id === _id) {
              return;
            }
            client
              .service("branches")
              .get(_id)
              .then((res) => {
                this.selectBranch(res);
              })
              .catch((error) => {
                console.log("Failed to set Branch", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "Branch",
                  message: "Failed to set branch",
                });
              });
          },
    })
};