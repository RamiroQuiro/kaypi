"use client";
import LoaderCss from "@/components/LoaderCss";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

const PrivateRouter = ({ children }) => {
  const { userActivo } = useContextDatosUser((state) => ({
         userActivo: state.userActivo,
       }));
       const [userSta, setUserSta] = useState(null)
  const router = useRouter();

  useEffect(() => {
setUserSta(userActivo)
    if (!userSta) {
      router.push('/login');
    }
  }, [userActivo,userSta]);

  return userActivo ? children : (
       <LoaderCss/>
       );
};

export default PrivateRouter;