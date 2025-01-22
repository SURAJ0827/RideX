import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://tse3.mm.bing.net/th?id=OIP.jx_TJ2a9yoz2S4jtNepMVwHaF0&pid=Api&P=0&h=220"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Suraj</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">mh 02 ab 1234</h4>
            <p className="text-sm text-gray-600 ">maruti suzuki alto</p>
          </div>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
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
        </div>
        <button
          className="w-full mt-5 bg-green-600 text-white 
        font-semibold p-2 rounded-lg"
        >
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
