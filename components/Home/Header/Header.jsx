import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div
     className='space-y-3'
    >
      {/* Image */}
      <div>
      <Image
      src={'/logo.png'}
      width={200}
      height={200}
      alt={'logo'}
      className=''
      />
      </div>
      {/* Navigation */}
      <div className='flex gap-4 text-xl font-bold '>
        <Link
        href={'#'}
        >
          Inicio
        </Link>
        <Link
        href={'#'}
        >
          Mapa
        </Link>
      </div>
    </div>
  )
}

export default Header