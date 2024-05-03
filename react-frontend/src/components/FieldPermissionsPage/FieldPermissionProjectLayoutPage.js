import React from "react";
import FieldPermissionLayout from "../Layouts/FieldPermissionLayout";
import { connect } from "react-redux";
import FieldPermissionsPage from "./FieldPermissionsPage";

const FieldPermissionProjectLayoutPage = (props) => {
  return (
    <FieldPermissionLayout>
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
              Field Permissions {" > " + props.selectedFieldPermission?.roles} 
              </p>
            </div>
          </div>
          <FieldPermissionsPage />
        </div>
      </div>
    </FieldPermissionLayout>
  );
};

const mapState = (state) => {
  const { selectedFieldPermission } = state.fieldPermission;
  return { selectedFieldPermission };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(FieldPermissionProjectLayoutPage);