import React from "react";
import PreferenceLayout from "../Layouts/PreferenceLayout";
import { connect } from "react-redux";
import PreferencesPage from "./PreferencesPage";

const PreferenceProjectLayoutPage = (props) => {
  return (
    <PreferenceLayout>
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
              Preferences {" > " + props.selectedPreference?.name} 
              </p>
            </div>
          </div>
          <PreferencesPage />
        </div>
      </div>
    </PreferenceLayout>
  );
};

const mapState = (state) => {
  const { selectedPreference } = state.preference;
  return { selectedPreference };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(PreferenceProjectLayoutPage);