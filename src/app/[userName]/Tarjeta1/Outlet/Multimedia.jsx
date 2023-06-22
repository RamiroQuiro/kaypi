import ContenedorImg from "./galeria/ContenedorImg";

export default function Multimedia({ userDatos }) {
  return (
    <section className="bg-gray-50 text-gray-700 flex flex-col items-center justify-between h-full  w-full  relative">
      <div className=" pattern-diagonal-lines  pattern-primary-200 pattern-bg-transparent pattern-opacity-5 pattern-size-1 absolute top-0 left-0 w-full h-full"></div>
      <header
        style={{
          background: `linear-gradient(to bottom,transparent,#F3F4F6) ${userDatos?.style?.heroTarget?.Color1}`,
        }}
        className="bg-white h-1/5 p-2 w-full relative clip-path-mypolygono  shadow-primary-100   flex flex-col  items-end justify-center text-2xl font-semibold capitalize"
      >
        <h1 className="text-gray-700 mr-5 ">{userDatos?.datos?.nombreApellido}</h1>
      </header>
      <div className="flex flex-col items-center justify-evenly w-full h-5/6 gap-y-5 py-10 px-3">
        <ContenedorImg/>
      </div>
    </section>
  );
}
