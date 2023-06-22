"use client";
import {
  faIdCard,
  faKey,
  faQuestion,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import InputLogin from "./InputLogin";
import InputRegister from "./InputRegister";
import { loginEmail, registerEmail } from "@/api/hello/auth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import { traerDataUser } from "@/api/hello/firestore";

export default function FormularioLogin() {
  const activarUser = useContextDatosUser((state) => state.activarUser);
  const userDataContext = useContextDatosUser((state) => state.userDataContext);
  const router = useRouter();
  const [register, setRegister] = useState(false);
  const [formulario, setFormulario] = useState({});
  const toogleRegister = () => {
    setRegister(!register);
  };
  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginEmail(formulario.email, formulario.password)
      .then((user) => {
        if (!user) return;
        if (user) {
          activarUser(user);
          router.replace("/dashboard");
          return user.uid;
        }
      })
      .then(async (uid) => {
        return await traerDataUser(uid);
      })
      .then((resp) => {
        userDataContext(resp);
      });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    await registerEmail(
      formulario.userName,
      formulario.nombreApellido,
      formulario.email,
      formulario.password
    )
      .then(async(user) => {
        if (!user) return;
        if (user) {
          activarUser(user)
          const data =await traerDataUser(user)
          return data
        }
      })
    
      .then((resp) => {
        userDataContext(resp);
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form className="px-10 py-2  w-10/12 flex flex-col justify-between items-stretch text-gray-100  animate-[aparecer_.5s]  ">
        <div className="bg-gray-500 rounded-full w-20 h-20  flex items-center justify-center mx-auto">
          <FontAwesomeIcon
            icon={faIdCard}
            className="text-stone-50 w-10 h-10 flex items-center justify-center mx-auto"
          />
        </div>
        <h2 className="text-lg w-full text-center font-medium my-2">
          Bienvenidos a Kaipy!
        </h2>
        <div className=" h-full flex-grow flex flex-col gap-2">
          {!register ? (
            <InputLogin handleChange={handleChange} />
          ) : (
            <InputRegister handleChange={handleChange} />
          )}
        </div>
        <div className="flex w-full  justify-center items-center gap-4">
          <div className="w-1/2 flex justify-center items-center gap-1 cursor-pointer">
            <p className="font-semibold text-sm ">Resetear clave</p>{" "}
            <FontAwesomeIcon icon={faQuestion} className="text-gray-100 h-3" />
          </div>
          <span
            onClick={toogleRegister}
            className="w-1/2 flex  justify-center items-center gap-1 cursor-pointer"
          >
            <p className="font-semibold text-sm">
              {" "}
              {register ? "Ingresar" : "Registrarse"}
            </p>{" "}
            <FontAwesomeIcon icon={faUserPlus} className="text-gray-100 h-3" />
          </span>
        </div>
        <button
          onClick={!register ? handleSubmit : handleRegister}
          className="bg-gray-700 rounded-sm px-3 mt-5 py-1.5 text-gray-50 font-semibold"
        >
          {!register ? "Ingresar" : "Registrar"}
        </button>
      </form>
    </>
  );
}
