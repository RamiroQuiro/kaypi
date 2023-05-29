"use client"
import BotonesSelectoresDegradado from "./BotonesSelectoresDegradado";
import { useStoraStyle } from '@/context/DiseñoUser/contextStyles'
import SelectorDeg from "./SelectorDeg";

export default function SelectoresDegradadors() {
  const { styles } = useStoraStyle((state) => ({
    styles: state.styles,
  }));
  const  guardarDegradado  = useStoraStyle((state) => state.guardarDegradado);
  
  const stylesDegradado = {
    conic: `conic-gradient(${styles?.heroTarget?.Color1} ${styles?.heroTarget?.porcentajeColor1}%,${styles?.heroTarget?.Color2} ${styles?.heroTarget?.porcentajeColor1}%) `,
     radial: `radial-gradient(circle at bottom, ${styles?.heroTarget?.Color1} ${styles?.heroTarget?.porcentajeColor1}%,${styles?.heroTarget?.Color2}  ${styles?.heroTarget?.porcentajeColor2}%) `,
    linear: `linear-gradient(${styles?.heroTarget?.deg}deg, ${styles?.heroTarget?.Color1}  ${styles?.heroTarget?.porcentajeColor1}%,${styles?.heroTarget?.Color2}  ${styles?.heroTarget?.porcentajeColor2}%) `,
  };

  const handleChangeComplete = (degrad) => {
    guardarDegradado(degrad);
  };
  return (
    <div className="flex flex-col w-full h-28 items-center juc bg-gray-200 p-2 rounded shadow">
      <h3 className="text-sm font-medium  mb-4">Tipo de degradado</h3>
      <div className="flex gap-2 items-center ">
        <BotonesSelectoresDegradado
          styles={stylesDegradado.conic}
          onClick={()=>handleChangeComplete("conic")}
          key={1}
        />
        <BotonesSelectoresDegradado
          styles={stylesDegradado.radial}
          onClick={()=>handleChangeComplete("radial")}
          key={2}
        />
        <BotonesSelectoresDegradado
          styles={stylesDegradado.linear}
          onClick={()=>handleChangeComplete("linear")}
          key={3}
        />
      </div>
     {styles?.heroTarget?.degradado=="linear" && <SelectorDeg heroTarget={styles}/>}
    </div>
  );
}
