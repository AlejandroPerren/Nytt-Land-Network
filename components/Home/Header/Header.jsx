import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="relative w-full h-240 text-center flex flex-col justify-center items-center space-y-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-[url('/img/background.png')] bg-cover bg-center"></div>

      {/* Contenido del header */}
      <div className="relative z-10 flex justify-center">
        <Image
          src="/img/logo.png"
          width={400} 
          height={400}
          alt="logo"
          className="max-w-full h-auto"
        />
      </div>

      {/* Navegación */}
      <div className="relative z-10 flex gap-6 text-xl font-bold text-white">
        <Link href="#" className="hover:text-gray-500">Inicio</Link>
        <Link href="#" className="hover:text-gray-500">Mapa</Link>
      </div>
    </div>
  )
}

export default Header
