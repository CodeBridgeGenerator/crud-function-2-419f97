import React from "react";
import FieldMetaLayout from "../Layouts/FieldMetaLayout";
import { connect } from "react-redux";
import FieldMetaPage from "./FieldMetaPage";

const FieldMetaProjectLayoutPage = (props) => {
  return (
    <FieldMetaLayout>
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
              Field Meta {" > " + props.selectedFieldMeta?._id} 
              </p>
            </div>
          </div>
          <FieldMetaPage />
        </div>
      </div>
    </FieldMetaLayout>
  );
};

const mapState = (state) => {
  const { selectedFieldMeta } = state.fieldMeta;
  return { selectedFieldMeta };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(FieldMetaProjectLayoutPage);