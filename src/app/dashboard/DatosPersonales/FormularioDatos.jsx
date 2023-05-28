"use client";
import React, { useState,useEffect } from "react";
import { Toaster } from "react-hot-toast";
import InputFormularioDatos from "../../../components/InputFormularioDatos";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import BotonGuardar from "../componentes/BotonGuardar";
import InputArea from "../componentes/InputArea";

export default function FormularioDatos({ dateUser }) {
  const [formEntry, setFormEntry] = useState(dateUser);

  const guardarDatosContacto = useContextDatosUser(
    (state) => state.guardarDatosContacto
  );
  const { userData } = useContextDatosUser((state) => ({
    userData: state.userData,
  }));

  useEffect(() => {
    setFormEntry(userData.datos);
  }, [userData]);

  const handleOnChange = (e) => {
    setFormEntry({ ...formEntry, [e.target.name]: e.target.value });
  };

  const handleGaurdarDatos = async (e) => {
    e.preventDefault();
    guardarDatosContacto(formEntry);
  };

  return (
    <form
      onSubmit={handleGaurdarDatos}
      className="py-10 flex flex-col item-centar justify-between"
    >
      
      {/* info personal */}
      <div className="flex md:flex-row flex-col items-center justify-evenly md:text-center">
        <InputFormularioDatos
          value={formEntry?.razonSocial}
          onChange={handleOnChange}
          name={"razonSocial"}
          type={"text"}
          placeholder="Ramiro Code"
        >
          Nombre de Usuario | Nombre de Fantasía
        </InputFormularioDatos>
        <InputFormularioDatos
          value={formEntry?.name}
          onChange={handleOnChange}
          name={"name"}
          type={"text"}
          placeholder="Ramiro Quiroga"
        >
          Titulo o Nombre Apellido
        </InputFormularioDatos>
        <InputFormularioDatos
          value={formEntry?.email}
          onChange={handleOnChange}
          name={"email"}
          type={"email"}
          placeholder="ramiro@quiroga.com"
        >
          Email
        </InputFormularioDatos>
      </div>

      <hr className="mt-6 border-b-2 border-blueGray-300" />

      <h3 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Informacion de Contacto
      </h3>
      <div className="flex md:flex-row flex-col items-center justify-evenly md:text-center">
        <InputFormularioDatos
          value={formEntry?.celular}
          onChange={handleOnChange}
          name={"celular"}
          type={"number"}
          placeholder="3856771992"
        >
          Celular o Tel
        </InputFormularioDatos>
        <InputFormularioDatos
          value={formEntry?.direccion}
          onChange={handleOnChange}
          name={"direccion"}
          type={"text"}
          placeholder="Mza 14 Lote 24 Barrio El Rincon"
        >
          Dirección
        </InputFormularioDatos>
        <InputFormularioDatos
          value={formEntry?.ciudad}
          onChange={handleOnChange}
          name={"ciudad"}
          type={"text"}
          placeholder="La Banda - Santiago del Estero"
        >
          Ciudad - Provincia
        </InputFormularioDatos>

        <InputFormularioDatos
          value={formEntry?.pais}
          onChange={handleOnChange}
          name={"pais"}
          type={"text"}
          placeholder="Argentina"
        >
          Pais
        </InputFormularioDatos>
      </div>

      <hr className="mt-6 border-b-2 border-blueGray-300" />

      <h3 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Descripción
      </h3>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <InputArea
          placeholder={"Has una breve descripcion para mostrar en la presentación de tu tarjeta"}
          key={123}
          onChange={handleOnChange}
          value={formEntry?.descripcion}
          >
          
          Sobre Mi
          </InputArea>
        </div>
      </div>
      <BotonGuardar
      onClick={handleGaurdarDatos}
      >
        Guardar Datos
      </BotonGuardar>
    </form>
  );
}
