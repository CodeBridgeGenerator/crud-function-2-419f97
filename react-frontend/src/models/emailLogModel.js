import client from '../services/restClient';

export const emailLog = {
    state: {
        selectedEmailLog: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectEmailLog(state, emailLog) {
            let toReturn = { ...state, selectedEmailLog: emailLog };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE EmailLog ////
        ///////////////////////////
        async getOneEmailLog(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.emailLog.selectedEmailLog?._id === _id) {
                    resolve(reduxState.emailLog.selectedEmailLog);
                    return;
                }
                client
                    .service('emailLog')
                    .get(_id)
                    .then((res) => {
                        this.selectEmailLog(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get emailLog', error);
                        dispatch.toast.alert({ type: 'error', title: 'EmailLog', message: 'Failed to get emailLog' });
                        reject(error);
                    });
            });
        },
        setOneEmailLog(_id, reduxState) {
            if (reduxState.emailLog.selectedEmailLog?._id === _id) {
              return;
            }
            client
              .service("emailLog")
              .get(_id)
              .then((res) => {
                this.selectEmailLog(res);
              })
              .catch((error) => {
                console.log("Failed to set EmailLog", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "EmailLog",
                  message: "Failed to set emailLog",
                });
              });
          },
    })
};