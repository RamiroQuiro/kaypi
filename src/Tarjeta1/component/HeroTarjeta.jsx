"use client";
import { useStoraStyle } from "@/context/DiseñoUser/contextStyles";
import useDrag from "@/hook/useDrag";
import { shallow } from "zustand/shallow";

export default function HeroTarjeta() {
  const { heroTarget } = useStoraStyle((state) => ({
    heroTarget: state.heroTarget,
  }),shallow);
  const activarSeccion=useStoraStyle(state=>state.activarSeccion)
  const styles = {
    conic: `conic-gradient(${heroTarget.Color1} ${heroTarget.porcentajeColor1}%,${heroTarget.Color2} ${heroTarget.porcentajeColor1}%) `,
    radial: `radial-gradient(${heroTarget.Color1} ${heroTarget.porcentajeColor1}%,${heroTarget.Color2}  ${heroTarget.porcentajeColor2}%) `,
    linear: `linear-gradient(${heroTarget.deg}deg, ${heroTarget.Color1}  ${heroTarget.porcentajeColor1}%,${heroTarget.Color2}  ${heroTarget.porcentajeColor2}%) `,
  };



  return (
    <div 
    id="heroTarget"
    className=" absolute top-0 left-0 w-full h-full">
   
      <svg
        className={` w-full drop-shadow-lg h-auto`}
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1080 720"
        width="1080"
        height="720"
      >
      <path id="Forma 1" class="s0" d="m-96 428.9c0 0 96 78 174 51 48-16.6 68-93.3 198-99 56.4-2.5 170.2 22.3 255 48.1 168.9 51.3 313.7 75.4 379.5 67.4 68.6-8.4 250.5-55.2 250.5-112.5 0-241.7-1.5-383.9-1.5-383.9h-1251l-10.5 419.9zm-1 0.1"/>
      </svg>
      <div
        style={{
          backgroundImage: styles[heroTarget.degradado],
        
        }}
        
        className="absolute top-0 mix-blend-screen   left-0 w-full h-full bg-gradient-to-t  from-primary-100 to-primary-500 "
      ></div>
    </div>
  );
}
