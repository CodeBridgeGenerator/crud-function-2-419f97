import React from "react";
import CompanyLayout from "../Layouts/CompanyLayout";
import { connect } from "react-redux";
import CompaniesPage from "./CompaniesPage";

const CompanyProjectLayoutPage = (props) => {
  return (
    <CompanyLayout>
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
              Companies {" > " + props.selectedCompany?._id} 
              </p>
            </div>
          </div>
          <CompaniesPage />
        </div>
      </div>
    </CompanyLayout>
  );
};

const mapState = (state) => {
  const { selectedCompany } = state.company;
  return { selectedCompany };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(CompanyProjectLayoutPage);