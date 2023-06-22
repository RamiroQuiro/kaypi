import FormularioLogin from './FormularioLogin'


export default function TarjetaLoginRegister() {

  return (
    <section
    className="bg-gray-700 h-[480px] w-[400px] rounded-lg shadow-shadowCaja1 shadow-primary-200 text-gray-100 relative flex items-center justify-center animate-aparecer"
  >
    {/* sombra */}
    
    {/* fondo formulario */}
    <div className="w-full rounded-lg relative h-full overflow-hidden bg-gradient-to-t to-gray-700 via-gray-700 from-gray-800  flex items-center justify-center">
      
        <FormularioLogin />
    
      
    </div>
  </section>
  )
}
