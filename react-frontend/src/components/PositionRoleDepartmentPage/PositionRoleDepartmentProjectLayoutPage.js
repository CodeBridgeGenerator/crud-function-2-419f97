import React from "react";
import PositionRoleDepartmentLayout from "../Layouts/PositionRoleDepartmentLayout";
import { connect } from "react-redux";
import PositionRoleDepartmentPage from "./PositionRoleDepartmentPage";

const PositionRoleDepartmentProjectLayoutPage = (props) => {
  return (
    <PositionRoleDepartmentLayout>
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
              Position Role Department {" > " + props.selectedPositionRoleDepartment?.department} 
              </p>
            </div>
          </div>
          <PositionRoleDepartmentPage />
        </div>
      </div>
    </PositionRoleDepartmentLayout>
  );
};

const mapState = (state) => {
  const { selectedPositionRoleDepartment } = state.positionRoleDepartment;
  return { selectedPositionRoleDepartment };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(PositionRoleDepartmentProjectLayoutPage);