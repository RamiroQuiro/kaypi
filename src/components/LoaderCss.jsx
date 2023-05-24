import "./loader.css";

export default function LoaderCss() {
  return <div className="w-full h-screen relative bg-gray-100  flex items-center justify-center m-auto">
     
    <div className="custom-loader z-50"></div>
    <div
        style={{
          background: "linear-gradient(40deg, #2cd4d980  10%,#32347980  50%) ",
        }}
        className="absolute  backdrop-blur-sm mix-blend-multiply w-full h-full top- left-0"
      ></div></div>;
}
