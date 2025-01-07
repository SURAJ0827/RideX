import React from "react";

const LocationSearchPanel = (props) => {
  // sample array for location

  const locations = [
    "24B, newa kappors cafe, suraj patil, kolhapur",
    "22B, newa malahotra cafe, suman patil, kolhapur",
    "100B, newa sighania cafe, pradip patil, kolhapur",
    "12A, near patils  cafe, patil patil, kolhapur",
  ];
  return (
    <div>
      {/* this is just a  sample data */}
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setvehiclePanel(true);
              props.setpanelOpen(false);
            }}
            className="flex gap-4 border-2 border-gray-50 active:border-black  rounded-xl p-3 items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default LocationSearchPanel;
