import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero /Hero";

const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={null}>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;