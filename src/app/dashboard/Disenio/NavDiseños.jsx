"use client";
import { useState } from "react";
import SelecionColores from "./SelecionColores";

export default function NavDiseños() {
  const [font, setFont] = useState("sans-serif");
  const [size, setSize] = useState("text-base");

  return (
        <nav className="absolute left-0 top-0 w-full bg-white p-4  shadow-md">
      <div className="flex px-10 justify-center gap-10 items-center">
        <SelecionColores/>

        <div className="flex items-center space-x-4">
          <label htmlFor="font-select" className="font-bold">
            Font:
          </label>
          <select
            id="font-select"
            onChange={(e) => setFont(e.target.value)}
            className="border rounded p-1"
          >
            <option value="sans-serif">Sans-serif</option>
            <option value="serif">Serif</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="size-select" className="font-bold">
            Size:
          </label>
          <select
            id="size-select"
            onChange={(e) => setSize(e.target.value)}
            className="border rounded p-1"
          >
            <option value="text-base">Base</option>
            <option value="text-lg">Large</option>
            <option value="text-xl">Extra Large</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
