import client from '../services/restClient';

export const role = {
    state: {
        selectedRole: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectRole(state, role) {
            let toReturn = { ...state, selectedRole: role };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE Role ////
        ///////////////////////////
        async getOneRole(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.role.selectedRole?._id === _id) {
                    resolve(reduxState.role.selectedRole);
                    return;
                }
                client
                    .service('roles')
                    .get(_id)
                    .then((res) => {
                        this.selectRole(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get role', error);
                        dispatch.toast.alert({ type: 'error', title: 'Role', message: 'Failed to get role' });
                        reject(error);
                    });
            });
        },
        setOneRole(_id, reduxState) {
            if (reduxState.role.selectedRole?._id === _id) {
              return;
            }
            client
              .service("roles")
              .get(_id)
              .then((res) => {
                this.selectRole(res);
              })
              .catch((error) => {
                console.log("Failed to set Role", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "Role",
                  message: "Failed to set role",
                });
              });
          },
    })
};