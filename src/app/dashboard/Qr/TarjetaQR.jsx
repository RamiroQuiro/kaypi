import SectionOutlet from "@/components/SectionOutlet";
import QrCode from "./QrCode";

export default function TarjetaQR() {
  return (
    <SectionOutlet>
      <div className="flex flex-col items-center justify-evenly">
        <div>
          <ul className="w-full flex item-center justify-between px-2 gap-3 text-xs  my-5">
            <li className="bg-white border p-5 rounded-3xl cursor-pointer">
              sin logo
            </li>
            <li className="bg-white border p-5 rounded-3xl cursor-pointer">
              nombre y apellido
            </li>
            <li className="bg-white border p-5 rounded-3xl cursor-pointer">
              sin cel ni mail
            </li>
          </ul>
        </div>
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
            <div className="flex items-center m-auto justify-center  h-full flex-grow">
            <QrCode />
            </div>
          </div>
        </div>
      </div>
    </SectionOutlet>
  );
}
