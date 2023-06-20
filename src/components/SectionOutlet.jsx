import { Toaster } from "react-hot-toast";
import NavBar from "./NavBar/NavBar";

export default function SectionOutlet({ children }) {
  return (
    <div className="w-full min-h-screen  bg-gray-50 md:py-12 py-6 ">
      <Toaster />
      <NavBar />
      <div className="md:w-full relative w-11/12 mx-auto text-gray-600 font-medium animate-[aparecer_1s] flex  flex-col justify-center md:gap-10 items-center md:pt-5 pt-24 md:pl-10">
        {children}
      </div>
    </div>
  );
}
