import client from '../services/restClient';

export const company = {
    state: {
        selectedCompany: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectCompany(state, company) {
            let toReturn = { ...state, selectedCompany: company };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE Company ////
        ///////////////////////////
        async getOneCompany(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.company.selectedCompany?._id === _id) {
                    resolve(reduxState.company.selectedCompany);
                    return;
                }
                client
                    .service('companies')
                    .get(_id)
                    .then((res) => {
                        this.selectCompany(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get company', error);
                        dispatch.toast.alert({ type: 'error', title: 'Company', message: 'Failed to get company' });
                        reject(error);
                    });
            });
        },
        setOneCompany(_id, reduxState) {
            if (reduxState.company.selectedCompany?._id === _id) {
              return;
            }
            client
              .service("companies")
              .get(_id)
              .then((res) => {
                this.selectCompany(res);
              })
              .catch((error) => {
                console.log("Failed to set Company", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "Company",
                  message: "Failed to set company",
                });
              });
          },
    })
};