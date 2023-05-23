"use client";
import { useContextDatosUser } from "@/context/datosUser/contextoDatosUser";
import { useRouter } from "next/navigation";

export default function PrivateRouter({ children }) {
  const router = useRouter();
  const activarUser = useContextDatosUser((state) => state.activarUser);
  const { userActivo } = useContextDatosUser((state) => ({
    userActivo: state.userActivo,
  }));
  if (userActivo) return children;

  if (!userActivo) {
    router.push("/login");
  }
  return (
    <div className=" w-full h-screen flex items-center justify-center m-auto">
      <h1 className="text-3xl font-bold animate-pulse">Loading...</h1>
    </div>
  );
}
