import SectionOutlet from "@/components/SectionOutlet";
import SidebarDiseño from "./SidebarDiseño";
import SectionTarjetaSola from "@/app/[userName]/Tarjeta1/component/SectionTarjetaSola";

export default function Disenio() {
  return (
    <SectionOutlet>
      <SectionTarjetaSola label="editor" />
      <SidebarDiseño />
    </SectionOutlet>
  );
}
