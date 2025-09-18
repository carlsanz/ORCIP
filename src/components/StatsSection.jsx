export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">6,000+</div>
            <div className="text-gray-600">Investigadores</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">4,000+</div>
            <div className="text-gray-600">Investigaciones</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">24</div>
            <div className="text-gray-600">Universidades</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">1,400+</div>
            <div className="text-gray-600">Postgrados</div>
          </div>
        </div>
      </div>
    </section>
  );
}
