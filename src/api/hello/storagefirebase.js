import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firabase";
import { updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

const cargaImagenes = async (uid, file) => {
  const docRef = doc(db, `usuarios/${uid}`);
  const referencia = `imagenes/${uid}/${file.name}`;
  const fileRef = ref(storage, referencia);
  await uploadBytes(fileRef, file).then(async (uploadImg) => {
    await getDownloadURL(fileRef).then(async (url) => {
      await updateDoc(docRef, {
        images: arrayUnion({
          nombre: fileName,
          url: url,
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
