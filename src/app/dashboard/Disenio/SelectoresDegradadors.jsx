
import BotonesSelectoresDegradado from "./BotonesSelectoresDegradado";
import { useStoraStyle } from '@/context/DiseñoUser/contextStyles'

export default function SelectoresDegradadors({ heroTarget }) {
  const  guardarDegradado  = useStoraStyle((state) => state.guardarDegradado);
  const styles = {
    conic: `conic-gradient(${heroTarget.Color1} ${heroTarget.porcentajeColor1}%,${heroTarget.Color2} ${heroTarget.porcentajeColor1}%) `,
    radial: `radial-gradient(${heroTarget.Color1} ${heroTarget.porcentajeColor1}%,${heroTarget.Color2}  ${heroTarget.porcentajeColor2}%) `,
    linear: `linear-gradient(90deg, ${heroTarget.Color1}  ${heroTarget.porcentajeColor1}%,${heroTarget.Color2}  ${heroTarget.porcentajeColor2}%) `,
  };

  const handleChangeComplete = (degrad) => {
    guardarDegradado(degrad);
  };
  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded shadow">
      <h3 className="text-sm font-medium mb-4">Tipo de degradado</h3>
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
    </div>
  );
}