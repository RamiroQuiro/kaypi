import { create } from "zustand";

export const useStoraStyle = create((set) => ({
  heroTarget: {
    degradado:"linear",
    color1: "#323479",
    porcentajeColor1:0,
    color2: "#5353DA",
    porcentajeColor2:50,
  },
  
  fontFamily: "comicSans",
  sizeFont: "16px",
  imagen: "perfil",
  //funciones de actualizacion
  guardarColores:(name,hex)=> set(state=>({
    heroTarget:{...state.heroTarget,[name]:hex}
  })),
  guardarPorcentajes:(name,deg)=> set(state=>({
    heroTarget:{...state.heroTarget,[name]:deg}
  })),
  guardarDegradado:(degrad)=>set(state=>({
    heroTarget:{...state.heroTarget,degradado:degrad}
  }))
  
}));
