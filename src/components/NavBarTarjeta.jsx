import {
  faBriefcase,
  faLocation,
  faMapLocationDot,
  faPhotoVideo,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import BotonesDeNavBarTarjeta from "./BotonesDeNavBarTarjeta";

export default function NavBarTarjeta() {
  const linkDeMenu = [
    {
      id: 1,
      link: ":userName",
      icon: faUserTag,
      className: "",
    },
    {
      id: 2,
      link: "/:userName/servicios",
      icon: faBriefcase,
      className: "",
    },
    {
      id: 3,
      link: "/:userName/ubicacion",
      icon: faMapLocationDot,
      className: "",
    },
    {
      id: 4,
      link: "/:userName/multimedia",
      icon: faPhotoVideo,
      className: "",
    },
  ];

  return (
    <div className="w-full bg-neutral-200 py-2 flex items-center justify-center m-auto absolute bottom-0 left-0 ">
      <ul className="w-full flex items-center z-10 text- justify-evenly text-gray-600 ">
        {linkDeMenu.map((link) => (
          <BotonesDeNavBarTarjeta
            key={link.id}
            link={link.link}
            icon={link.icon}
          />
        ))}
      </ul>
    </div>
  );
}
