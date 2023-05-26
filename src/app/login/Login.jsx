
import { Toaster } from "react-hot-toast";
import TarjetaLoginRegister from "./componentes/TarjetaLoginRegister";

export default function Login() {


  return (
    <div className="w-screen h-screen bg-primary-100/80 flex items-center justify-center overflow-hidden ">
      <Toaster/>
      {/* border y conbtenedor */}
      <div
        style={{
          background: "linear-gradient(40deg, #2cd4d950  10%,#323479  50%) ",
        }}
        className="absolute  backdrop-blur-sm mix-blend-multiply w-full h-full top- left-0"
      ></div>
      <section
        className="bg-white h-[480px] w-[400px]  relative flex items-center justify-center before:content-[' '] before:absolute before:top-0 before:left-0 before:w-6 before:h-full before:bg-gradient-to-t before:to-gray-50 before:from-gray-500 before:backdrop-blur-sm before:z-10
     after:content-[' '] after:absolute after:top-0 after:right-0 after:w-6 after:h-full after:bg-gradient-to-t after:to-gray-50 after:from-gray-500 after:backdrop-blur-sm after:z-10
     
     animate-aparecer"
      >
        {/* sombra */}
        <div
          className="absolute w-full h-full
      before:content-[' '] before:absolute before:top-0 before:left-[calc(100%+96px)] before:w-[120%] before:h-[240%] before:bg-gradient-to-b before:to-black/75 before:from-transparent before:skew-x-[45deg]
      after:content-[' '] after:absolute after:bottom-[-200%] after:left-[calc(100%+80px)] after:w-[100%] after:h-[200%] after:bg-gradient-to-t after:to-black/30 after:from-transparent after:skew-x-[45deg] animate-[aparecerCote_3s] duration-500
      "
        ></div>
        {/* fondo formulario */}
        <div className="w-full relative h-full bg-gradient-to-t to-gray-50 via-gray-300 from-gray-400 shadow-xxxl flex items-center justify-center">
        <TarjetaLoginRegister/>
        </div>
      </section>
    </div>
  );
}
