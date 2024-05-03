import React from "react";
import ServiceMetaLayout from "../Layouts/ServiceMetaLayout";
import { connect } from "react-redux";
import ServiceMetaPage from "./ServiceMetaPage";

const ServiceMetaProjectLayoutPage = (props) => {
  return (
    <ServiceMetaLayout>
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
              Service Meta {" > " + props.selectedServiceMeta?._id} 
              </p>
            </div>
          </div>
          <ServiceMetaPage />
        </div>
      </div>
    </ServiceMetaLayout>
  );
};

const mapState = (state) => {
  const { selectedServiceMeta } = state.serviceMeta;
  return { selectedServiceMeta };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(ServiceMetaProjectLayoutPage);