import React from "react";

export default function CardDashboard({ descripcion, info, svg }) {
  return (
    <div className="flex shadow-lg w-36 mx-auto  items-center px-4 py-2  text-gray-700 rounded-lg shadow-xs bg-gradient-to-tl  from-gray-300  to-gray-200">
      <div className=" mr-4 rounded-full bg-primary-100 p-2">{svg}</div>
      <div className="flex-col flex items-center justify-center flex-grow">
        <p className=" text-sm font-medium ">{descripcion}</p>
        <p className="text-lg md:text-2xl md:font-bold font-semibold ">{info}</p>
      </div>
    </div>
  );
}
