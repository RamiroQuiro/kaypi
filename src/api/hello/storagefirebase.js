import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firabase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid";;
import { toast } from "react-hot-toast";

const cargaImagenes = async (uid, file,fileName) => {
  const docRef = doc(db, `usuarios/${uid}`);
  const referencia = `imagenes/${uid}/${fileName}`;
  const fileRef = ref(storage, referencia);
  await uploadBytes(fileRef, file).then(async (uploadImg) => {
    await getDownloadURL(fileRef).then(async (url) => {
      await updateDoc(docRef, {
        images: arrayUnion({
          nombre: fileName,
          url: url,
          uid: uuidv4().slice(0, 8) 
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


export {cargaImagenes}