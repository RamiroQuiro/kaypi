import InputFormularioDatos from '@/app/dashboard/DatosPersonales/InputFormularioDatos';
import { faKey, faLock, faQuestion, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function FormularioLogin() {
    
  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const resultado=await supabaseClient.auth.signUp(formulario)
      // navigate('/dashboard')
    } catch (error) {
      console.log(error);
    }
  };

const inputLabel=[
    {
        id:1,
        name:"email",
        type:"email",
        onChange:handleChange,
        faIcon:faUser,
        children:"userMail@email.com"
    },
    {
        id:2,
        name:"password",
        type:"password",
        onChange:handleChange,
        faIcon:faLock,
        children:"Password"
    },
]

  return (
   
    <form className="px-10 py-5  w-10/12 flex flex-col justify-between items-center h-full  ">
    <div className="bg-gray-700 rounded-full w-20  left-0 bottom-3 h-20  flex items-center justify-center mx-auto">
      <FontAwesomeIcon
        icon={faKey}
        className="text-stone-50 w-10 h-10 flex items-center justify-center mx-auto"
      />
    </div>
    <h2>Hola de nuevo!</h2>
{

    inputLabel?.map((label)=>(
    <InputFormularioDatos
    key={label.id}
     onChange={label.handleChange}
     type={label.type}
     name={label.name}
     faIcon={label.faIcon}
    >
        {label.children}
    </InputFormularioDatos>

    ))
}

    <div className="flex w-full  justify-center items-center gap-4">
      <div className="w-1/2 flex justify-center items-center gap-1 cursor-pointer">
        <p className="font-semibold text-sm ">Resetear clave</p>{" "}
        <FontAwesomeIcon
          icon={faQuestion}
          className="text-gray-700 h-3"
        />
      </div>
      <div
        onClick={() => {
        //   navigate("/registrar");
        }}
        className="w-1/2 flex  justify-center items-center gap-1 cursor-pointer"
      >
        <p className="font-semibold text-sm">Registrarse</p>{" "}
        <FontAwesomeIcon
          icon={faUserPlus}
          className="text-gray-700 h-3"
        />
      </div>
    </div>
    <button
      onClick={handleSubmit}
      className="bg-gray-700 rounded-sm px-3 py-1.5 text-gray-50 font-semibold"
    >
      Ingresar
    </button>
  </form>
  )
}
