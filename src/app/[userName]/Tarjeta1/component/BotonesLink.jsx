import Link from "next/link";

export default function BotonesLink({ children, color, enlace }) {
  let regex = /https:\/\//;

  return (
    <Link
      target="_blank"
      href={regex.test(enlace) ? enlace : "https://" + enlace}
      className="flex  mx-auto gap-5 cursor-pointer bg-gray-200 text-gray-700 px-2 py-1 rounded shadow-md items-center justify-evenly "
    >
      <div className="w-6 h-6 cursor-pointer ">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.65 14.77C8.54 15.07 8.25 15.26 7.95 15.26C7.86 15.26 7.78 15.25 7.69 15.21C6.88 14.91 6.2 14.32 5.77 13.55C4.77 11.75 5.39 9.4 7.14 8.31L9.48 6.86C10.34 6.33 11.35 6.17 12.31 6.42C13.27 6.67 14.08 7.3 14.57 8.18C15.57 9.98 14.95 12.33 13.2 13.42L12.94 13.61C12.6 13.85 12.13 13.77 11.89 13.44C11.65 13.1 11.73 12.63 12.06 12.39L12.37 12.17C13.49 11.47 13.87 10.02 13.26 8.91C12.97 8.39 12.5 8.02 11.94 7.87C11.38 7.72 10.79 7.81 10.28 8.13L7.92 9.59C6.84 10.26 6.46 11.71 7.07 12.83C7.32 13.28 7.72 13.63 8.2 13.81C8.59 13.95 8.79 14.38 8.65 14.77ZM16.92 15.65L14.58 17.1C13.99 17.47 13.33 17.65 12.66 17.65C12.36 17.65 12.05 17.61 11.75 17.53C10.79 17.28 9.98 16.65 9.5 15.77C8.5 13.97 9.12 11.62 10.87 10.53L11.13 10.34C11.47 10.1 11.94 10.18 12.18 10.51C12.42 10.85 12.34 11.32 12.01 11.56L11.7 11.78C10.58 12.48 10.2 13.93 10.81 15.04C11.1 15.56 11.57 15.93 12.13 16.08C12.69 16.23 13.28 16.14 13.79 15.82L16.13 14.37C17.21 13.7 17.59 12.25 16.98 11.13C16.73 10.68 16.33 10.33 15.85 10.15C15.46 10.01 15.26 9.58 15.41 9.19C15.55 8.8 15.99 8.6 16.37 8.75C17.18 9.05 17.86 9.64 18.29 10.41C19.28 12.21 18.67 14.56 16.92 15.65Z"
              fill={"rgb(55, 65, 81)"}
            ></path>{" "}
          </g>
        </svg>
      </div>
      <span className="flex-grow text-sm ">{children}</span>
    </Link>
  );
}
