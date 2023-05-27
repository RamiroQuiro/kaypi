"use client";
import React, { useEffect, useState } from "react";
import {
  faArrowsAltH,
  faMailBulk,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import InputFormularioDatos from "../../../components/InputFormularioDatos";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import BotonGuardar from "./BotonGuardar";

export default function FormularioPrimerosLink({ dataUser }) {
  const [formEntry, setFormEntry] = useState(dataUser);

  const guardarDatosContacto = useContextDatosUser(
    (state) => state.guardarDatosContacto
  );
  const { userData } = useContextDatosUser((state) => ({
    userData: state.userData,
  }));
  const handleChange = (e) => {
    setFormEntry({ ...formEntry, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setFormEntry(userData.datos);
  }, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    guardarDatosContacto(formEntry);
  };
  const links = [
    {
      id: 1,
      name: "llamada",
      valor: 3856771992,
      faicon: faPhone,
      number: "number",
      children: "Numero de Celular",
    },
    {
      id: 2,
      name: "email",
      valor: "ramiryexe@homail.com",
      faicon: faMailBulk,
      type: "email",
      children: "Email",
    },
    {
      id: 3,
      name: "whatsapp",
      valor: 3856771992,
      faicon: faArrowsAltH,
      type: "numero",
      children: "Numero para WhatsApp",
    },
  ];

  return (
    <form
      className="py-5 flex flex-col item-centar justify-between"
    >
      <div className="flex md:flex-row px-5 flex-wrap flex-col items-center justify-evenly md:text-center">
        <div className="flex flex-col  w-full gap-y-2 items-center justify-center">
          {links?.map((link) => (
            <InputFormularioDatos
              key={link.id}
              value={formEntry?.[link.name]}
              onChange={handleChange}
              name={link.name}
              faIcon={link.faicon}
              type={link.type}
            >
              {link.children}
            </InputFormularioDatos>
          ))}
          <BotonGuardar key={2} onClick={handleSubmit}>
            Guardar Datos
          </BotonGuardar>
        </div>
      </div>
    </form>
  );
}
