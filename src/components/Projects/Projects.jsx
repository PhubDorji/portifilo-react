import './Projects.css';
import useScrollReveal from '../../hooks/useScrollReveal';

function Projects() {
  const sectionRef = useScrollReveal();

  const projects = [
    {
      index: '01',
      name: 'Portfolio',
      desc: 'A modern portfolio website with 3D elements and smooth animations built with React and Three.js.',
      tag: 'WEB / 3D'
    },
    {
      index: '02',
      name: 'E-Commerce',
      desc: 'Full-stack e-commerce platform with real-time inventory and payment integration.',
      tag: 'FULL STACK'
    },
    {
      index: '03',
      name: 'Task Manager',
      desc: 'Productivity app with offline support and collaborative features.',
      tag: 'PRODUCTIVITY'
    },
    {
      index: '04',
      name: 'Weather App',
      desc: 'Beautiful weather application with location-based forecasts and animations.',
      tag: 'MOBILE / WEB'
    }
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="sec-head">
        <span className="sec-num">02</span>
        <span className="sec-title">Selected Work</span>
        <div className="sec-line"></div>
      </div>
      <div className="proj-list">
        {projects.map((project) => (
          <div key={project.index} className="proj-row">
            <div className="proj-index">{project.index}</div>
            <div className="proj-name">{project.name}</div>
            <div className="proj-desc">{project.desc}</div>
            <div className="proj-tag">{project.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
