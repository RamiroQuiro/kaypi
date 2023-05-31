
import TituloDescripcion from "./TituloDescripcion";
import ContenedorLinks from "./ContenedorLinks";

export default function DatosPerfil() {



  const enlaces=[
    {id:1,
    name:"Facebook",
      link:"facebook.com/ramirochangomoreno"
  },
    {id:2,
    name:"Instagram",
      link:"instagram.com/ramirochangomoreno"
  },
    {id:3,
    name:"webSite",
      link:"ramiroquiroga.vercel.app"
  },
  ]
  return (
    <div className="w-full mx-auto flex flex-col flex-grow items-center justify-evenly  text-gray-700 h-full ">
      <TituloDescripcion  />
      <ContenedorLinks />
    </div>
  );
}
