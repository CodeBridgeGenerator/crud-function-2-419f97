import React from "react";
import AddressLayout from "../Layouts/AddressLayout";
import { connect } from "react-redux";
import AddressesPage from "./AddressesPage";

const AddressProjectLayoutPage = (props) => {
  return (
    <AddressLayout>
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
              Addresses {" > " + props.selectedAddress?.mobileno} 
              </p>
            </div>
          </div>
          <AddressesPage />
        </div>
      </div>
    </AddressLayout>
  );
};

const mapState = (state) => {
  const { selectedAddress } = state.address;
  return { selectedAddress };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(AddressProjectLayoutPage);