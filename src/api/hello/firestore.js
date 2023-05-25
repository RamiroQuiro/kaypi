const { setDoc, collection, doc, getDoc } = require("firebase/firestore");
const { db, auth } = require("./firabase");


const traerDataUser=async(uid)=>{
    const docRef=doc(db,`usuarios/${uid}`)
    const docData=await getDoc(docRef);

    return docData.data()
}


export {traerDataUser}