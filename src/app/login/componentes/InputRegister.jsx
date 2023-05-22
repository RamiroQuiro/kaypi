import InputFormularioDatos from '@/app/dashboard/DatosPersonales/InputFormularioDatos';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

export default function InputRegister({handleChange}) {
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
          id: 2,
          name: "razonSocial",
          type: "text",
          onChange: handleChange,
          faIcon: faUser,
          children: "Razon Social o Nombre de Fantasia",
        },
        {
          id: 3,
          name: "email",
          type: "email",
          onChange: handleChange,
          faIcon: faUser,
          children: "userMail@email.com",
        },
        {
          id: 4,
          name: "password",
          type: "password",
          onChange: handleChange,
          faIcon: faLock,
          children: "Password",
        },
      ];
  return (
    <>
    {inputRegister?.map((label) => (
              <InputFormularioDatos
              id={label.id}
                key={label.id}
                onChange={label.handleChange}
                type={label.type}
                name={label.name}
                faIcon={label.faIcon}
              >
                {label.children}
              </InputFormularioDatos>
            ))}
    </>
  )
}
