import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firabase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid";;
import { toast } from "react-hot-toast";

const cargaImagenes = async (uid, file,fileName) => {
  const uuidv=uuidv4().slice(0, 8) 
  const docRef = doc(db, `usuarios/${uid}`);
  const referencia = `imagenes/${uid}/${uuidv}`;
  const fileRef = ref(storage, referencia);
  await uploadBytes(fileRef, file).then(async (uploadImg) => {
    await getDownloadURL(fileRef).then(async (url) => {
      await updateDoc(docRef, {
        images: arrayUnion({
          nombre: fileName,
          url: url,
          uid: uuidv,
        }),
      })
        .then(() => {
          toast.success("Imagen subida correctamente");
        })
        .catch((error) => {
          alert("Error al subir imagen, intente de nuevo");
          console.log(error);
        });
    });
  });
};

const removeImage=async(uid,fileName,newData)=>{
  const docRef = doc(db, `usuarios/${uid}`);
  const referencia = ref(storage,`imagenes/${uid}/${fileName}`)
  deleteObject(referencia).then(()=>{
    updateDoc(docRef,{
      images:newData})
    toast.success('Eliminado')
  }).catch((err)=>console.log(err))
}

export {cargaImagenes,removeImage}