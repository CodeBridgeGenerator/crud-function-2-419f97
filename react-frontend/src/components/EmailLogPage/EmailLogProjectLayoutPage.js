import React from "react";
import EmailLogLayout from "../Layouts/EmailLogLayout";
import { connect } from "react-redux";
import EmailLogPage from "./EmailLogPage";

const EmailLogProjectLayoutPage = (props) => {
  return (
    <EmailLogLayout>
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
              Email Log {" > " + props.selectedEmailLog?.name} 
              </p>
            </div>
          </div>
          <EmailLogPage />
        </div>
      </div>
    </EmailLogLayout>
  );
};

const mapState = (state) => {
  const { selectedEmailLog } = state.emailLog;
  return { selectedEmailLog };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(EmailLogProjectLayoutPage);