import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Juega Ahora</p>
          <p className="text-yellow-400 font-mono">mc.nyttland.online</p>
        </div>
        
        <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <p>Nytt Land Network &copy; 2025. All rights reserved.</p>
          <p className="text-gray-400 text-sm">No afiliado con Mojang o Microsoft.</p>
     
        </div>

        <div>
          <a href="https://discord.gg/3XjNePAmYn" className="text-blue-400 hover:text-blue-500 transition">
            Discord
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
