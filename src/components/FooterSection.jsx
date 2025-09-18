export default function FooterSection() {
 return (
  <footer className="bg-gray-800 text-white py-10 text-sm">
  <div className="container mx-auto px-4">

    {/* Íconos sociales al inicio */}
    <div className="flex justify-center space-x-4 mb-8 text-base">
      <a href="#" className="text-gray-400 hover:text-white">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <i className="fab fa-google"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <i className="fab fa-youtube"></i>
      </a>
    </div>

    {/* Línea divisoria */}
    <div className="border-t border-gray-700 mb-8"></div>

    {/* Contenido principal */}
    <div className="grid md:grid-cols-3 gap-6">
      {/* Columna izquierda */}
      <div>
        <h4 className="text-lg font-bold mb-2">DICHT UNAH</h4>
        <p className="text-gray-400 mb-1">
          Dirección de Investigación Científica Humanística y Tecnológica
        </p>
        <p className="text-gray-400 mb-1">OB-SIRCIP CSUCA</p>
        <p className="text-gray-400">
          Observatorio del Sistema Regional Centroamericano y del Caribe de Investigación y Posgrado CSUCA
        </p>
      </div>

      {/* Columna central */}
      <div>
        <h4 className="text-base font-bold mb-2">Accesos Rápidos</h4>
        <ul className="space-y-1">
          <li><a href="#eventos" className="text-gray-400 hover:text-white">Eventos</a></li>
          <li><a href="#convocatorias" className="text-gray-400 hover:text-white">Convocatorias</a></li>
          <li><a href="#cursos" className="text-gray-400 hover:text-white">Cursos y Capacitaciones</a></li>
          <li><a href="#biblioteca" className="text-gray-400 hover:text-white">Biblioteca</a></li>
        </ul>
      </div>

      {/* Columna derecha */}
      <div>
        <h4 className="text-base font-bold mb-2">Contáctanos</h4>
        <p className="text-gray-400 mb-1">DICHT UNAH</p>
        <p className="text-gray-400 mb-1">comunicacion.dicht@unah.edu.hn</p>
        <p className="text-gray-400 mb-2">2216-6100, 2216-5100</p>
        <p className="text-gray-400 mb-1">CSUCA Director académico y Secretario general adjunto</p>
        <p className="text-gray-400 mb-1">Francisco Alarcón Italarico</p>
        <p className="text-gray-400">falarcon@csuca.org | (502) 2502-7500 Ext. 105</p>
      </div>
    </div>

   
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-xs">
      <p>© 2025 Copyright DICHT UNAH.</p>
    </div>
  </div>
</footer>

);

}
