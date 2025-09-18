// src/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md z-50">
      <nav className="max-w-screen-xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo y título */}
          <div className="flex items-center gap-4 min-w-0">
            <img
              src="/images/Logo_csuca.png"
              alt="Logo Observatorio Científico"
              className="w-16 h-16 rounded-full flex-shrink-0"
            />
            <span className="text-xl font-bold text-gray-800 whitespace-nowrap">
              ORCIP
            </span>
            </div>

          {/* Menú de navegación: solo visible en md+ */}
          <div className="hidden lg:flex space-x-6">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 font-medium">Inicio</a>
            <a href="#estadisticas" className="text-gray-600 hover:text-blue-600 font-medium">Estadísticas</a>
            <a href="#investigaciones" className="text-gray-600 hover:text-blue-600 font-medium">Investigaciones</a>
            <a href="#postgrados" className="text-gray-600 hover:text-blue-600 font-medium">Postgrados</a>
            <a href="#universidades" className="text-gray-600 hover:text-blue-600 font-medium">Universidades</a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600 font-medium">Contacto</a>
          </div>

          {/* Botón de sesión: siempre visible */}
<div className="flex items-center">
  <a
    href="https://dev-diciht.unah.edu.hn/login_sisic"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
  >
    Iniciar Sesión
  </a>
</div>
        </div>
      </nav>
    </header>
  );
}