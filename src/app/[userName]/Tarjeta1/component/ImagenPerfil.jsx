import Image from "next/image";
import HeroTarjeta from "./HeroTarjeta";


export default function ImagenPerfil({ styles,imgPerfil }) {

  return (
    <div className=" relative  w-full md:h-1/3 h-1/3 flex justify-center  items-center p-0  ">
      <HeroTarjeta styles={styles} />
      <div
        id="imagenDrag"
        className="md:w-[175px] w-[175px] p-0.5 bg-transparent h-[175px] md:h-[175px] rounded-full overflow-hidden translate-y-10 border-4 border-gray-100/80 relative"
      >
        <Image
          fill
          quality={50}
          sizes="320"
          src={imgPerfil?.url}
          alt="perfil"
          className="h-auto max-w-full object-cover p-1  object-center rounded-full justify-center "
        />
      </div>
    </div>
  );
}
