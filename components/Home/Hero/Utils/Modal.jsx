const Modal = ({ text, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
        <div className="bg-white w-full h-full md:w-4/5 md:h-4/5 p-10 overflow-y-auto shadow-2xl rounded-lg flex flex-col justify-between">
          <div className="flex-grow">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Información Importante
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed">
              {text}
            </p>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={onClose}
              className="bg-red-500 text-white px-8 py-4 rounded-lg text-2xl font-semibold hover:bg-red-600 transition duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  