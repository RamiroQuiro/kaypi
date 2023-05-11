"use client"
export default function BotonesSelectoresDegradado({styles,onClick}) {

  return (
    <button
    onClick={onClick}
    style={{
        backgroundImage:styles}}
    className="bg-conic rounded-full w-10 h-10 shadow"></button>
  )
}
