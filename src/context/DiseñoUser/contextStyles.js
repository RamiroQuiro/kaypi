import { create } from "zustand";

export const useStoraStyle = create((set) => ({
  heroTarget: {
    degradado:"linear",
    Color1: "#323479",
    porcentajeColor1:10,
    Color2: "#5353DA",
    porcentajeColor2:80,
    deg:90
  },
  fontFamily: "comicSans",
  sizeFont: "16px",
  imagen: "perfil",
  //funciones de actualizacion
  guardarColores:(name,hex)=> set(state=>({
    heroTarget:{...state.heroTarget,[name]:hex}
  })),
  guardarPaleta:({Color1,Color2})=> set(state=>({
    heroTarget:{...state.heroTarget,Color1,Color2}
  })),
  guardarPorcentajes:(name,deg)=> set(state=>({
    heroTarget:{...state.heroTarget,[name]:deg}
  })),
  guardarDegradado:(degrad)=>set(state=>({
    heroTarget:{...state.heroTarget,degradado:degrad}
  })),
  guardarDeg:(deg)=>set(state=>({
    heroTarget:{...state.heroTarget,deg:deg}
  })),
  
  
}));
