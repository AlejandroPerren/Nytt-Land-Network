"use client";
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("mc.nyttland.online").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Juega Ahora</p>
          <div className="flex items-center gap-2 cursor-pointer group" onClick={copyToClipboard}>
            <span className="text-yellow-400 font-mono group-hover:underline">
              mc.nyttland.online
            </span>
            {copied ? (
              <FiCheck className="text-green-400" title="Copiado" />
            ) : (
              <FiCopy className="text-yellow-400 group-hover:text-white transition" title="Copiar IP" />
            )}
          </div>
          {copied && <p className="text-green-400 text-sm mt-1">¡IP copiada!</p>}
        </div>
        
        <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <p>Nytt Land Network &copy; 2025. All rights reserved.</p>
          <p className="text-gray-400 text-sm">No afiliado con Mojang o Microsoft.</p>
        </div>

        <div>
          <a
            href="https://discord.gg/3XjNePAmYn"
            className="text-blue-400 hover:text-blue-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
