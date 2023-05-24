
"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputFormularioDatos({
  value,
  children,
  type,
  name,
  onChange,
  faIcon,
  id
}) {
  return (
   
    <div className={`flex flex-col  items-start justify-between w-full relative py-2  animate-[aparecer_${id/2}s]`}>
       <input 
       onChange={onChange}
       type={type} name={name} id={name}   value={value} required={true}   className="peer w-full py-1 pl-8 bg-transparent shadow-none border-0 border-b-2 text-gray-700 border-gray-500 outline-none focus:outline-none relative z-10 valid:bg-transparent" />
       <FontAwesomeIcon icon={faIcon} className="text-gray-700 absolute left-0 bottom-3 h-2/6" /> 
       <label htmlFor="email" className=" peer-focus:bg-primary-100 peer-focus:text-gray-50 text-sm peer-focus:p-1 peer-focus:rounded-sm peer-focus:-translate-y-8 peer-valid:bg-primary-100 peer-valid:text-gray-50  peer-valid:p-1 peer-valid:rounded-sm peer-valid:text-xs peer-focus:text-xs peer-valid:-translate-y-8 duration-500 text-gray-700 absolute left-0 bottom-3 pl-8 ">{children}</label>
     </div>
  );
}
