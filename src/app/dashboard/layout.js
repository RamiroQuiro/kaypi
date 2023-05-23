import NavBar from "@/components/NavBar/NavBar";
import { Inter } from "next/font/google";
import Sidebar from "@/sidebar/Sidebar";
import Footer from "@/components/Footer";
import "../globals.css"
import PrivateRouter from "../PrivateRouter";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Kaipy Design',
  description: 'Tarjetas de presentacion digital',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden selection:bg-primary-400">
        <PrivateRouter>
        <main className="relative  w-screen overflow-x-hidden">

          {/* <NavBar /> */}

          <Sidebar/>
          {children}
          <Footer />
        </main>
        </PrivateRouter>
      </body>
    </html>
  );
}
