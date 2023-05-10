import { create } from "zustand";

export const useStoraStyle = create((set) => ({
  color: {
    color1: "#323479",
    porcentajeColor1:0,
    color2: "#5353DA",
    porcentajeColor2:100,
  },
  fontFamily: "comicSans",
  sizeFont: "16px",
  imagen: "perfil",
  //funciones de actualizacion
  guardarColores:(name,hex)=> set(state=>({
   color:{...state.color,[name]:hex}
  }))
  
}));
