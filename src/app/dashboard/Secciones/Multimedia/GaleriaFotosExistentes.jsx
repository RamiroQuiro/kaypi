"use client";
import { traerImagenes } from "@/api/hello/firestore";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import Image from "next/image";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

export default function GaleriaFotosExistentes() {
  const { userData, userActivo } = useContextDatosUser(
    (state) => ({
      userData: state.userData,
      userActivo: state.userActivo,
    }),
    shallow
  );
  const [arrayImagenes, setArrayImagenes] = useState(userData?.images);

  useEffect(() => {
    const data = async () =>{
       
       const datos=await traerImagenes(userActivo?.uid)
       setArrayImagenes(datos)
      };
      data()
      
    }, [userActivo]);
    
    console.log(arrayImagenes);
  console.log(arrayImagenes);

  return (
    <div className="flex flex-wrap w-full  items-center   justify-evenly mx-auto gap-4 mt-10">
      {!arrayImagenes ? (
        <span>No hay imagenes cargadas</span>
      ) : (
        arrayImagenes?.map((img) => (
          <div
            key={img?.uid}
            className="relative bg-gray-100 flex-grow w-36 min-w-[144px] max-w-[230px] rounded-lg border p-1 shadow-md h-36"
          >
            <Image
              fill
              quality={75}
              alt={img?.nombre}
              src={img?.url}
              className="object-cover object-center w-full"
            />
          </div>
        ))
      )}
    </div>
  );
}
