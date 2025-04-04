"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

const navLinks = [
  { id: 1, label: "Inicio", url: "/" },
  { id: 2, label: "Mapa", url: "/mapa" },
  { id: 3, label: "Noticias", url: "/noticias" },
];

const Nav = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavBg(window.scrollY > 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full transition-all ${navBg ? "bg-black shadow-md" : "bg-transparent"} z-50`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="#">
          <h1 className="text-white text-2xl font-bold"></h1>
        </Link>
        {/* Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url} className="text-white font-extrabold hover:text-gray-300">
              {link.label}
            </Link>
          ))}
        </div>
        {/* Menú móvil */}
        <HiBars3BottomRight onClick={openNav} className="md:hidden text-white text-3xl cursor-pointer" />
      </div>
    </nav>
  );
};

const MobileNav = ({ showNav, closeNav }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-75 transition-transform ${showNav ? "translate-x-0" : "-translate-x-full"} z-50`}>
      <div className="p-6 flex flex-col space-y-6 text-white">
        <CgClose onClick={closeNav} className="text-3xl font-extrabold cursor-pointer self-end" />
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} className="text-xl font-extrabold " onClick={closeNav}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Nav openNav={() => setShowNav(true)} />
      <MobileNav showNav={showNav} closeNav={() => setShowNav(false)} />
    </>
  );
};

export default ResponsiveNav;
