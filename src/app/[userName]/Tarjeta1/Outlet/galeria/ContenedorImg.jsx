import { useContextVisitas } from "@/context/contextoVisita/contextoVistas";
import Image from "next/image";
import React from "react";

export default function ContenedorImg() {
  const userData = useContextVisitas((state) => state.userData);

  const imagenes = userData?.images;
  return (
    
      imagenes.length <= 1 ? (
        <div className="relative w-full h-1/5 animate-pulse"></div>
      ) : (
        imagenes.filter(elm=>elm.nombre!=="perfil").map((img) => (
          <div key={img.uid} className="relative w-full h-1/5 rounded-xl overflow-hidden flex-1 hover:flex-grow-[10] duration-300">
            <Image
              fill
              alt={img.nombre}
              src={img.url}
              quality={75}
              className="w-3/4 object-cover object-center"
            />
          </div>
        ))
      )
  );
}
