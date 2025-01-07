import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute w-[93%] top-0 "
        onClick={() => {
          props.setvehiclePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 mb-2 active:border-black  rounded-xl w-full p-3  items-center justify-between"
      >
        <img
          className="h-10"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 min aways</h5>
          <p className="font-normal text-xs text-gray-600 ">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">
          <i className="ri-money-rupee-circle-line">193.20</i>{" "}
        </h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 mb-2 active:border-black  rounded-xl w-full p-3  items-center justify-between"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto
            <span>
              <i className="ri-user-3-fill">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 min aways</h5>
          <p className="font-normal text-xs text-gray-600 ">
            Affordable, Motorcycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">
          <i className="ri-money-rupee-circle-line">193.20</i>{" "}
        </h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 mb-2 active:border-black  -xl w-full p-3  items-center justify-between"
      >
        <img
          className="h-10"
          src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto
            <span>
              <i className="ri-user-3-fill">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 min aways</h5>
          <p className="font-normal text-xs text-gray-600 ">
            Affordable, Auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">
          <i className="ri-money-rupee-circle-line">193.20</i>{" "}
        </h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
