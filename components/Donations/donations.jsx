import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Donations = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <aside data-aos="fade-up">
      <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-lg mx-auto">
        <h3 className="text-2xl font-bold mb-4">Donaciones</h3>
        <p className="mb-3">
          Las donaciones no son obligatorias, pero son una gran ayuda para mantener el servidor online, funcionando sin interrupciones y mejorando cada día. 
        </p>
        <p className="mb-3">
          Todo lo recaudado se destina al hosting, mejoras técnicas y futuros proyectos dentro del servidor. Donar es una forma de apoyar este espacio sin afectar la jugabilidad ni romper el equilibrio: no usamos sistemas pay-to-win.
        </p>
        <p className="mb-5">
          Puedes donar usando tu medio de pago favorito de forma fácil y segura. ¡Cada aporte cuenta y se agradece muchísimo!
        </p>
        <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-xl font-semibold hover:bg-yellow-600 transition">
          Donar
        </button>
      </div>
    </aside>
  );
};

export default Donations;
