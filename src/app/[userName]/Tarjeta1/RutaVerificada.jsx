"use client"

import LoaderCss from "@/components/LoaderCss"
import SectionOutlet from "@/components/SectionOutlet"
import { useParams } from "next/navigation"

export default function RutaVerificada({children,array}) {

const params=useParams()

if(!array) return <LoaderCss/>
else{
    const users=array.value
    if (users.includes((params.userName))) {
    return children
    
}else{
    
    return (
        <SectionOutlet>
            <span>no se encontro usuarios para esta tarjeta meeen</span>
            <p>has tu click aqui para crear tu tarjeta!</p>
            
        </SectionOutlet>
    )
}
}


  
}
