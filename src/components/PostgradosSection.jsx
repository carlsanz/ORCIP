const postgrados = [
  {
    icono: '🎓',
    titulo: 'Maestría en Dirección de Proyectos',
    descripcion:
      'Forma profesionales con capacidades técnicas y científicas para identificar, evaluar y gestionar proyectos de manera eficiente.',
    colaboracion: 'Universidad Nacional Autonoma de Honduras',
    color: 'blue',
  },
  {
    icono: '📚',
    titulo: 'Maestría en Gestión Informática',
    descripcion:
      'Desarrolla capacidades para liderar procesos de transformación digital y optimizar el uso de tecnologías en entornos organizacionales.',
    colaboracion: 'Universidad Nacional Autonoma de Honduras',
    color: 'green',
  },
  {
    icono: '📊',
    titulo: 'Gestión, Fiscalización y Control Gubernamental',
    descripcion:
      'Forma profesionales en auditoría gubernamental, con enfoque en auditoría financiera, de desempeño y de cumplimiento.',
    colaboracion: 'Universidad de San Carlos en Guatemala',
    color: 'purple',
  },
  {
    icono: '💼',
    titulo: 'Maestria en Administracion Direccion de Empresas',
    descripcion:
      'Forma profesionales capaces de aplicar conocimientos empresariales en distintas áreas del mundo corporativo.',
    colaboracion: 'Universidad de Costa Rica',
    color: 'red',
  },
];

const colorClasses = {
  blue: {
    text: 'text-blue-600',
    bg: 'bg-blue-600',
    hover: 'hover:bg-blue-700',
  },
  green: {
    text: 'text-green-600',
    bg: 'bg-green-600',
    hover: 'hover:bg-green-700',
  },
  purple: {
    text: 'text-purple-600',
    bg: 'bg-purple-600',
    hover: 'hover:bg-purple-700',
  },
  red: {
    text: 'text-red-600',
    bg: 'bg-red-600',
    hover: 'hover:bg-red-700',
  },
  
};

export default function PostgradosSection() {
  return (
    <section id="postgrados" className="py-20 section-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Programas de Postgrado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formación especializada en colaboración con universidades líderes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {postgrados.map((item, index) => {
            const color = colorClasses[item.color] || colorClasses.blue;
            return (
              <div
                key={index}
                className="card-hover bg-white rounded-xl p-6 shadow-lg flex flex-col justify-between"
              >
                <div className={`text-4xl mb-4 ${color.text}`}>{item.icono}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.titulo}
                </h3>
                <p className="text-gray-600 mb-4">{item.descripcion}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <i className="fas fa-university mr-2"></i>
                  {item.colaboracion}
                </div>
                <button
                  className={`w-full ${color.bg} ${color.hover} text-white py-2 rounded-lg font-semibold transition duration-300 mt-auto`}
                >
                  Más Información
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
