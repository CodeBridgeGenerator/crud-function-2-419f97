import React from "react";
import TeamLayout from "../Layouts/TeamLayout";
import { connect } from "react-redux";
import TeamsPage from "./TeamsPage";

const TeamProjectLayoutPage = (props) => {
  return (
    <TeamLayout>
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
              Teams {" > " + props.selectedTeam?.name} 
              </p>
            </div>
          </div>
          <TeamsPage />
        </div>
      </div>
    </TeamLayout>
  );
};

const mapState = (state) => {
  const { selectedTeam } = state.team;
  return { selectedTeam };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(TeamProjectLayoutPage);