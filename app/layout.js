import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nytt Land Network",
  description: "Pagina Oficial de tu Servidor de Minecraft Favorito",
};



export default function RootLayout({ children }) {


  return (
    <html lang="en">
     <body className={`${geistSans.variable} ${geistMono.variable} text-white `}>


        {children}
      </body>
    </html>
  );
}
