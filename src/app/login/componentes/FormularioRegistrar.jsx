
"use client"
import InputFormularioDatos from '@/components/InputFormularioDatos';
import { faKey, faLock, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FormularioRegistrar({toogleRegister}) {

  const handleChange=(e)=>{

  }
    const inputRegister = [
        {
          id: 1,
          name: "userName",
          type: "text",
          onChange: handleChange,
          faIcon: faUser,
          children: "Nombre de Usuario",
        },
        {
          id: 1,
          name: "razonSocial",
          type: "text",
          onChange: handleChange,
          faIcon: faUser,
          children: "Razon Social o Nombre de Fantasia",
        },
        {
          id: 1,
          name: "email",
          type: "email",
          onChange: handleChange,
          faIcon: faUser,
          children: "userMail@email.com",
        },
        {
          id: 2,
          name: "password",
          type: "password",
          onChange: handleChange,
          faIcon: faLock,
          children: "Password",
        },
      ];

     
  return (
    <form className="px-10 py-5  w-10/12 flex flex-col justify-between items-center h-full animate-[aparecer_.5s] ">
    <div className="bg-gray-700 rounded-full w-20  left-0 bottom-3 h-20  flex items-center justify-center mx-auto">
      <FontAwesomeIcon
        icon={faKey}
        className="text-stone-50 w-10 h-10 flex items-center justify-center mx-auto"
      />
    </div>
    <h2>Bienvenidos a Kaypi</h2>
    {inputRegister?.map((label) => (
      <InputFormularioDatos
        key={label.id}
        onChange={label.handleChange}
        type={label.type}
        name={label.name}
        faIcon={label.faIcon}
      >
        {label.children}
      </InputFormularioDatos>
    ))}

    <div className="flex w-full  justify-center items-center gap-4">
      <div className="w-1/2 flex justify-center items-center gap-1 cursor-pointer">
        <p className="font-semibold text-sm ">Resetear clave</p>{" "}
        <FontAwesomeIcon icon={faQuestion} className="text-gray-700 h-3" />
      </div>
      <div
        onClick={toogleRegister}
        className="w-1/2 flex  justify-center items-center gap-1 cursor-pointer"
      >
        <p className="font-semibold text-sm">Login</p>{" "}
        <FontAwesomeIcon icon={"faUserPlus"} className="text-gray-700 h-3" />
      </div>
    </div>
    <button
      onClick={"handleSubmit"}
      className="bg-gray-700 rounded-sm px-3 py-1.5 text-gray-50 font-semibold"
    >
      Ingresar
    </button>
  </form>
  )
}
