import './App.css'


import HeroSection from './components/HeroSection';
import Header from './components/Header';
import StatsSection from './components/StatsSection';
import EventosSection from './components/EventosSection';
import EstadisticasSection from './components/EstadisticasSection';
import InvestigacionesSection from './components/InvestigacionesSection';
import PostgradosSection from './components/PostgradosSection';
import CarruselUniversidades from './components/CarruselUniversidades';
import ContactoSection from './components/ContactoSection';
import TestimoniosSection from './components/TestimoniosSection';
import FooterSection from './components/FooterSection';




function App() {
  return (
    <>
       <div className="w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <EventosSection />
      <EstadisticasSection />
      <InvestigacionesSection />
      <PostgradosSection />
      <CarruselUniversidades />
      < ContactoSection/>
      < TestimoniosSection/>
      < FooterSection/>

      {/* Otros componentes */}
    </div>
    </>
  );
}

export default App;
