import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Navbar />
      <Hero />
      <About />
      <Skills />          {/* Show tech stack early */}
      <Experience />      {/* Internship + clubs */}
      <Projects />        {/* Proof of skills */}
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
