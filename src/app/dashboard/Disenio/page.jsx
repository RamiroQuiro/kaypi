import SectionTarjetaSola from "@/Tarjeta1/component/SectionTarjetaSola";
import SectionOutlet from "@/components/SectionOutlet";
import NavDiseños from "./NavDiseños";
import SidebarDiseño from "./SidebarDiseño";

export default function Disenio() {
  return (
    <SectionOutlet>
      <NavDiseños/>
    
      <SectionTarjetaSola/>
     <SidebarDiseño/>
    </SectionOutlet>
  );
}
