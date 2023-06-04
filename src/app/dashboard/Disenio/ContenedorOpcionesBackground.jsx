
import BotonColoresBackgroun from "./BotonColoresBackgroun";

export default function ContenedorOpcionesBackground({ heroTarget }) {
  const coloresBackground = [
    { Color1: "#F0CECE", Color2: "#f3f3f3" },
    { Color1: "#C3DEF2", Color2: "#f3f3f3" },
    { Color1: "#D8F2DB", Color2: "#f3f3f3" },
    { Color1: "#DBF1EF", Color2: "#f3f3f3" },
    { Color1: "#F2F2F2", Color2: "#f3f3f3" },
    { Color1: "#DCCEC0", Color2: "#f3f3f3" },
    { Color1: "#3A3A3A", Color2: "#f3f3f3" },
    { Color1: "#202124", Color2: "#f3f3f3" },
    { Color1: "#3B578B", Color2: "#f3f3f3" },
    { Color1: "#595341", Color2: "#f3f3f3" },
  ];
  return (
    <div className="flex flex-col h-2/3 px-3 py-5 justify-evenly gap-5 items-center w-full ">
      {/*  */}
      <div className="relative  bg-gray-200 overflow-x-hidden w-full mx-auto p-4 rounded shadow">
        <h3 className="text-sm font-medium mb-4 mx-auto">colores</h3>
        <div className="flex flex-wrap gap-2 items-center mx-auto justify-evenly">
          {coloresBackground?.map((paleta, i) => (
            <BotonColoresBackgroun paleta={paleta} key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
}
