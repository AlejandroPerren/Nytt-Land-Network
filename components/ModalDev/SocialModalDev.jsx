import { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillCloseCircle, AiOutlineShareAlt } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleClose = (e) => {
    if (e.target.id === "modal-background") {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 flex items-center gap-2 rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:scale-110"
      >
        <AiOutlineShareAlt className="text-xl" /> Dev
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          id="modal-background"
          onClick={handleClose}
          className="fixed inset-0 bg-opacity-30 flex justify-center items-center z-50 backdrop-blur-md"
        >
          <div
            className="bg-black bg-opacity-20 p-4 rounded-lg shadow-lg max-w-[90%] w-80 md:w-96 text-center relative border border-gray-700"
            data-aos="zoom-in"
          >
            {/* Botón cerrar pequeño */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-transform hover:scale-110"
            >
              <AiFillCloseCircle className="text-lg" />
            </button>

 
            <Image 
              src="/img/logoDev.png"
              width={200}
              height={200}
              alt="Logo"
              className="mx-auto rounded-full w-90 h-50"
            />

            {/* Título */}
            <h2 className="text-lg font-semibold mt-2 text-white" data-aos="fade-up">
              Mis Redes
            </h2>

            {/* Enlaces más juntos */}
            <div className="flex flex-col gap-2 mt-2">
              <a 
                href="https://github.com/AlejandroPerren" 
                target="_blank" 
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-blue-400 transition-transform hover:scale-110"
                data-aos="fade-up"
              >
                <AiFillGithub className="text-lg" /> GitHub
              </a>

              <a 
                href="https://www.linkedin.com/in/alejandro-tomas-perren/" 
                target="_blank" 
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-blue-400 transition-transform hover:scale-110"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <AiFillLinkedin className="text-lg" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialModal;
