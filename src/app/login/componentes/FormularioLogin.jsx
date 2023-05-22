"use client";
import {
  faKey,
  faLock,
  faQuestion,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import InputLogin from "./InputLogin";
import InputRegister from "./InputRegister";
import { loginEmail, registerEmail } from "@/app/api/hello/auth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function FormularioLogin() {
  const router =useRouter()
  const [register, setRegister] = useState(false);
  const [formulario, setFormulario] = useState({})
  const toogleRegister = () => {
    setRegister(!register);
  };
  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      loginEmail(formulario.email,formulario.password)
      toast.success('Bienvenido Nuevamente')
      router.push('/dashboard')
      
    } catch (error) {
      
    }
  };

 

 const handleRegister=async (e)=>{
  e.preventDefault();
  try {
    await registerEmail(formulario.nombreFantasia,formulario.name,formulario.email,formulario.password)
    router.push('/dashboard')
    toast.success('Usuario Creado Exitosamente')
  } catch (error) {
    
  }
 }

  return (
    <>
      <form className="px-10 py-2  w-10/12 flex flex-col justify-between items-stretch h-  animate-[aparecer_.5s]  ">
        <div className="bg-gray-700 rounded-full w-20 h-20  flex items-center justify-center mx-auto">
          <FontAwesomeIcon
            icon={faKey}
            className="text-stone-50 w-10 h-10 flex items-center justify-center mx-auto"
          />
        </div>
        <h2 className="text-lg w-full text-center font-medium my-2">Bienvenidos a Kaipy!</h2>
        <div className=" h-full flex-grow">
        {!register
          ? 
          <InputLogin handleChange={handleChange}/>
          :
          <InputRegister handleChange={handleChange}/>
        }
        </div>
        <div className="flex w-full  justify-center items-center gap-4">
          <div className="w-1/2 flex justify-center items-center gap-1 cursor-pointer">
            <p className="font-semibold text-sm ">Resetear clave</p>{" "}
            <FontAwesomeIcon icon={faQuestion} className="text-gray-700 h-3" />
          </div>
          <span
            onClick={toogleRegister}
            className="w-1/2 flex  justify-center items-center gap-1 cursor-pointer"
          >
            <p className="font-semibold text-sm"> {register?"Ingresar":"Registrarse"}</p>{" "}
            <FontAwesomeIcon icon={faUserPlus} className="text-gray-700 h-3" />
          </span>
        </div>
        <button
          onClick={!register?handleSubmit:handleRegister}
          className="bg-gray-700 rounded-sm px-3 mt-5 py-1.5 text-gray-50 font-semibold"
        >
          {!register?"Ingresar":"Registrar"}
        </button>
      </form>
    </>
  );
}
