import { useState, useEffect } from 'react';

export default function TestimoniosSection() {
  const testimonios = [
    {
      texto: "Si supiéramos lo que estamos haciendo, no se llamaría investigación.",
      autor: 'Albert Einstein',
      institucion: 'Inspiración académica para el trabajo colaborativo en ORCIP',
    },
     {
    "texto": "Lo que conocemos es una gota, lo que no conocemos es un océano.",
    "autor": "Isaac Newton",
    "institucion": "Reflexión sobre la vastedad del conocimiento"
  },
  {
    "texto": "La medida de la grandeza en una idea científica es la medida en que estimula el pensamiento y abre nuevas líneas de investigación.",
    "autor": "Paul Dirac",
    "institucion": "Inspiración para transformar ideas en descubrimientos"
  }
  ];

  const [indice, setIndice] = useState(0);
  const total = testimonios.length;

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(intervalo);
  }, [total]);

  const irAnterior = () => {
    setIndice((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const irSiguiente = () => {
    setIndice((prev) => (prev + 1) % total);
  };

  return (
    <section id="testimonios" className="py-20">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg border border-gray-300 shadow-md relative select-none">
        {testimonios.map((t, i) => (
          <div
            key={i}
            className={`transition-opacity duration-700 ease-in-out absolute inset-0 flex flex-col justify-center items-center text-center px-6
              ${i === indice ? 'opacity-100 relative' : 'opacity-0 pointer-events-none'}`}
            aria-hidden={i !== indice}
          >
            <p className="text-lg italic mb-4">"{t.texto}"</p>
            <p className="font-semibold">{t.autor}</p>
            <p className="text-sm text-gray-600">{t.institucion}</p>
          </div>
        ))}

        <button
          onClick={irAnterior}
          aria-label="Anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          &#8592;
        </button>
        <button
          onClick={irSiguiente}
          aria-label="Siguiente"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          &#8594;
        </button>

        <div className="flex justify-center space-x-3 mt-6">
          {testimonios.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndice(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                i === indice ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
