"use client"

export default function PaletasColores(
    {paleta}
) {


  return (
    <button
    style={{
        background:`linear-gradient(75deg, ${paleta.Color1} 0%, ${paleta.Color2} 90%)`
    }}
    className={`rounded w-8 h-8 bg-gradient-to-tr from-[${paleta.Color1}] to-[${paleta.Color2}]`}
    ></button>
  )
}
