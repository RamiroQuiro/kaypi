
"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BotonDeLosEnlaces({onClick,faIcon}) {
  return (
    <button 
        onClick={onClick}
        className="rounded-full w-5 bg-gray-200 h-5 p-1 cursor-pointer flex items-center justify-center animate-[aparecer_.5s]">
          <FontAwesomeIcon
          className=" w-3 h-3 "
          icon={faIcon}
          />
        </button>
  )
}
