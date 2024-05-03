import React from "react";
import MobileNumberLayout from "../Layouts/MobileNumberLayout";
import { connect } from "react-redux";
import MobileNumbersPage from "./MobileNumbersPage";

const MobileNumberProjectLayoutPage = (props) => {
  return (
    <MobileNumberLayout>
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
              Mobile Numbers {" > " + props.selectedMobileNumber?.name} 
              </p>
            </div>
          </div>
          <MobileNumbersPage />
        </div>
      </div>
    </MobileNumberLayout>
  );
};

const mapState = (state) => {
  const { selectedMobileNumber } = state.mobileNumber;
  return { selectedMobileNumber };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(MobileNumberProjectLayoutPage);