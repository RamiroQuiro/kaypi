import { traerDataUser } from "@/api/hello/firestore";
import { create } from "zustand";

export const useContextVisitas = create((set, get) => ({
  userData: "",
  cargarUid: async(uid) => {
    const data= await traerDataUser(uid)
    set((state) => ({
      ...state,
      userData: data,
    }));
  },
}));
