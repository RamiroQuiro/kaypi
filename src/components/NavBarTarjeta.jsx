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
    <div className="w-full bg-neutral-100 py-2 absolute bottom-0 left-0">
      <ul className="w-full flex items-center py-2 text-xl justify-evenly text-gray-600">
        {linkDeMenu.map((link) => (
          <li 
          className="hover:text-sky-900 hover:-translate-y-1 duration-200"
          key={link.id}
          >
            <Link href={link.link}>
              <FontAwesomeIcon icon={link.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
