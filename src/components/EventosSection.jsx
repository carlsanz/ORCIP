export default function EventosSection() {
  return (
   <section id="eventos" className="bg-gray-50 py-8 px-4">
  <div className="max-w-5xl mx-auto text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-800 mb-4 py-8">
      Eventos Científicos Destacados
    </h2>

    <div className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 snap-x">
      {/* Evento */}
      {[
        {
          titulo: "Seminario Internacional de Energías Renovables",
          fecha: "15 de Septiembre",
          lugar: "UNAH",
        },
        {
          titulo: "Congreso Latinoamericano de Biotecnología",
          fecha: "3–5 de Octubre",
          lugar: "Universidad de Buenos Aires",
        },
        {
          titulo: "Taller de Física Cuántica Aplicada",
          fecha: "22 de Octubre",
          lugar: "MIT",
        },
        {
          titulo: "Conferencia sobre Cambio Climático",
          fecha: "10 de Noviembre",
          lugar: "Universidad de Cambridge",
        },
      ].map((evento, i) => (
        <article
          key={i}
          className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md p-6 flex flex-col justify-between transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg snap-start"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {evento.titulo}
            </h3>
            <p className="text-gray-600 text-sm mb-1">
              <span className="font-semibold">Fecha:</span> {evento.fecha}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              <span className="font-semibold">Lugar:</span> {evento.lugar}
            </p>
          </div>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded transition"
          >
            Ver más
          </a>
        </article>
      ))}
    </div>
  </div>
</section>

  );
}
