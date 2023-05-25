"use client"
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import React from "react";
import LoaderCss from "../LoaderCss";

export default function NavBar() {
const{userData}=useContextDatosUser(state=>({userData:state.userData}))


!userData?
<LoaderCss/>
:
 (
    <nav className=" absolute top-0 left-0   text-gray-700 flex w-screen z-30 items-center md:justify-center justify-around md:px-16 mx-auto py-4">
      <div>
        <p className="text-sm font-medium">{userData?.datos?.nombreApellido || userData?.datos?.email}</p>
      </div>
    </nav>
  );
}
