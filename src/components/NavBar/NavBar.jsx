"use client"
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import React from "react";

export default function NavBar() {
const{userData}=useContextDatosUser(state=>({userActivo:state.userActivo}))
console.log(userData)
  return (
    <nav className=" absolute top-0 left-0   text-gray-700 flex w-screen z-30 items-center md:justify-center justify-around md:px-16 mx-auto py-4">
      <div>
        {/* <p className="text-sm font-medium">{userData.displayName || userData.email}</p> */}
      </div>
    </nav>
  );
}
