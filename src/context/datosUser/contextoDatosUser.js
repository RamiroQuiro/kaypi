const { create } = require("zustand");

export const useContextDatosUser = create((set) => ({
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
      enlaces: [...state.enlaces, ...obj],
    })),
}));

