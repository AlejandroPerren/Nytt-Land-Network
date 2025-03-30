import { useState } from "react";
import Modal from "./Modal";

const Card = ({ title, image, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden p-4 transition-transform duration-300 hover:scale-105"
      data-aos="fade-up"
    >
      <img src={image} alt={title} className="w-full h-25 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{text.slice(0, 150)}...</p>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Leer más
        </button>
      </div>

      {isOpen && <Modal text={text} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default Card;
