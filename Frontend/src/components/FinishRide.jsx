import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute w-[93%] top-0"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish this ride</h3>
      <div className="flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 rounded-full object-cover w-10"
            src="https://tse1.mm.bing.net/th?id=OIP.1O8f7eP2gSL2S4-cvkBu8QHaHW&pid=Api&P=0&h=220"
            alt=""
          />
          <h2 className="text-lg font-medium">Vihan Patel</h2>
        </div>
        <h5 className="text-lg font-semibold ">2.2 km</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya talav, ahamdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Third wave coffee</h3>
              <p className="text-sm -mt-1 text-gray-600">
                17th cross rd, Jayanagar, Bangalore
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">
                <i className="ri-money-rupee-circle-line">193.20</i>
              </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <Link
            to="/captain-home"
            className="w-full mt-5 flex justify-center
             bg-green-600 text-white 
        font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </Link>
          <p className=" mt-10 text-xs">
            Click on finish ride button if you have completed the payment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
