import { doc, setDoc } from "firebase/firestore";

const { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } = require("firebase/auth");
const { auth, db } = require("./firabase");

const registerEmail= async (nombreFantasia, name,email, pass)=>{
    await createUserWithEmailAndPassword(auth,email,pass)
    .then((userCredential)=>{
        setDoc(doc(db,`usuarios/${userCredential.user.uid}`),{
            datos:{
                nombreFantasia:nombreFantasia,
                nombreApellido:name,
                email:email,

            },
            style:{},
            enlaces:[],
            secciones:[]
        }) 
         .catch((error)=>{
            const errorCode=error.code
            const eroorMessenge=error.message
        })
    })
}

const loginEmail=async (email,pass)=>{
const userUID=await signInWithEmailAndPassword(auth,email,pass)
    .then((userCredential)=>{
        const user=userCredential.user
        return user
    })
    .catch((error)=>{
        const errorCode=error.code
        const eroorMessenge=error.message
    })
    return userUID
}

const logout=async()=>{
    await signOut(auth)
}
export {loginEmail,registerEmail,logout}