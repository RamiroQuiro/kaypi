import useDragger from '@/hook/useDragger'
import BotonInputColor from './BotonInputColor'

export default function ContenedorBotonesSelectoresColores({porcentajeColor,name,width}) {
   const coordenadas= useDragger(name)
  

  return (
    <div
    id={name}
    style={{
      left:porcentajeColor+"%"
    }}
    className="flex flex-col items-center absolute h-20 top-0 left-0 -ml-2">
    <BotonInputColor name={name} porcentaje={coordenadas/width} />
    <div class="mt-5 w-1 absolute top- h-20 bg-red-500 z-50 ">5</div>
    </div>
  )
}
