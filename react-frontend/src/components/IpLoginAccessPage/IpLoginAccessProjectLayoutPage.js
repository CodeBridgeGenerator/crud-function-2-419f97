import React from "react";
import IpLoginAccessLayout from "../Layouts/IpLoginAccessLayout";
import { connect } from "react-redux";
import IpLoginAccessPage from "./IpLoginAccessPage";

const IpLoginAccessProjectLayoutPage = (props) => {
  return (
    <IpLoginAccessLayout>
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
              Ip Login Access {" > " + props.selectedIpLoginAccess?.roles} 
              </p>
            </div>
          </div>
          <IpLoginAccessPage />
        </div>
      </div>
    </IpLoginAccessLayout>
  );
};

const mapState = (state) => {
  const { selectedIpLoginAccess } = state.ipLoginAccess;
  return { selectedIpLoginAccess };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(IpLoginAccessProjectLayoutPage);