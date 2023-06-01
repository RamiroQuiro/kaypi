import SectionOutlet from "@/components/SectionOutlet";
import React from "react";

export default function TarjetaQR() {
  return (
    <SectionOutlet>
      <div className="flex flex-col">
        <div> elige un modelo de tarjeta</div>
        <div>
          <div className=" rounded-xl border bg-white w-[400px] h-[200px] flex items-centar p-2 justify-between">
            <div className="flex flex-col w-2/3 items-start justify-start gap-2">
              <h2 className="font-bold">Ramiro Quiroga</h2>
              <h3 className="font-thin text-sm">DeveloperWeb</h3>
              <div className="font-thin text-sm">
                <p>ramiryexe@hotmail.com</p>
                <p>3856771992</p>
              </div>
            </div>
            <div
            className="flex flex-col 1/3"
            >

                codigo QR
            </div>
          </div>
        </div>
      </div>
    </SectionOutlet>
  );
}
