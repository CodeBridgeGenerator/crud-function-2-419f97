import React from "react";
import DepartmentLayout from "../Layouts/DepartmentLayout";
import { connect } from "react-redux";
import DepartmentsPage from "./DepartmentsPage";

const DepartmentProjectLayoutPage = (props) => {
  return (
    <DepartmentLayout>
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
              Departments {" > " + props.selectedDepartment?.branch} 
              </p>
            </div>
          </div>
          <DepartmentsPage />
        </div>
      </div>
    </DepartmentLayout>
  );
};

const mapState = (state) => {
  const { selectedDepartment } = state.department;
  return { selectedDepartment };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(DepartmentProjectLayoutPage);