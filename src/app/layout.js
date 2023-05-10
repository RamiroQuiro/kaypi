import "./globals.css"
export const metadata = {
  title: 'Kaipy Design',
  description: 'Tarjetas de presentacion digital',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
