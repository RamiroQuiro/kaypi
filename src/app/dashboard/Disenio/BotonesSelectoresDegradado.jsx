"use client"


export default function BotonesSelectoresDegradado({styles,onClick}) {
  return (
    <button
    onClick={onClick}
    style={{
        backgroundImage:styles}}
    className="bg-conic rounded-full w-8 h-8 shadow"></button>
  )
}
