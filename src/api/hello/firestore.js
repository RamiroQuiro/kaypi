const { setDoc, collection, doc, getDoc } = require("firebase/firestore");
const { db, auth } = require("./firabase");


const traerDataUser=async(uid)=>{
const resp=await getDoc(doc(db,`usuarios/${uid}`))
return resp.data()
}


export {traerDataUser}