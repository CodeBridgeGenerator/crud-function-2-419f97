import React from "react";
import SectionLayout from "../Layouts/SectionLayout";
import { connect } from "react-redux";
import SectionsPage from "./SectionsPage";

const SectionProjectLayoutPage = (props) => {
  return (
    <SectionLayout>
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
              Sections {" > " + props.selectedSection?.department} 
              </p>
            </div>
          </div>
          <SectionsPage />
        </div>
      </div>
    </SectionLayout>
  );
};

const mapState = (state) => {
  const { selectedSection } = state.section;
  return { selectedSection };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SectionProjectLayoutPage);