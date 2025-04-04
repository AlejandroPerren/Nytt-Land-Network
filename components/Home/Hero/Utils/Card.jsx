import { FaTrash } from "react-icons/fa";

const Card = ({ title, image, text, onOpenModal, onDelete, children }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col relative" data-aos="fade-up">

      {onDelete && (
        <button
          onClick={onDelete}
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
        >
          <FaTrash />
        </button>
      )}

      <div className="h-40 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-lg font-semibold mb-1 text-gray-900">{title}</h2>
          <p className="text-gray-600 text-sm text-justify">{text.slice(0, 150)}...</p>
        </div>

        <button
          onClick={() => onOpenModal(text)}
          className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition w-fit"
        >
          Read More
        </button>

        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};

export default Card;
