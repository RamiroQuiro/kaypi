"use client";

import LoaderCss from "@/components/LoaderCss";
import SectionOutlet from "@/components/SectionOutlet";
import { useContextVisitas } from "@/context/contextoVisita/contextoVistas";
import { useParams } from "next/navigation";

export default function RutaVerificada({ children, obj }) {
  const params = useParams();
  const users = Object.values(obj).map((user) => user.toLowerCase());
  const key = Object.keys(obj).find(key => obj[key].toLowerCase() === params.userName);

  const cargarUid=useContextVisitas(state=>state.cargarUid)

  cargarUid(key)
  
    if (users.find(element=>element===params.userName)) {
      return children;
    } else {
      return (
        <SectionOutlet>
          <span>no se encontro usuarios para esta tarjeta meeen</span>
          <p>has tu click aqui para crear tu tarjeta!</p>
        </SectionOutlet>
      );
    }
  }

