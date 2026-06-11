import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Subsidy from './components/Subsidy';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Benefits />
      <Process />
      <Subsidy />
      <Footer />
    </div>
  );
}

export default App;
