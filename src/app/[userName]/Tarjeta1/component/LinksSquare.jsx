"use client";

import { useContextVisitas } from "@/context/contextoVisita/contextoVistas";
import BotonesCuadrados from "./BotonesCuadrados";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";

export default function LinksSquare() {
  const pathURL=usePathname()
  let regex = /dashboard/;
  const [loader, setLoader] = useState(false);
  const [datosCargados, setDatosCargados] = useState([]);
  const { userData } = useContextVisitas((state) => ({
    userData: state.userData,
  }));
   
 const userDatosUser=useContextDatosUser((state)=>(state.userData.datos))
  


  const infoBotones = [
    {
      name: "celular",
      link: "tel:",
      id: 1,
      svg: (
        <path d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z" />
      ),
    },
    {
      name: "email",
      link: "mailto:",
      id: 2,
      svg: (
        <g id="SVGRepo_iconCarrier">
          <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path>
        </g>
      ),
    },
    {
      name: "whatsapp",
      link: "https://api.whatsapp.com/send/?phone=",
      id: 3,
      svg: (
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-300.000000, -7599.000000)"
          fill="current"
        >
          {" "}
          <g id="icons" transform="translate(56.000000, 160.000000)">
            {" "}
            <path
              d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439"
              id="whatsapp-[#128]"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>
      ),
    },
  ];

  const cargarData = (obj) => {
    setLoader(true);

    
    const newArray = [];
    Object.keys(obj).forEach((propiedad) => {
      const newObj = infoBotones.find((element) => element.name == propiedad);
      if (newObj) {
        newObj.link = newObj.link + obj[propiedad];
        newArray.push(newObj);
      } else null;
    });
    setDatosCargados(newArray);
    setLoader(false);
  };
  useEffect(() => {
    if (!userData.datos) return;

    regex.test(pathURL) ? cargarData(userDatosUser) :  cargarData(userData?.datos)

    return () => {};
  }, [userData]);

  return (
    <div className="gap-5 w-8/12  h-1/3 mx-auto flex items-start py-2 justify-evenly ">
      {datosCargados
        ?.sort((a, b) => a.id - b.id)
        .map((boton) => (
          <BotonesCuadrados link={boton.link} path={boton.svg} key={boton.id} />
        ))}
    </div>
  );
}
