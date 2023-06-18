const { ref } = require("firebase/storage");
const { db, storage } = require("./firabase");


const =()=>{
    
}

const fileRef = ref(
    storage,
      `imagenes/${user?.uid}/${file.name}`
    );
    await uploadBytes(fileRef, file).then(async (uploadTask) => {
      await getDownloadURL(fileRef).then(async (url) => {
        //  setFileURL(url);
        await updateDoc(docRef, {
          [businessName]: arrayUnion({
            nombre: fileName,
            url: url,
            posicion: filePosicion
          }),
        })
          .then(() => {
            toast.success("Imagen subida correctamente");
            setFile(null);
            setPreviewURL(null);
            setFileURL(null);
            setLoading(false);
          })
          .catch((error) => {
            alert("Error al subir imagen, intente de nuevo");
            console.log(error);
          });
      });
    });
  };
