import PlayerCounter from "@/components/PlayerCounter/PlayerCounter";
import Image from "next/image";
import React from "react";
import { FaArrowDown } from "react-icons/fa";


const Header = () => {
  const handleScroll = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-240 text-center flex flex-col justify-center items-center space-y-6">
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/img/logo.png"
          width={400}
          height={400}
          alt="logo"
          className="max-w-full h-auto"
        />
        <div className="mt-2 bg-black bg-opacity-70 text-white px-4 py-1 rounded-lg text-sm shadow-md">
          <PlayerCounter />
        </div>
        <button
          onClick={handleScroll}
          className="mt-4 text-white text-3xl animate-bounce hover:text-gray-300"
          aria-label="Scroll down"
        >
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Header;
