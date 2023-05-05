import TabsSeccion from "./Component/TabsSeccion";

export default function FormularioSecciones({children}) {
  return (
    <form className="py-10 flex flex-col item-centar justify-between">
      <TabsSeccion />
      <div>
     {children}
      </div>
    </form>
  );
}
