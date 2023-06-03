
import BotonColoresBackgroun from "./BotonColoresBackgroun";

export default function ContenedorOpcionesBackground({ heroTarget }) {
  const coloresBackground = [
    { Color1: "#E11E4880", Color2: "#f3f3f3" },
    { Color1: "#77B20B80", Color2: "#f3f3f3" },
    { Color1: "#C51A7880", Color2: "#f3f3f3" },
    { Color1: "#FC968980", Color2: "#f3f3f3" },
    { Color1: "#71A9E680", Color2: "#f3f3f3" },
    { Color1: "#FCA68A80", Color2: "#f3f3f3" },
    { Color1: "#83D8FB80", Color2: "#f3f3f3" },
    { Color1: "#F6A1FC80", Color2: "#f3f3f3" },
    { Color1: "#1C292880", Color2: "#f3f3f3" },
    { Color1: "#15111280", Color2: "#f3f3f3" },
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
