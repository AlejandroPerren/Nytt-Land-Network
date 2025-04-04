import Image from "next/image";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Header = () => {
  const handleScroll = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="relative w-full h-240 text-center flex flex-col justify-center items-center space-y-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="absolute inset-0 bg-[url('/img/background.png')] bg-cover bg-center"></div>

      <div className="relative z-10 flex justify-center">
        <Image
          src="/img/logo.png"
          width={400}
          height={400}
          alt="logo"
          className="max-w-full h-auto"
        />
      </div>
      <button
        onClick={handleScroll}
        className="relative z-10 mt-40 text-white text-3xl animate-bounce hover:text-gray-300"
        aria-label="Scroll down"
      >
        <FaArrowDown />
      </button>
    </div>
  );
};

export default Header;
