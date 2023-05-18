"use client"
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ContenedorInputEnlaces() {

const addEnlaces=useContextDatosUser(state=>state.addEnlaces)
  const [inputForm, setInputForm] = useState({})

  const handleInput=(e)=>{

    setInputForm({...inputForm, [e.target.name]: e.target.value})

  }

const addInput=(e)=>{
  e.preventDefault()
  setInputForm({...inputForm,id:inputForm.id+1})
  addEnlaces(inputForm)
  setInputForm({})
}
  return (
    <form className="relative flex group pb-5 flex-col items-start justify-betwwwen w-full bg-gray-200 border-2 gap-y-3 rounded-2xl p-3 my-2">
      <div className="bg-white px-2 py-1 rounded-lg absolute hidden group-hover:flex items-center justify-between right-2 top-1 animate-[aparecer_.2s]">
        <button 
        onClick={addInput}
        className="rounded-full w-5 bg-gray-200 h-5 p-1 cursor-pointer flex items-center justify-center animate-[aparecer_.5s]">
          <FontAwesomeIcon
          className=" w-3 h-3 "
          icon={faAdd}
          />
        </button>
      </div>
      <div className="flex flex-col items-start text-sm  justify-betwwwen w-full ">
        <label htmlFor="titulo">Titulo del Enlace</label>
        <input
        onChange={handleInput}
        value={inputForm.name}
          type="text"
          name="name"
          id="titlo"
          className="bg-transparent outline-none focus:outline-none rounded-t-lg focus:bg-white duration-300 border-b-2 w-full p-2 placeholder:px-2 focus:ring-0 border-primary-100 selection:border-none"
        />
      </div>
      <div className="flex flex-col items-start text-sm  justify-betwwwen w-full">
        <label htmlFor="enlace">Direccion del enlace</label>
        <input
                value={inputForm.link}
            onChange={handleInput}
          type="text"
          name="link"
          id="titlo"
          className="bg-transparent outline-none focus:outline-none  rounded-t-lg focus:bg-white duration-300 border-b-2 w-full p-2 placeholder:px-2 focus:ring-0 border-primary-100 selection:border-none"
        />
      </div>
    </form>
  );
}
