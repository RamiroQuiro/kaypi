import ItemsPerfilContacto from "./ItemsPerfilContacto";

export default function ContactosComponente({contactos}) {
  return (
        <ul className=" flex  bg-gray-200 shadow-md rounded p-2 w-10/12  md:6/12  md:text md:font-semibold mx-auto flex-col items-center justify-between font-thin  text-left py-2">
          {contactos?.map((contact, i) => (
            <ItemsPerfilContacto contact={contact} key={i} />
          ))}
        </ul>
  )
}
