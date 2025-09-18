import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const graficos = ['Unidades', 'Investigaciones', 'Investigadores', 'Registro Global'];

export default function EstadisticasGraficos() {
  const [data, setData] = useState([]);
  const chartRefs = useRef({});

  useEffect(() => {
    
    fetch('/api/graficos') // Usando proxy para evitar CORS
      .then((res) => res.json())
      .then((json) => {
        console.log('Respuesta del servidor:', json);
        setData(Array.isArray(json.data) ? json.data : []);
      })
      .catch((err) => console.error('Error al cargar datos:', err));
   
  }, []);

  useEffect(() => {
    graficos.forEach((grafico) => {
      const ctx = chartRefs.current[grafico]?.getContext('2d');
      if (!ctx || data.length === 0) return;

      const existingChart = Chart.getChart(ctx);
      if (existingChart) existingChart.destroy();

      let labels = [];
      let valores = [];
      let chartType = 'bar';
      let backgroundColors = ['#3b82f6']; // azul por defecto

      if (grafico === 'Unidades') {
        const filtrado = data.filter((d) => d.Unidades > 0);
        labels = filtrado.map((d) => d.Universidad);
        valores = filtrado.map((d) => d.Unidades);
      } else if (grafico === 'Investigaciones') {
        const filtrado = data.filter((d) => d.Investigaciones > 0);
        labels = filtrado.map((d) => d.Universidad);
        valores = filtrado.map((d) => d.Investigaciones);
      } else if (grafico === 'Investigadores') {
        const filtrado = data.filter((d) => d.Profesores > 0);
        labels = filtrado.map((d) => d.Universidad);
        valores = filtrado.map((d) => d.Profesores);
      } else if (grafico === 'Registro Global') {
        chartType = 'doughnut';
        labels = ['Unidades', 'Investigaciones', 'Investigadores'];
        valores = [
          data.reduce((acc, d) => acc + d.Unidades, 0),
          data.reduce((acc, d) => acc + d.Investigaciones, 0),
          data.reduce((acc, d) => acc + d.Profesores, 0),
        ];
        backgroundColors = ['#3b82f6', '#8b5cf6', '#10b981']; // azul, morado, verde
      }

      new Chart(ctx, {
        type: chartType,
        data: {
          labels,
          datasets: [
            {
              label: grafico,
              data: valores,
              backgroundColor: backgroundColors,
              borderRadius: chartType === 'bar' ? 6 : 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true, position: 'bottom' },
            tooltip: { mode: 'index', intersect: false },
          },
          scales:
            chartType === 'bar'
              ? {
                  y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0,0,0,0.1)' },
                  },
                  x: {
                    grid: { display: false },
                    ticks: {
                      autoSkip: false,
                      maxRotation: 45,
                      minRotation: 45,
                      font: { size: 10 },
                    },
                  },
                }
              : {},
        },
      });
    });
  }, [data]);

  return (
    <section className="py-20 bg-gray-50 px-4 section-pattern">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Gráficos y Reportes de Investigación
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
          {graficos.map((grafico) => (
            <div
              key={grafico}
              className="bg-white rounded-xl shadow-lg p-6 transition hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {grafico}
              </h3>
              <div className="h-64 flex items-center justify-center">
                <canvas ref={(el) => (chartRefs.current[grafico] = el)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
