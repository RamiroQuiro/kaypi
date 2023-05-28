"use client"
export default function InputArea({children,name,value,onChange,placeholder}) {
  return (
    <div className="relative w-full mb-3">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="descripcion"
            >{children}
            </label>
            <textarea
              value={value}
              onChange={onChange}
              name={name}
              type="text"
              className="border-0  font-semibold px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              rows="4"
              placeholder={placeholder}
            />{" "}
          </div>
  )
}
