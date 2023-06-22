
import { Toaster } from "react-hot-toast";
import TarjetaLoginRegister from "./componentes/TarjetaLoginRegister";

export default function Login() {


  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-primary-100/80 to-primary-200 flex items-center justify-center overflow-hidden ">
      <Toaster/>
      {/* border y conbtenedor */}
    
      
        {/* sombra */}
        {/* fondo formulario */}
        <TarjetaLoginRegister/>
    </div>
  );
}
