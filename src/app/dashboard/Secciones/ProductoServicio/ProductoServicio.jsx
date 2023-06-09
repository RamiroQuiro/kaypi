"use client"
import { useContextDatosUser } from '@/context/datosUser/contextoDatosUser';
import InputArea from '../../componentes/InputArea'
import { useEffect, useState } from 'react';
import BotonGuardar from '../../componentes/BotonGuardar';

export default function ProductoServicio() {
  const guardarSecciones = useContextDatosUser(
    (state) => state.guardarSecciones
    );
    const { userData } = useContextDatosUser((state) => ({
      userData: state.userData,
    }));
    const [formEntry, setFormEntry] = useState(userData?.secciones?.productoServicio)

    useEffect(() => {
      setFormEntry(userData?.secciones?.productoServicio);
    }, [userData]);
 
  const handleOnChange = (e) => {
  setFormEntry(e.target.value );
  };

  const handleGaurdarDatos = async (e) => {
    e.preventDefault();
    guardarSecciones("productoServicio",formEntry);
  };

  return (
    <div className="flex  flex-col w-full mx-auto py-10 px-5">
      <InputArea
      value={formEntry}
      name="productoServicio"
      onChange={handleOnChange}
      placeholder={"Escribe aqui lo que haces, el servicio que prestas. Si es un negocio coloca aqui una descripcion de lo que vendes, como lo vendes, tu historia"}
      >
      
      </InputArea>
      <BotonGuardar
      onClick={handleGaurdarDatos}
      >
        Guardar Descripcion
      </BotonGuardar>
    </div>
  )
}
