import {
  faBriefcase,
  faLocation,
  faMapLocationDot,
  faPhotoVideo,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import BotonesDeNavBarTarjeta from "./BotonesDeNavBarTarjeta";

export default function NavBarTarjeta({ selectorBotones }) {
  const linkDeMenu = [
    {
      id: 1,
      name: "",
      icon: faUserTag,
      className: "",
      onClick:selectorBotones
    },
    {
      onClick:selectorBotones,
      id: 2,
      name: "servicios",
      icon: faBriefcase,
      className: "",
    },
    {
      onClick:selectorBotones,
      id: 3,
      name: "ubicacion",
      icon: faMapLocationDot,
      className: "",
    },
    {
      onClick:selectorBotones,
      id: 4,
      name: "multimedia",
      icon: faPhotoVideo,
      className: "",
    },
  ];

  return (
    <div className="w-full bg-neutral-200 py-2 flex items-center justify-center m-auto absolute bottom-0 left-0 ">
      <ul className="w-full flex items-center z-10 text- justify-evenly text-gray-600 ">
        {linkDeMenu.map((link) => (
          <BotonesDeNavBarTarjeta
            onClick={link.onClick}
            key={link.id}
            name={link.name}
            icon={link.icon}
          />
        ))}
      </ul>
    </div>
  );
}
