
import { arrayRemove, arrayUnion, doc,getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firabase";

const traerDataUser=async(uid)=>{
    const docRef=doc(db,`usuarios/${uid}`)
    const docData=await getDoc(docRef);
    
    return docData.data()
}


// enlaces
//cargar enlaces

const addEnlacesFirestore=async (uid,link)=>{
    const docRef=doc(db,`usuarios/${uid}`)
    await updateDoc(docRef, {
        enlaces: arrayUnion(link)
})}
const removeEnlacesFirestore=async (uid,link)=>{
    const docRef=doc(db,`usuarios/${uid}`)
    await updateDoc(docRef, {
        enlaces: arrayRemove(link)
})}


export {traerDataUser,addEnlacesFirestore,removeEnlacesFirestore}