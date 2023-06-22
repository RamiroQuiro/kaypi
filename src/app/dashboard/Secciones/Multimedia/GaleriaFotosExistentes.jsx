"use client";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import Image from "next/image";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import BotonDeLosEnlaces from "../../componentes/BotonDeLosEnlaces";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function GaleriaFotosExistentes() {
  const { userData } = useContextDatosUser(
    (state) => ({
      userData: state.userData,
    }),
    shallow
  );
  const eliminarImages = useContextDatosUser((state) => state.eliminarImages);
  const [arrayImagenes, setArrayImagenes] = useState(userData?.images);

  useEffect(() => {
    setArrayImagenes(userData?.images);
  }, [arrayImagenes, userData]);

  const removeImageFirestore = (fileName) => {
    eliminarImages(fileName);
  };

  return (
    <div className="flex flex-wrap w-full  items-center   justify-evenly mx-auto gap-4 mt-10">
      {!arrayImagenes.filter((img) => img.nombre !== "perfil") ? (
        <span>No hay imagenes cargadas</span>
      ) : (
        arrayImagenes
          ?.filter((img) => img.nombre !== "perfil")
          .map((img) => (
            <div
              key={img?.uid}
              className="relative bg-gray-100 flex-grow w-36 group animate-[aparecer_1s] min-w-[144px] max-w-[230px] rounded-lg border p-1 shadow-md h-36"
            >
              <div className="bg-white px-2 py-1  z-30 rounded-lg absolute hidden group-hover:flex items-center justify-between right-2 top-1 animate-[aparecer_.2s]">
                <BotonDeLosEnlaces
                  onClick={() => removeImageFirestore(img?.uid)}
                  faIcon={faTrash}
                />
              </div>
              <Image
                fill
                quality={75}
                alt={img?.nombre}
                src={img?.url}
                className="object-cover object-center w-full rounded-lg"
              />
            </div>
          ))
      )}
    </div>
  );
}
