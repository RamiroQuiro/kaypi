import InputFormularioDatos from '@/components/InputFormularioDatos';
import { faLock, faMailBulk, faUser, faUserAlt, faUserAltSlash, faUserAstronaut, faUserCheck, faUserCog } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

export default function InputRegister({handleChange}) {
    const inputRegister = [
        {
          id: 1,
          name: "nombreApellido",
          type: "text",
          onChange: handleChange,
          faIcon: faUser,
          children: "Nombre  y Apellido",
        },
        {
          id: 2,
          name: "userName",
          type: "text",
          onChange: handleChange,
          faIcon: faUserAstronaut,
          children: "Elige un nombre de Usuario",
        },
        {
          id: 3,
          name: "email",
          type: "email",
          onChange: handleChange,
          faIcon: faMailBulk,
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
                onChange={label.onChange}
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
