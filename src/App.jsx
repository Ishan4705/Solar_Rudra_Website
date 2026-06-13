import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import TrustImpact from './components/TrustImpact';
import Process from './components/Process';
import Subsidy from './components/Subsidy';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Benefits />
      <TrustImpact />
      <Process />
      <Subsidy />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
