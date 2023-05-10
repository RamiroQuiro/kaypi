import Image from "next/image";
import perfil from "../../../public/perfil.png";
import HeroTarjeta from "./HeroTarjeta";

export default function ImagenPerfil() {
  return (
    <div className=" relative   w-full md:h-1/2 h-1/3 flex justify-center items-center p-0  ">
     <HeroTarjeta/>
      <div className="md:w-[200px] w-[175px] h-[175px] md:h-[200px] rounded-full overflow-hidden translate-y-20 border-4 border-gray-100/80">
        <Image
          src={perfil}
          alt="perfil"
          className="h-auto max-w-full object-cover rounded-3xl justify-center "
        />
      </div>
    </div>
  );
}
