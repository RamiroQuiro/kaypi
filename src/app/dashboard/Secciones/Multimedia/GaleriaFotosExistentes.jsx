"use client";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GaleriaFotosExistentes() {
  const { userData } = useContextDatosUser((state) => ({
    userData: state.userData,
  }));
  const [arrayImagenes, setArrayImagenes] = useState(userData?.images);
  console.log(arrayImagenes);

  return (
    <div className="flex flex-wrap items-center bg-red-500 h-auto justify-evenly mx-auto">
      {!arrayImagenes ? (
        <span>No hay imagenes cargadas</span>
      ) : (
        arrayImagenes?.map((img) => (
          <div key={img?.uid} className="relative flex-grow w-1/3">
            <Image fill quality={75} alt={img?.nombre} src={img?.url} />
          </div>
        ))
      )}
    </div>
  );
}
