import SectionOutlet from "@/components/SectionOutlet";
import NavDiseños from "./NavDiseños";
import SidebarDiseño from "./SidebarDiseño";
import SectionTarjetaSola from "@/app/[userName]/Tarjeta1/component/SectionTarjetaSola";

export default function Disenio() {
  return (
    <SectionOutlet>
      <NavDiseños/>
    
      <SectionTarjetaSola/>
     <SidebarDiseño/>
    </SectionOutlet>
  );
}
