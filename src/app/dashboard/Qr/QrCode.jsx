"use client"
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import perfil from "../../../../public/perfil.png";
import { useEffect, useState } from "react";

export default function QrCode() {


    const [qrCode, setQrCode] = useState(null);
    useEffect(() => {
 
    }, []);
  
  return (
<QRCodeCanvas
  value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
  size={128}
  bgColor={"#ffffff"}
  fgColor={"#008a94"}
  level={"L"}
  includeMargin={false}
  imageSettings={{
    src: perfil,
    x: undefined,
    y: undefined,
    height: 24,
    width: 26,
    excavate: true,
  }}
/>
  )
}
