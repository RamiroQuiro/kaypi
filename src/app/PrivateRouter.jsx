"use client";
import LoaderCss from "@/components/LoaderCss";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import { useRouter } from "next/navigation";

// export default function PrivateRouter({ children }) {
//   const router = useRouter();
//   const { userActivo } = useContextDatosUser((state) => ({
//     userActivo: state.userActivo,
//   }));
//   if (userActivo) return children;

//   if (!userActivo) {
//     router.push("/login");
//   }
//   return (
//     <div className=" w-full h-screen flex items-center justify-center m-auto">
//       <h1 className="text-3xl font-bold animate-pulse">Loading...</h1>
//     </div>
//   );
// }

import { useEffect } from 'react';

const PrivateRouter = ({ children }) => {
  const { userActivo } = useContextDatosUser((state) => ({
         userActivo: state.userActivo,
       }));
  const router = useRouter();

  useEffect(() => {
    if (!userActivo) {
      router.push('/login');
    }
  }, [userActivo]);

  return userActivo ? children : (
       <LoaderCss/>
       );
};

export default PrivateRouter;