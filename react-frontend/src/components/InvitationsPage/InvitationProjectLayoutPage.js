import React from "react";
import InvitationLayout from "../Layouts/InvitationLayout";
import { connect } from "react-redux";
import InvitationsPage from "./InvitationsPage";

const InvitationProjectLayoutPage = (props) => {
  return (
    <InvitationLayout>
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
              Invitations {" > " + props.selectedInvitation?._id} 
              </p>
            </div>
          </div>
          <InvitationsPage />
        </div>
      </div>
    </InvitationLayout>
  );
};

const mapState = (state) => {
  const { selectedInvitation } = state.invitation;
  return { selectedInvitation };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(InvitationProjectLayoutPage);