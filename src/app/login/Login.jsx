
import { Toaster } from "react-hot-toast";
import TarjetaLoginRegister from "./componentes/TarjetaLoginRegister";

export default function Login() {


  return (
    <div className="w-screen relative h-screen bg-gray-200 flex items-center justify-center overflow-hidden ">
      <Toaster/>
      {/* border y conbtenedor */}
    
      
        {/* sombra */}
        {/* fondo formulario */}
        <TarjetaLoginRegister/>
       <div className="absolute top-0 left-0 w-full bg-gradient-to-tr from-primary-300/60 via-primary-200/80 to-primary-100/50 z-10 backdrop-blur-sm h-full"></div>
    </div>
  );
}
