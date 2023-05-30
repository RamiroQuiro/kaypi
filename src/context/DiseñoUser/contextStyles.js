import { create } from "zustand";
import { useContextDatosUser } from "../datosUser/contextoDatosUser";
import { guardarStyles } from "@/api/hello/firestore";



export const useStoraStyle = create((set,get) => ({
  uidUser:"",
 styles: {
  heroTarget: {
    degradado:"linear",
    Color1: "#323479",
    porcentajeColor1:10,
    Color2: "#5353DA",
    porcentajeColor2:80,
    deg:90
  },},
  fontFamily: "comicSans",
  sizeFont: "16px",
  //funciones de actualizacion
  guardarColores:(name,hex)=> set(state=>({
    ...state,
    styles:{
      heroTarget:{...state.styles.heroTarget,[name]:hex}
    }
  })),
  guardarPaleta:({Color1,Color2})=> set(state=>({
    ...state,
    styles:{
    heroTarget:{...state.styles.heroTarget,Color1,Color2}}
  })),
  guardarPorcentajes:(name,deg)=> set(state=>({
    ...state,
    styles:{
    heroTarget:{...state.styles.heroTarget,[name]:deg}}
  })),
  guardarDegradado:(degrad)=>set(state=>({
    ...state,
    styles:{
    heroTarget:{...state.styles.heroTarget,degradado:degrad}}
  })),
  guardarDeg:(deg)=>set(state=>({ ...state,
    styles:{
    heroTarget:{...state.styles.heroTarget,deg:deg}}
  })),
  activarSeccion:(id)=>set(state=>({
   activo:id
  })),

  guardarFirestore:async(uid)=>{
    const {styles}=get()
  await guardarStyles(uid,styles)
  }
}));
