const Modal = ({ text, onClose, title }) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center  bg-opacity-90 backdrop-blur-lg z-50 transition-opacity animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 text-white p-6 rounded-2xl shadow-2xl max-w-2xl w-[90%] h-auto max-h-[80vh] overflow-y-auto text-center relative transform transition-transform animate-scaleIn"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
        >
          ✖
        </button>
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Información</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default Modal;
