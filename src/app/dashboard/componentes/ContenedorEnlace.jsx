import { faArchive, faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ContenedorEnlace({ link }) {
  return (
    <div className="relative flex group pb-5 flex-col items-start justify-betwwwen w-full bg-gray-200 border-2 gap-y-3 rounded-2xl p-3 my-2">
      <div className="bg-white px-2 py-1 rounded-lg absolute hidden group-hover:flex items-center justify-between right-2 top-1 animate-[aparecer_.2s]">
        <div className="rounded-full w-5 bg-gray-200 h-5 p-1 cursor-pointer flex items-center justify-center animate-[aparecer_.5s]">
          <FontAwesomeIcon className=" w-3 h-3 " icon={faArchive} />
        </div>
      </div>
      <div className="flex flex-col items-start text-sm  justify-betwwwen w-full ">
        <span className="font-bold uppercase ">{link.name}</span>
        <p
          id="titlo"
          className="bg-transparent outline-none focus:outline-none rounded-t-lg focus:bg-white duration-300 border-b-2 w-full py-2 placeholder:px-2 focus:ring-0 border-primary-100 selection:border-none"
        >
          {link.link}
        </p>
      </div>
    </div>
  );
}
