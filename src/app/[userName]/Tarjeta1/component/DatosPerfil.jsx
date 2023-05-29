import celu from "../../../../../public/celuIcon.svg";
import mailIcon from ".../../../../../public/mailIcon.svg";
import ubicacionIcon from "../../../../../public/ubicaionIcon.svg";

import TituloDescripcion from "./TituloDescripcion";
import ContenedorLinks from "./ContenedorLinks";

export default function DatosPerfil({userData}) {
  const contactos = [
    { id: 1, type: "cel", descripcion: userData?.celular, icon: celu },
    {
      id: 2,
      type: "email",
      descripcion: userData?.email,
      icon: mailIcon,
    },
    {
      id: 3,
      type: "ubicacion",
      descripcion: userData?.direccion,
      icon: ubicacionIcon,
    },
  

  ];


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
    <div className="w-full mx-auto flex flex-col items-center justify-evenly   h-full ">
      <TituloDescripcion userData={userData} />
      <ContenedorLinks links={enlaces}/>
    </div>
  );
}
