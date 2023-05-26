
import BotonesSelectoresDegradado from "./BotonesSelectoresDegradado";
import { useStoraStyle } from '@/context/DiseñoUser/contextStyles'
import SelectorDeg from "./SelectorDeg";

export default function SelectoresDegradadors({ heroTarget }) {
  const  guardarDegradado  = useStoraStyle((state) => state.guardarDegradado);
  const styles = {
    conic: `conic-gradient(${heroTarget.Color1} ${heroTarget.porcentajeColor1}%,${heroTarget.Color2} ${heroTarget.porcentajeColor1}%) `,
     radial: `radial-gradient(circle at bottom, ${heroTarget.Color1} ${heroTarget.porcentajeColor1}%,${heroTarget.Color2}  ${heroTarget.porcentajeColor2}%) `,
    linear: `linear-gradient(${heroTarget.deg}deg, ${heroTarget.Color1}  ${heroTarget.porcentajeColor1}%,${heroTarget.Color2}  ${heroTarget.porcentajeColor2}%) `,
  };

  const handleChangeComplete = (degrad) => {
    guardarDegradado(degrad);
  };
  return (
    <div className="flex flex-col w-full h-28 items-center juc bg-gray-200 p-2 rounded shadow">
      <h3 className="text-sm font-medium  mb-4">Tipo de degradado</h3>
      <div className="flex gap-2 items-center ">
        <BotonesSelectoresDegradado
          styles={styles.conic}
          onClick={()=>handleChangeComplete("conic")}
          key={1}
        />
        <BotonesSelectoresDegradado
          styles={styles.radial}
          onClick={()=>handleChangeComplete("radial")}
          key={2}
        />
        <BotonesSelectoresDegradado
          styles={styles.linear}
          onClick={()=>handleChangeComplete("linear")}
          key={3}
        />
      </div>
     {heroTarget?.degradado=="linear" && <SelectorDeg heroTarget={heroTarget}/>}
    </div>
  );
}
