"use client";

import {
  faBars,
  faBarsStaggered,
  faDashboard,
  faIdCard,
  faQrcode,
  faSection,
  faSprayCan,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ButtonSidebar from "./componentes/ButtonSidebar";
import Link from "next/link";
import BotonLogOut from "./componentes/BotonLogOut";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
export default function Sidebar() {
  const [toggle, setToggle] = useState(false);

  const {datos}=useContextDatosUser(state=>state.userData)
  return (
    <div className="md:w-20 md:border-r border-primary-300/50 w-screen fixed top-0 left-0 md:h-screen duration-300 md:bg-sidebar md:from-primary-300 md:via-primary-200 md:to-primary-100 bg-gradient-to-r from-primary-100/80 via-primary-100/80 to-primary-200/80 backdrop-blur-sm  mx-auto md:items-center    shadow-lg md:shadow-none z-40">
      <div
        className={`bg-gradient-to-r from-primary-100 via-primary-200 to-primary-200 w-full md:hidden cursor-pointer py-3 flex items-center justify-end pr-10 text-sky-50 text-2xl  duration-300`}
        onClick={() => setToggle(!toggle)}
      >
        <FontAwesomeIcon
          width={"20"}
          height={"20"}
          className="duration-200 animate-aparecer"
          icon={!toggle ? faBars : faBarsStaggered}
        />
      </div>
      <div
        className={`${
          !toggle && "hidden md:flex"
        }  mx-auto flex flex-col py-2 text-gray-100 duration-300 items-center md:items-start h-full justify-center gap-6  relative z-30 `}
      >
        <Link
          target="_blank"
          href={`https://kaypi.vercel.app/${datos?.userName}`}
          className="flex flex-col items-center mx-auto text-center absolute top-10 w-full px-2 justify-center gap-2 cursor-pointer"
        >
          <span className="w-full mx-auto text-xs text-center font-thin">
           Ver tu tarjeta 
           <pre>↓</pre>
          </span>
          <FontAwesomeIcon icon={faIdCard} className=" text-3xl" />
        </Link>
        <ButtonSidebar
          link={"dashboard"}
          icon={faDashboard}
          setToggle={setToggle}
        >
          Dashboard
        </ButtonSidebar>
        <ButtonSidebar
          link={"dashboard/DatosPersonales"}
          icon={faUserPen}
          setToggle={setToggle}
        >
          Datos
        </ButtonSidebar>
        <ButtonSidebar
          link={"dashboard/Secciones"}
          icon={faSection}
          setToggle={setToggle}
        >
          Secciones
        </ButtonSidebar>
        <ButtonSidebar
          link={"dashboard/Disenio"}
          icon={faSprayCan}
          setToggle={setToggle}
        >
          Diseños
        </ButtonSidebar>
        <ButtonSidebar
          link={"dashboard/Qr"}
          icon={faQrcode}
          setToggle={setToggle}
        >
          QR
        </ButtonSidebar>
       <BotonLogOut/>
      </div>
    </div>
  );
}
