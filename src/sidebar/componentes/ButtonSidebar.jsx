"use client";
import Link from "next/link";
import React from "react";
import MoleculaLink from "./MoleculaLink";
import { usePathname } from "next/navigation";

export default function ButtonSidebar({
  setToggle,
  icon,
  classNameIcon,
  children,
  link,
}) {
  const pathname = usePathname();
  console.log( pathname==="/"+link);
  return (
    <Link
      onClick={() => setToggle(false)}
      href={link || "#"}
      className={
        pathname==="/"+link
          ? `bg-primary-400 group relative border-none md:ml-7 shadow-lg rounded p-2 z-30 md:w-32 w-10/12  text-gray-600 flex h-10 items-center justify-center before:content-[' '] before:absolute before:w-2/3 before:right-0 before:opacity-1 before:h-full before:bg-primary-400/80 before:-z-20 before:translate-y-2 before:block before:rounded before:bottom-0 before:-rotate-12 before:duration-500 `
          : `flex   border relative group md:hover:w-32 w-11/12 border-none z-30 ml-5 md:w-10 overflow-hidden cursor-pointer group md:items-center text-neutral-100 md:justify-between  p-2 gap-x-8 md:gap-1 md:p-2 mx-auto hover:bg-primary-400 duration-300 hover:text-gray-600 rounded h-10  before:content-[' '] before:absolute before:w-2/3 before:right-0 before:h-full before:bg-primary-400/80 before:-z-20 before:opacity-0 before:duration-300 before:rotate-0 `
      }
    >

        <MoleculaLink icon={icon} isActive={pathname==="/"+link} >
          {children}
        </MoleculaLink>
    </Link>
  );
}
