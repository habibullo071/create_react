import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Footer from './pages/footer/Footer';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Services from './pages/services/Services';
import Skills from './pages/skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About/>
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="portfolio">
        <Portfolio />
      </section>
      
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
