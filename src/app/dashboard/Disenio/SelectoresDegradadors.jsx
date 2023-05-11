// import {  } from "../../../../public/conic.jpg";

import BotonesSelectoresDegradado from "./BotonesSelectoresDegradado";
import { useStoraStyle } from '@/context/DiseñoUser/contextStyles'

export default function SelectoresDegradadors({ heroTarget }) {
  const  guardarDegradado  = useStoraStyle((state) => state.guardarDegradado);
  const styles = {
    conic: `conic-gradient(${heroTarget.color1} 0%,${heroTarget.color2} 80%) `,
    radial: `radial-gradient(${heroTarget.color1} 0%,${heroTarget.color2} 80%) `,
    lineal: `linear-gradient(90deg, ${heroTarget.color1} 0%,${heroTarget.color2} 80%) `,
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
          styles={styles.lineal}
          onClick={()=>handleChangeComplete("linear")}
          key={3}
        />
      </div>
    </div>
  );
}
