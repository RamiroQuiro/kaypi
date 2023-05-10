import NavBarTarjeta from "../../components/NavBarTarjeta";
import HomeTarjeta from "./HomeTarjeta";

export default function SectionTarjetaSola() {
  return (
    <section className="bg-white border capitalize rounded-lg lg:w-[30vw]  md:w-[40vw] w-full md:h-[90vh] shadow-shadowCaja1 relative h-full z-20 flex flex-col items-center justify-between ">
      
      <div className="absolute top-0 lef-0 text-xs text-gray-600 capitalize z-50 font-semibold py-2 ">
        <span> RamiroCode | Web Developer </span>
      </div>
      <HomeTarjeta/>
      <NavBarTarjeta/>

    </section>
  );
}
