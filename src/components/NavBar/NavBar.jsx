"use client"
import { faCar, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function NavBar({userData}) {
  const logOut = () => {
    navigate("/login");
  };

  return (
    <nav className=" sticky bg-gradient-to-l from-primary-200 via-primary-200 to-primary-100  text-sky-50 flex w-screen z-30 items-center md:justify-between justify-around md:px-16 mx-auto py-4">
      <Link
      
      target="_blank"
      href={`#`} 
      className="flex items-center justify-evenly gap-4 cursor-pointer">
        <FontAwesomeIcon icon={faIdCard} className=" text-3xl"/>
        <span className="  font-thin" >KAYPI DESIGN</span>
      </Link>
      <button onClick={logOut}>LogOut</button>
    </nav>
  );
}
