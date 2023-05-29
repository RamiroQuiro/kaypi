import NavBarTarjeta from "@/components/NavBarTarjeta";
import HomeTarjeta from "./HomeTarjeta";

export default function SectionTarjetaSola() {
  return (
    <section className="bg-white border  rounded-lg lg:w-[25vw] z-20  md:w-[35vw] w-full md:h-[100vh] shadow-shadowCaja1 relative h-[98vh]  flex flex-col items-center justify-between ">
       <div className="absolute top-0 lef-0 text-xs text-gray-600 capitalize z-50 font-semibold py-2 ">
        <span> RamiroCode | Web Developer </span>
      </div> 
       <HomeTarjeta /> 
      <NavBarTarjeta />
    </section>
  );
}
