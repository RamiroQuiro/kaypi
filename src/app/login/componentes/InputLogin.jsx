import InputFormularioDatos from "@/app/dashboard/DatosPersonales/InputFormularioDatos";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export default function InputLogin({ handleChange }) {
  const inputLogin = [
    {
      id: 1,
      name: "email",
      type: "email",
      onChange: handleChange,
      faIcon: faUser,
      children: "userMail@email.com",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      onChange: handleChange,
      faIcon: faLock,
      children: "Password",
    },
  ];
  return(
  <>
    {inputLogin?.map((label) => (
      <InputFormularioDatos
      id={label.id}
        key={label.id}
        onChange={label.handleChange}
        type={label.type}
        name={label.name}
        faIcon={label.faIcon}
      >
        {label.children}
      </InputFormularioDatos>
    ))}
  </>)
}
