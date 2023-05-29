import { llamarRutas } from "@/api/hello/firestore";
import SectionTarjetaSola from "./component/SectionTarjetaSola";
import RutaVerificada from "./RutaVerificada";

export default async function Home() {

  const array=await  llamarRutas().then((obj) => {
      const users = Object.values(obj);
      // const key = Object.keys(obj).find(key => obj[key] === 'RamiroChangoMoreno');
      return users.map((user) => user.toLowerCase());
  })

  return (
    <RutaVerificada array={array}>
      <div className="w-screen overflow-x-hidden  min-h-screen h-screen md:rounded-lg bg-white relative flex items-center justify-center">
        <SectionTarjetaSola label={false} />
        <div className="absolute top-0 left-0 w-full bg-gradient-to-tr from-primary-400/10 via-primary-200/20 to-primary-400/10 z-10 backdrop-blur-sm h-full"></div>
      </div>
    </RutaVerificada>
  );
}
