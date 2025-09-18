const investigaciones = [
  {
    autor: 'Cecilia Liska de León',
    universidad: 'Universidad de San Carlos de Guatemala',
    titulo: 'Caracterización Antropométrica y Estilos de Vida',
    resumen:
      'Estudio sobre actividad física, hábitos alimentarios y estado nutricional del personal docente y administrativo en la Facultad de Ciencias Químicas y Farmacia.',
    fecha: '2024',
    enlace: 'https://doi.org/10.54495/Rev.Cientifica.v28i1.60',
    color: 'blue',
  },
  {
  autor: 'René Oswaldo Monge López',
  universidad: 'Universidad de San Carlos de Guatemala',
  titulo: 'Evaluación del Desempeño Administrativo en la EEP',
  resumen:
    'Diseño de un modelo de evaluación para la Escuela de Estudios de Postgrado de la Facultad de Ingeniería, utilizando Balanced Scorecard para medir procesos críticos y satisfacción de usuarios.',
  fecha: '2023',
  enlace: 'http://www.repositorio.usac.edu.gt/id/eprint/18319',
  color: 'green',
},
 {
  autor: 'Claudia Regina Iriarte Cárcamo',
  universidad: 'Universidad Nacional Autónoma de Honduras (UNAH)',
  titulo: 'Definición de Prioridades en Ciencia y Tecnología',
  resumen:
    'Análisis del planeamiento estratégico en ciencia y tecnología desde la experiencia de UNAH, abordando políticas públicas, autonomía universitaria y gestión del conocimiento científico.',
  fecha: '2024',
  enlace: '#', // Podés reemplazar con el enlace real si lo tenés
  color: 'purple',
},
{
  autor: 'Soria Estela Ramos Suazo',
  universidad: 'Universidad Nacional Autónoma de Honduras Valle de Sula (UNAH-VS)',
  titulo: 'Enseñanza de la Investigación Científica en UNAH-VS',
  resumen:
    'Análisis del proceso de enseñanza de la investigación científica en carreras de Grado en UNAH-VS, destacando el enfoque constructivista y la planificación pedagógica bajo el modelo educativo institucional.',
  fecha: '2014',
  enlace: 'http://www.tzibalnaah.unah.edu.hn/handle/123456789/5958',
  color: 'blue',
}
,
];

export default function InvestigacionesSection() {
  return (
    <section id="investigaciones" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Investigaciones Destacadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las publicaciones más relevantes de nuestra comunidad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {investigaciones.map((item, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col justify-between min-h-[340px]"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div
                    className={`w-10 h-10 bg-${item.color}-100 rounded-full flex items-center justify-center mr-3`}
                  >
                    <i className={`fas fa-user text-${item.color}-600`}></i>
                  </div>
                  <div>
                    <p className="font-semibold">{item.autor}</p>
                    <p className="text-sm text-gray-500">{item.universidad}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.titulo}
                </h3>
                <p className="text-gray-600 mb-4">{item.resumen}</p>
              </div>

              <div className="flex justify-between items-center mt-auto pt-2">
                <span className="text-sm text-gray-500">Publicado: {item.fecha}</span>
                <a
                  href={item.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Leer más →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
            Explorar Todas las Investigaciones
          </button>
        </div>
      </div>
    </section>
  );
}
