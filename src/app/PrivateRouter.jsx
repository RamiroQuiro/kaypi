"use client";
import LoaderCss from "@/components/LoaderCss";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import { useRouter } from "next/navigation";



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