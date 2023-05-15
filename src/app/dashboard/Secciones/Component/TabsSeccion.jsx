import React from "react";
import BotonesTabsSecciones from "./BotonesTabsSecciones";

export default function TabsSeccion() {
  const botones = [
    {
      id: 1,
      link: "dashboard/Secciones/ProductoServicio",
      children: "Productos o Servicios",
      path: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      ),
    },
    {
      id: 2,
      link: "dashboard/Secciones/Ubicacion",
      children: "Ubicación",
      path: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      ),
    },
    {
      id: 3,
      link: "dashboard/Secciones/Multimedia",
      children: "Galeria Multimedia",
      path: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      ),
    },
  ];

  return (
    <div className="w-full px-5">
      <ul className="flex border-b border-gray-100">
        {botones.map((boton) => (
          <BotonesTabsSecciones
            path={boton.path}
            key={boton.id}
            link={boton.link}
          >
            {boton.children}
          </BotonesTabsSecciones>
        ))}
      </ul>
    </div>
  );
}
