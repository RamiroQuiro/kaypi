
"use client"

import { useEffect, useState } from "react";

export default function HeroTarjeta({styles}) {
  const [estilos, setEstilos] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
useEffect(() => {
const cargarEstilo=()=>{
  setEstilos(styles)
  setIsLoading(true)
}  
cargarEstilo()
}, [styles,isLoading,estilos])
  const stylesGradientes = {
    conic: `conic-gradient(${estilos?.heroTarget?.Color1} ${estilos?.heroTarget?.porcentajeColor1}%,${estilos?.heroTarget?.Color2} ${estilos?.heroTarget?.porcentajeColor1}%) `,
    radial: `radial-gradient(circle at bottom, ${estilos?.heroTarget?.Color1} ${estilos?.heroTarget?.porcentajeColor1}%,${estilos?.heroTarget?.Color2}  ${estilos?.heroTarget?.porcentajeColor2}%) `,
    linear: `linear-gradient(${estilos?.heroTarget?.deg}deg, ${estilos?.heroTarget?.Color1}  ${estilos?.heroTarget?.porcentajeColor1}%,${estilos?.heroTarget?.Color2}  ${estilos?.heroTarget?.porcentajeColor2}%) `,
  };

  if(isLoading)return (
    <div id="heroTarget" className=" absolute top-0 left-0 w-full h-full   ">
       {/* <svg
        className={` w-full drop-shadow-lg h-auto absolute fill-black mix-blend-`}
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1080 720"
        width="1080"
        height="720"
      >
        <clipPath id="heroShape">
          <path
            d="m-96 428.9c0 0 96 78 174 51 48-16.6 68-93.3 198-99 56.4-2.5 170.2 22.3 255 48.1 168.9 51.3 313.7 75.4 379.5 67.4 68.6-8.4 250.5-55.2 250.5-112.5 0-241.7-1.5-383.9-1.5-383.9h-1251l-10.5 419.9zm-1 0.1"
          ></path>
        </clipPath>
      </svg>  */}
      <div
        style={{
          backgroundImage: stylesGradientes[estilos?.heroTarget?.degradado],
        }}
        className=" top-0  w-full  left-0  h-full bg-gradient-to-t  from-primary-100 to-primary-200 "
      ></div>
    </div>
  );
}
