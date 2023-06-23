import { doc, setDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

const {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} = require("firebase/auth");
const { auth, db } = require("./firabase");

const registerEmail = async (userName, name, email, pass) => {

return  await createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      setDoc(doc(db, `usuarios/${userCredential.user.uid}`), {
        datos: {
          userName: userName,
          nombreApellido: name,
          email: email,
        },
        style: {
          heroTarget:{},
        },
        images:[],
        enlaces: [],
        secciones: {
          productoServicio: "",
          ubicacion: "",
          multimedia: [{}],
        },
      })
      const uid= userCredential.user.uid
      return uid
    })
    .then(async(uid) => {
         await updateDoc(doc(db, `rutas/cZwzUWzNeTGekoDUeit2`), {
        [uid]: userName,
      })
      toast.success("Usuario Creado Correctamente");
      return uid
    })
    .catch((error) => {
      const errorCode = error.code;
      const eroorMessenge = error.message;
    });

};

const loginEmail = async (email, pass) => {
  const userUID = signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      toast.success("Bienvenido Nuevamente");
      return user;
    })
    .catch((error) => {
      toast.error("Intentalo Nuevamente");
      const errorCode = error.code;
      console.log(errorCode);
      const eroorMessenge = error.message;
    });
  return userUID;
};

const logout = async () => {
  await signOut(auth);
};
export { loginEmail, registerEmail, logout };
