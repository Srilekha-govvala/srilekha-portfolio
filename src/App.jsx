import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
        <Navbar />

        <main>
          <Hero />
          <ScrollReveal>
            <About />
          </ScrollReveal><ScrollReveal>
            <Skills /></ScrollReveal><ScrollReveal>
            <Experience /></ScrollReveal><ScrollReveal>
            <Projects /></ScrollReveal><ScrollReveal>
            <Contact /></ScrollReveal>
            <Footer />
            <BackToTop />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;