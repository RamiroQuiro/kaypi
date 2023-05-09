import { create } from "zustand";

export const useStoraStyle=create((set)=>({
    color:{
        color1:"#323479",
        color2:"#5353DA",
    },
    fontFamily:"comicSans",
    sizeFont:"16px",
    imagen:"perfil"

}))