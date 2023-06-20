/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    clipPath: {
      mypolygon: "polygon(0 0, 99% 0, 100% 100%, 50% 87%, 54% 100%, 0 88%)",
      patron:
        "path(M96, 428.9c0 0, 96 78, 174 51, 48-16.6, 68-93.3, 198-99, 56.4-2.5, 170.2, 22.3, 255 48.1, 168.9 51.3, 313.7 75.4, 379.5 67.4, 68.6-8.4 ,250.5-55.2, 250.5-112.5 ,0-241.7-1.5-383.9-1.5-383.9h-1251l-10.5 419.9zm-1, 0.1)",
      url: "url(#heroShape)",
      mypolygono: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2.5rem))",
      myPolygon3: "polygon(0% 0%, 100% 0%, 100% 78%, 50% 58%, 51% 80%, 0 56%)",
      mypolygon2: "polygon(0 0, 99% 0, 100% 100%, 25% 81%, 30% 94%, 0 81%)",
      myCirclue:
        "polygon(0% 63%, 8% 63%,11% 68%, 18% 70%, 23% 69%, 29% 67%, 33% 63%, 37% 59%, 41% 56%, 46% 55%, 49% 53%, 54% 53%, 60% 54%, 65% 56%, 70% 58%, 78% 60%, 82% 62%, 86% 64%, 91% 66%, 95% 67%, 99% 69%, 100% 1%, 1% 0%);",
    },
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
    extend: {
      colors: {
        // for 'primary' and'success'  - use the colorblind-friendly version (blue-grey, cyan-grey, green-grey, orange-grey, purple-grey, red-grey, yellow-grey and violet-grey) and use the hex value.  Also, check out the Color Wheel demo.  Also, check out the Palette demo for the 5 color version.  Also, check out the Paletton demo for the inverse of colors.  Also, check out the Color Wheel demo for the 5 color version.  Also, check out the Paletton demo for the inverse of colors
        primary: {
          100: "#1e40af",
          200: "#3b82f6",
          300: "#2cd4d9",
          400: "#FFFC85",
          500: "#B33941",
          600: "#04A9BE",
        },
      },
      borderRadius: {
        borderRounded: "23% 77% 0% 100% / 0% 67% 33% 100%",
      },
      backgroundImage: {
        gradient: "linear-gradient(95deg, #5555de,#323479)",
        radial: "radial-gradient(#5555de, #323479)",
        conic: "conic-gradient(#5555de , #323479 )",
        sidebar:
          "linear-gradient(-52deg,#1e40af 22%,transparent 20%),linear-gradient(65deg,#172564 35%,transparent 30%),linear-gradient(to bottom, #172554 60%,#3b82f6 100%)",
        ruido1: "url(http://api.thumbr.it/whitenoise-361x370.png?) ",
        ruido2: "ffffffff&noise=a3d3e6&density=100&opacity=19",
        curva1:
          "radial-gradient(ellipse  at 45px 30px , transparent 50%, rgba(0, 255, 0, 0) 0%, #f0f000 0%)",
      },
      keyframes: {
        abrirCat: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        sliceDown: {
          "0%": { maxHeight: "300px", opacity: "1" },
          "100%": { maxHeight: "0px", opacity: "0" },
        },
        sliceUp: {
          "0%": { maxHeight: "0px", opacity: "0" },
          "100%": { maxHeight: "300px", opacity: "1" },
        },
        aparecer: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        hoverFilter: {
          "0%": { Height: "50px" },
          "100%": { Height: "auto" },
        },
        aparecerDeAbajo: {
          "0%": { opacity: "0", transform: "translateY(50%)" },
          "100%": { opacity: "1", transform: "translateY(0%) " },
        },
        desaparecer: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        aparecerCote: {
          "0%": { transform: "scale(0%) translateX(-20%) translateY(-20%)" },
          "100%": { transform: "scale(100%) translateX(0%) translateY(0%)" },
        },
        desaparecerCote: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        "waving-hand": "abrirCat 2s linear infinite",
        aparecer: "aparecer 1s ease-out ",
        aparecerCostado: "aparecerCote .3s ease-in ",
        desaparecerCostado: "desaparecerCote .3s ease-in ",
      },
      boxShadow: {
        shadowCaja1: "10px 10px 25px -7px rgba(66,66,66,0.7)",
        xxxl: "5px 5px 5px rgba(0,0,0,0.1), 15px 15px 15px rgba(0,0,0,0.1), 20px 10px 20px rgba(0,0,0,0.1),50px 50px 80px rgba(0,0,0,0.25), inset 3px 3px 3px #fff  0vtzz5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)5px 5px 5px rgba(0,0,0,0.1)AZ",
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns"), require("tailwind-clip-path")],
};
