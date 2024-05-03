import client from '../services/restClient';

export const invitation = {
    state: {
        selectedInvitation: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectInvitation(state, invitation) {
            let toReturn = { ...state, selectedInvitation: invitation };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE Invitation ////
        ///////////////////////////
        async getOneInvitation(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.invitation.selectedInvitation?._id === _id) {
                    resolve(reduxState.invitation.selectedInvitation);
                    return;
                }
                client
                    .service('invitations')
                    .get(_id)
                    .then((res) => {
                        this.selectInvitation(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get invitation', error);
                        dispatch.toast.alert({ type: 'error', title: 'Invitation', message: 'Failed to get invitation' });
                        reject(error);
                    });
            });
        },
        setOneInvitation(_id, reduxState) {
            if (reduxState.invitation.selectedInvitation?._id === _id) {
              return;
            }
            client
              .service("invitations")
              .get(_id)
              .then((res) => {
                this.selectInvitation(res);
              })
              .catch((error) => {
                console.log("Failed to set Invitation", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "Invitation",
                  message: "Failed to set invitation",
                });
              });
          },
    })
};