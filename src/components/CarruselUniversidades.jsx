import { useState } from 'react';
import unah from '../assets/images/unah.png';
import upnfm from '../assets/images/upnfm.png';
import unag from '../assets/images/unag.png';
import unacifor from '../assets/images/unacifor.png';
import usac from '../assets/images/usac.png';
import ub from '../assets/images/ub.png';
import ues from '../assets/images/ues.svg';

export default function CarruselUniversidades() {
  const universidades = [
    { id: 1, nombre: 'Universidad Nacional Autónoma de Honduras', foto: unah },
    { id: 2, nombre: 'Universidad Pedagógica Nacional Francisco Morazán', foto: upnfm },
    { id: 3, nombre: 'Universidad Nacional de Agricultura', foto: unag },
    { id: 4, nombre: 'Universidad Nacional de Ciencias Forestales', foto: unacifor },
    { id: 5, nombre: 'Universidad de San Carlos de Guatemala', foto: usac },
    { id: 6, nombre: 'Universidad de Belize', foto: ub },
    { id: 7, nombre: 'Universidad de El Salvador', foto: ues },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const total = universidades.length;

  const irAnterior = () => {
    setStartIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const irSiguiente = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const visibles = [];
  for (let i = 0; i < visibleCount; i++) {
    visibles.push(universidades[(startIndex + i) % total]);
  }

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Universidades Aliadas
        </h2>

        <div className="flex justify-center items-center gap-4">
          {/* Flecha izquierda */}
          <div className="flex items-center">
            <button
              onClick={irAnterior}
              aria-label="Anterior"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xl"
            >
              &#8592;
            </button>
          </div>

          {/* Carrusel */}
          <div className="flex gap-4 overflow-hidden max-w-[800px] flex-shrink-0 transition-transform duration-500">
            {visibles.map((uni) => (
              <div
                key={uni.id}
                className="flex flex-col items-center w-44 min-h-[225px] bg-white rounded-lg p-4 border border-gray-300 shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={uni.foto}
                  alt={uni.nombre}
                  className="w-32 h-32 object-contain"
                />
                <p className="mt-3 text-center text-xs font-medium text-gray-700">
                  {uni.nombre}
                </p>
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <div className="flex items-center">
            <button
              onClick={irSiguiente}
              aria-label="Siguiente"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xl"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
