import {
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firabase";
import { toast } from "react-hot-toast";

const traerDataUser = async (uid) => {
  const docRef = doc(db, `usuarios/${uid}`);
  const docData = await getDoc(docRef);

  return docData.data();
};

// enlaces
//cargar enlaces

const addEnlacesFirestore = async (uid, link) => {
  const docRef = doc(db, `usuarios/${uid}`);
  await updateDoc(docRef, {
    enlaces: arrayUnion(link),
  });
};
const removeEnlacesFirestore = async (uid, newArray) => {
  const docRef = doc(db, `usuarios/${uid}`);
  await updateDoc(docRef, {
    enlaces: newArray,
  });
};

// guardar datosPersonales

const guardarUserDataDatos = async (uid, obj) => {
  const docRef = doc(db, `usuarios/${uid}`);
  await updateDoc(docRef, {
    datos: obj,
  }).then(() => {
    toast.success("Guadado");
  });
};

const guardarSeccionesFirestore = async (uid,seccion, obj) => {
  const docRef = doc(db, `usuarios/${uid}`);
  const referencia=`secciones.${seccion}`
  await updateDoc(docRef, {
    [referencia]: obj,
  }).then(() => {
    toast.success("Guadado");
  });
};

const guardarStyles=async(uid,obj)=>{
  const docRef = doc(db, `usuarios/${uid}`);
  
  await updateDoc(docRef, {
    style: obj,
  }).then(() => {
    toast.success("Guadado");
  });
}


const llamarRutas=async ()=>{
  const docRef = doc(db, `rutas/cZwzUWzNeTGekoDUeit2`);
  const resp= await getDoc(docRef)
  return resp.data()
}

export {
  traerDataUser,
  addEnlacesFirestore,
  removeEnlacesFirestore,
  guardarUserDataDatos,
  guardarSeccionesFirestore,
  llamarRutas,
  guardarStyles
};
