"use client";

import { useState } from "react";
import Image from "next/image";

const StartScreen = ({ onStart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-[1000]">
      <div className=" relative flex flex-col justify-center items-center space-y-6 bg-[url(/img/background.png)] bg-cover bg-center w-full h-screen text-center"></div>
      <Image
        src="/img/logo.png"
        width={400}
        height={400}
        alt="logo"
        className={`cursor-pointer absolute transition-transform duration-500 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
        onClick={onStart}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default StartScreen;
