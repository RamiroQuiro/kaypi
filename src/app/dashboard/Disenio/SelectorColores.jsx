import BotonInputColor from "./BotonInputColor";
import ContenedorBotonesSelectoresColores from "./ContenedorBotonesSelectoresColores";
import useWidth from "@/hook/useWidth";

export default function SelectorColores({ heroTarget }) {
  const styles = {
    conic: `conic-gradient(${heroTarget.Color1} ${heroTarget.porcentajeColor1}%,${heroTarget.Color2} ${heroTarget.porcentajeColor1}%) `,
    radial: `radial-gradient(${heroTarget.Color1} ${heroTarget.porcentajeColor1}%,${heroTarget.Color2}  ${heroTarget.porcentajeColor2}%) `,
    linear: `linear-gradient(${heroTarget.deg}deg, ${heroTarget.Color1}  ${heroTarget.porcentajeColor1}%,${heroTarget.Color2}  ${heroTarget.porcentajeColor2}%) `,
  };

const width=useWidth("contenedorSelector")


  return (
    <div className="relative h-full  bg-gray-100 overflow-x-hidden w-1/3 p-4 rounded shadow">
        <div 
        id="contenedorSelector"
        className="relative w-full overflow- h-10">
           <BotonInputColor
          width={width}
          name={"Color1"}
          key={1}
          />
            <BotonInputColor
          width={width}
            name={"Color2"}
            key={2}
          />
        </div>
        <div
          style={{
            backgroundImage: styles[heroTarget.degradado],
          }}
          className="h-10 w-full z-10 rounded-lg bg-gradient-to-r from-primary-100 to-primary-200"
        ></div>
    </div>
  );
}
