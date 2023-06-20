import BotonGuardar from "../componentes/BotonGuardar";
import TabsSeccion from "./Component/TabsSeccion";

export default function FormularioSecciones({ children }) {
  return (
    <div className="flex-auto md:px-4 lg:px-4  pt-0">
      <div className="py-10 flex flex-col item-center justify-between">
        <TabsSeccion />
        {children}
      </div>
    </div>
  );
}
