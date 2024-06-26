import React from "react";
import UserCompanyLayout from "../Layouts/UserCompanyLayout";
import { connect } from "react-redux";
import UserCompaniesPage from "./UserCompaniesPage";

const UserCompanyProjectLayoutPage = (props) => {
  return (
    <UserCompanyLayout>
      <div className="pt-2">
        <div className="card p-0 overflow-hidden ">
          <div
            className="flex justify-content-between p-1 mb-2 shadow-2"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #d30078, #d1008f, #c600ab, #af00ca, #8312eb)",
            }}
          >
            <div className="flex align-items-center text-white">
              <p className="text-2xl text-white">
              User Companies {" > " + props.selectedUserCompany?.companyName} 
              </p>
            </div>
          </div>
          <UserCompaniesPage />
        </div>
      </div>
    </UserCompanyLayout>
  );
};

const mapState = (state) => {
  const { selectedUserCompany } = state.userCompany;
  return { selectedUserCompany };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(UserCompanyProjectLayoutPage);