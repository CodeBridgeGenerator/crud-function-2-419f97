import React from "react";
import MobileDeviceLayout from "../Layouts/MobileDeviceLayout";
import { connect } from "react-redux";
import MobileDevicesPage from "./MobileDevicesPage";

const MobileDeviceProjectLayoutPage = (props) => {
  return (
    <MobileDeviceLayout>
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
              Mobile Devices {" > " + props.selectedMobileDevice?.mobileno} 
              </p>
            </div>
          </div>
          <MobileDevicesPage />
        </div>
      </div>
    </MobileDeviceLayout>
  );
};

const mapState = (state) => {
  const { selectedMobileDevice } = state.mobileDevice;
  return { selectedMobileDevice };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(MobileDeviceProjectLayoutPage);