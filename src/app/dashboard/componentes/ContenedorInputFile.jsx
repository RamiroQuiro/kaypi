"use client";
import { useEffect, useState } from "react";
import BotonGuardar from "./BotonGuardar";
import Image from "next/image";
import { cargaImagenes } from "@/api/hello/storagefirebase";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";

export default function ContenedorInputFile() {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [fileName, setFileName] = useState(null);
  const { userActivo } = useContextDatosUser((state) => ({
    userActivo: state.userActivo,
  }));

  useEffect(() => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  }, [file]);

  const handleImage = (e) => {
    setFileName(e.target.name);
    setFile(e.target.files[0]);
  };

  const cargarImagen = (e) => {
    e.preventDefault();
    cargaImagenes(userActivo.uid, file, fileName);
  };
  return (
    <div className="flex-auto  w-11/12 md:w-full md:px-4 lg:px-4 mx-auto  flex items-center justify-between px-5 pt-5">
      <div className="w-2/3 relative h-full  mx-auto">
        {previewURL ? (
          <Image
            alt="Perfil"
            src={previewURL}
            width={100}
            height={100}
            quality={75}
            className="rounded-full w-36 h-36 bg-gray-100 border-primary-100/50 border-y-2 cursor-pointer flex items-center justify-center mx-auto object-contain p-0.5"
          />
        ) : (
          <label
            htmlFor="fotoInput"
            className="rounded-full w-36 h-36 bg-gray-100 border-primary-100/50 border-y-2 cursor-pointer flex items-center justify-center mx-auto"
          >
            <span className="text-xs mx-auto text-center">
              Click aqui para cargar tu imagen
            </span>
            <input
              onChange={handleImage}
              type="file"
              name="perfil"
              id="fotoInput"
              className="hidden"
            />
          </label>
        )}
      </div>
      <BotonGuardar onClick={cargarImagen}>Guardar Imagen</BotonGuardar>
    </div>
  );
}
