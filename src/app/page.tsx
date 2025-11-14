import About from "./components/About";
import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ParticlesComponent from "./components/Particles";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <ParticlesComponent />
      </div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Blogs />
      <Contact />
    </main>
  );
}
