
import { create } from "zustand";


const uuidRandoom = () => {
  return Math.floor(Math.random() * (1000 - 1 + 1) + 1);
};



export const useContextDatosUser = create((set) => ({ 
userActivo:false,
  enlaces: [
    { id: 1, name: "facebook", link: "facebook.com/ramirochangomoreno" },
  ],
  link: [
    {
      id: 1,
      name: "llamada",
      data: 3856771992,
    },
    { id: 2, name: "email", data: "ramiryexe@hotmail.com" },
    {
      id: 3,
      name: "whatsapp",
      data: 3856711922,
    },
  ],
  // funciones

  addEnlaces: (obj) =>
    set((state) => ({
      ...state,
      enlaces: [...state.enlaces, {...obj,id:uuidRandoom()}],
    })),
  removeEnlace: (id) =>
    set((state) => ({
      enlaces: state.enlaces.filter((link) => link.id !== id),
    })),
  activarUser: (id) =>
    set((state) => ({
      ...state,
    userActivo:id,
    })),
}));
