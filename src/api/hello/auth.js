import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

const {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} = require("firebase/auth");
const { auth, db } = require("./firabase");

const registerEmail = async (userName, name, email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      setDoc(doc(db, `usuarios/${userCredential.user.uid}`), {
        datos: {
          userName: userName,
          nombreApellido: name,
          email: email,
        },
        style: {
          heroTarget,
        },
        enlaces: [],
        secciones: {
          productoServicio: "",
          ubicacion: "",
          multimedia: [{}],
        },
      });
      setDoc(doc(db, `rutas/cZwzUWzNeTGekoDUeit2`), {
        [userCredential.user.uid]: userName,
      });
    })

    .then(() => {
      toast.success("Usuario Creado Correctamente");
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
