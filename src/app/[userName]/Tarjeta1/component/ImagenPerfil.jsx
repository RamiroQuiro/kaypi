
import Image from "next/image";
import perfil from "../../../../../public/perfil.png";
import HeroTarjeta from "./HeroTarjeta";

export default function ImagenPerfil() {
  return (
    <div className=" relative   w-full md:h-1/3 h-1/3 flex justify-center  items-center p-0  ">
     <HeroTarjeta/>
      <div
      id="imagenDrag"
      className="md:w-[175px] relative w-[175px] p-0.5 bg-transparent h-[175px] md:h-[175px] rounded-full overflow-hidden translate-y-10 border-4 border-gray-100/80">
        <Image
        fill
          src={perfil}
          alt="perfil"
          className="h-auto max-w-full object-cover  rounded-full justify-center "
        />
      </div>
    </div>
  );
}

