import {
  addEnlacesFirestore,
  guardarSeccionesFirestore,
  guardarUserDataDatos,
  removeEnlacesFirestore,
  traerImagenes,
} from "@/api/hello/firestore";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { cargaImagenes, removeImage } from "@/api/hello/storagefirebase";

export const useContextDatosUser = create((set, get) => ({
  userActivo: false,
  userData: false,
  enlaces: [],
  images: [],
  secciones: {
    productoServicio: "",
    ubicacion: "",
    multimedia: [{}],
  },
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

  addEnlaces: async (obj) => {
    const objNew = { ...obj, id: uuidv4().slice(0, 8) };
    const { userActivo } = get();
    set((state) => ({
      ...state,
      enlaces: [...state.enlaces, objNew],
    }));
    await addEnlacesFirestore(userActivo.uid, objNew);
  },
  removeEnlace: (id) => {
    const { userActivo, enlaces } = get();
    let newArray = enlaces.filter((enlace) => enlace.id != id);

    set((state) => ({
      ...state,
      enlaces: newArray,
    }));

    removeEnlacesFirestore(userActivo.uid, newArray);
  },
  activarUser: (id) => {
    set((state) => ({
      ...state,
      userActivo: id,
    }));
  },
  actualizarEnlaces: () => {
    const { userData } = get();
    set((state) => ({
      ...state,
      enlaces: userData?.enlaces,
    }));
  },
  userDataContext: (data) => {
    const { actualizarEnlaces } = get();
    set((state) => ({
      ...state,
      userData: data,
    }));
    actualizarEnlaces();
  },
  guardarDatosContacto: (obj) => {
    set((state) => ({
      userData: { ...state.userData, datos: obj },
    }));
    const { userData, userActivo } = get();
    guardarUserDataDatos(userActivo.uid, userData.datos);
  },
  guardarSecciones: (seccion, value) => {
    const { userActivo } = get();
    set((state) => ({
      ...state,
      secciones: { ...state.secciones, [seccion]: value },
    }));
    guardarSeccionesFirestore(userActivo.uid, seccion, value);
  },
  guardarImages: async (file, fileName) => {
    const { userActivo } = get();
    let arrayImages = [];
    await cargaImagenes(userActivo.uid, file, fileName).then(async () => {
      arrayImages = await traerImagenes(userActivo.uid);
    });
    set((state) => ({
      ...state,
      userData: {
        ...state.userData,
        images: [...arrayImages],
      },
    }));
  },
  eliminarImages: (uidv) => {
    const { userActivo, userData } = get();
    let newArray = (userData?.images).filter((img) => img.uid != uidv);
    removeImage(userActivo?.uid, uidv, newArray).then(async () => {
      await traerImagenes(userActivo.uid).then((arrayImages) => {
        set((state) => ({
          ...state,
          userData: {
            ...state.userData,
            images: arrayImages,
          },
        }));
      });
    });
  },
}));
