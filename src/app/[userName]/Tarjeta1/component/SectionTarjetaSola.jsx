import NavBarTarjeta from "@/components/NavBarTarjeta";
import HomeTarjeta from "./HomeTarjeta";

export default function SectionTarjetaSola({}) {



  return (
   
    <section className="bg-white border   rounded-lg overflow-hidden lg:w-[25vw] z-20  md:w-[35vw] w-full md:h-[95vh]  shadow-shadowCaja1 relative h-[98vh]  flex flex-col items-center justify-between ">
        <span className="absolute top-3 z-30 text-gray-200 text-sm text-thin"> RamiroCode | Web Developer </span>
       <HomeTarjeta /> 
      <NavBarTarjeta />
    </section>
   
  );
}


