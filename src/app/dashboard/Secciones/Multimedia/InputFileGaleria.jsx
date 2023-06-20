"use client";

import { cargaImagenes } from "@/api/hello/storagefirebase";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function InputFileGaleria() {
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
    setFileName(e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  const cargarImagen = (e) => {
    e.preventDefault();
    cargaImagenes(userActivo.uid, file, fileName).then(()=>{
      setPreviewURL(null)
    })
  };

  return (
    <>
      <div className="border rounded-lg  w-full md:w-2/3 mx-auto  mb-10 flex items-center justify-between">
        <label
          htmlFor="galeria"
          className="cursor-pointer bg-gray-700  hover:bg-primary-100 duration-200 p-2 rounded-l-lg text-gray-100 font-semibold text-sm"
        >
          Click para cargar tus imagenes
          <input
            onChange={handleImage}
            type="file"
            name="galeria"
            id="galeria"
            className="hidden"
          />
        </label>
        <span>{fileName}</span>
        <button
          onClick={cargarImagen}
          className="cursor-pointer bg-primary-100/50 hover:bg-primary-100 duration-200 p-2 rounded-r-lg text-gray-100 font-semibold text-sm"
        >
          subir
        </button>
      </div>
        {previewURL && (
      <div className="relative h-48 w-48  mx-auto flex items-center p-5">
          <Image
            className="object-cover object-center rounded-lg "
            fill
            alt={fileName}
            src={previewURL}
          />
      </div>
        )}
    </>
  );
}
