import React from "react";
import RefPositionLayout from "../Layouts/RefPositionLayout";
import { connect } from "react-redux";
import RefPositionsPage from "./RefPositionsPage";

const RefPositionProjectLayoutPage = (props) => {
  return (
    <RefPositionLayout>
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
              Ref Positions {" > " + props.selectedRefPosition?.department} 
              </p>
            </div>
          </div>
          <RefPositionsPage />
        </div>
      </div>
    </RefPositionLayout>
  );
};

const mapState = (state) => {
  const { selectedRefPosition } = state.refPosition;
  return { selectedRefPosition };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(RefPositionProjectLayoutPage);