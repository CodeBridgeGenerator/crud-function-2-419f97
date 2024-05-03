import React from "react";
import BranchLayout from "../Layouts/BranchLayout";
import { connect } from "react-redux";
import BranchesPage from "./BranchesPage";

const BranchProjectLayoutPage = (props) => {
  return (
    <BranchLayout>
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
              Branches {" > " + props.selectedBranch?.companyName} 
              </p>
            </div>
          </div>
          <BranchesPage />
        </div>
      </div>
    </BranchLayout>
  );
};

const mapState = (state) => {
  const { selectedBranch } = state.branch;
  return { selectedBranch };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(BranchProjectLayoutPage);