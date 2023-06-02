"use client";

import SectionOutlet from "@/components/SectionOutlet";
import { useContextVisitas } from "@/context/contextoVisita/contextoVistas";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function RutaVerificada({ children, obj }) {
  const params = useParams();
  const router=useRouter()
  const [loading, setLoading] = useState(false)
  const cargarUid=useContextVisitas(state=>state.cargarUid)


    const users = Object.values(obj).map((user) => user.toLowerCase());
    const key = Object.keys(obj).find(key => obj[key].toLowerCase() === params.userName);
    
    
    cargarUid(key)
  
    if (users.find(element=>element===params.userName)) {
      return children;
    } else {
      return (
        <SectionOutlet>
          <span>no se encontro usuarios para esta tarjeta meeen</span>
          <p>has tu click aqui para crear tu tarjeta!</p>
          <button onClick={()=>router.push('/login')} className="text-primary-100 font-medium p-1.5">Crear tu Tarjeta Kaypi!</button>
        </SectionOutlet>
      );
    }
  }

