import React from "react";
import PhoneLayout from "../Layouts/PhoneLayout";
import { connect } from "react-redux";
import PhonesPage from "./PhonesPage";

const PhoneProjectLayoutPage = (props) => {
  return (
    <PhoneLayout>
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
              Phones {" > " + props.selectedPhone?._id} 
              </p>
            </div>
          </div>
          <PhonesPage />
        </div>
      </div>
    </PhoneLayout>
  );
};

const mapState = (state) => {
  const { selectedPhone } = state.phone;
  return { selectedPhone };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(PhoneProjectLayoutPage);