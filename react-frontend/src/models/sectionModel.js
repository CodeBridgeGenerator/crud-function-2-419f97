import client from '../services/restClient';

export const section = {
    state: {
        selectedSection: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectSection(state, section) {
            let toReturn = { ...state, selectedSection: section };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE Section ////
        ///////////////////////////
        async getOneSection(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.section.selectedSection?._id === _id) {
                    resolve(reduxState.section.selectedSection);
                    return;
                }
                client
                    .service('sections')
                    .get(_id)
                    .then((res) => {
                        this.selectSection(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get section', error);
                        dispatch.toast.alert({ type: 'error', title: 'Section', message: 'Failed to get section' });
                        reject(error);
                    });
            });
        },
        setOneSection(_id, reduxState) {
            if (reduxState.section.selectedSection?._id === _id) {
              return;
            }
            client
              .service("sections")
              .get(_id)
              .then((res) => {
                this.selectSection(res);
              })
              .catch((error) => {
                console.log("Failed to set Section", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "Section",
                  message: "Failed to set section",
                });
              });
          },
    })
};