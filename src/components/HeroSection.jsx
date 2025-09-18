import React from 'react';


import banner2 from '../assets/images/banner4.png';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-[70vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${banner2})` }}
    >
      <div className="max-w-screen-xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">ORCIP</h1>
        <p className="text-base md:text-lg mb-6 max-w-3xl mx-auto">
          Conectamos investigadores, universidades y conocimiento en un espacio colaborativo digital
        </p>

        {/* Buscador */}
        <div className="max-w-xl mx-auto mb-6">
          <div className="flex bg-white rounded-lg overflow-hidden shadow-xl">
            <input
              type="text"
              placeholder="Buscar investigaciones, autores o temas..."
              className="flex-1 px-4 py-3 text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 text-white">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium text-sm transition duration-300">
            Subir Investigación
          </button>
          <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-2 rounded-md font-medium text-sm transition duration-300">
            Explorar Postgrados
          </button>
        </div>
      </div>
    </section>
  );
}

