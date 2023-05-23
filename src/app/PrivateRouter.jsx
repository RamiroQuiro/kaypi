"use client";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import { auth } from "./api/hello/firabase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function PrivateRouter({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(undefined);
  const activarUser = useContextDatosUser((state) => state.activarUser);
  const { userActivo } = useContextDatosUser((state) => ({
    userActivo: state.userActivo,
  }));
console.log(userActivo)
if (userActivo) return children;
  
     if (!userActivo) {
       router.push("/login");
     }
return (
   <div className=" w-full h-screen flex items-center justify-center m-auto">
        <h1 className="text-3xl font-bold animate-pulse">Loading...</h1>
       </div>
   );
}
