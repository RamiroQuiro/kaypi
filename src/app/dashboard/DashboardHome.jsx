import SectionOutlet from "@/components/SectionOutlet";
import InfoDasboard from "./componentes/InfoDasboard";

export default function DashboardHome() {
  return (
   <SectionOutlet>
        <InfoDasboard />

        <div className="w-[450px]">
        </div>
    </SectionOutlet>
    );
}
