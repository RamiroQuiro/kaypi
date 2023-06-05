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
      name: "home",
      link:"",
      icon:<>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
   </>,
      className: "",
      onClick:selectorBotones
    },
    {
      onClick:selectorBotones,
      id: 2, link:"servicios",
      name: "servicios",
      icon: <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
      <path d="M9 17h6"></path></>,
      className: "",
    },
    {
      onClick:selectorBotones,
      id: 3,
      link:"ubicacion",
      name: "ubicacion",
      icon: <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path></>
,
      className: "",
    },
    {
      onClick:selectorBotones,
      id: 4,
      name: "multimedia",
      link: "multimedia",
      icon:<>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M15 8h.01"></path>
      <path d="M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7"></path>
      <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>
      <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l.5 .5"></path>
      <path d="M15 19l2 2l4 -4"></path></>
   ,
      className: "",
    },
  ];

  return (
    <div className="w-full bg-neutral-200 py-1 flex items-center justify-center m-auto absolute bottom-0 left-0 ">
      <div className="w-full flex items-center  text- justify-evenly text-gray-600 ">
        {linkDeMenu.map((link) => (
          <BotonesDeNavBarTarjeta
          link={link.link}
            onClick={link.onClick}
            key={link.id}
            name={link.name}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  );
}
