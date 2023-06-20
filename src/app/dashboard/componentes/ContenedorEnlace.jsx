import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import BotonDeLosEnlaces from "./BotonDeLosEnlaces";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";

export default function ContenedorEnlace({ link }) {


const removeEnlace=useContextDatosUser(state=>state.removeEnlace)

const onClickRemove=()=>{
  removeEnlace(link.id)
}

  return (
    <div className="relative flex group pb-5 flex-col items-start justify-betwwwen w-11/12 md:w-full bg-gray-100 border-2 gap-y-3 rounded-2xl p-3 my-2 animate-[aparecer_.5s]">
      <div className="bg-white px-2 py-1 rounded-lg absolute hidden group-hover:flex items-center justify-between right-2 top-1 animate-[aparecer_.2s]">
        <BotonDeLosEnlaces
        faIcon={faTrash}
        onClick={onClickRemove}
        />
      </div>
      <div className="flex flex-col items-start text-sm  justify-betwwwen w-full ">
        <span className="font-bold uppercase ">{link.name}</span>
        <p
          id="titlo"
          className="bg-transparent outline-none focus:outline-none rounded-t-lg focus:bg-white duration-300 border-b-2 w-full py-2 placeholder:px-2 focus:ring-0 border-primary-100/50 selection:border-none"
        >
          {link.link}</p>

      </div>
    </div>
  );
}
