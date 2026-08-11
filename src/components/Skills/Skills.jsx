import './Skills.css';
import useScrollReveal from '../../hooks/useScrollReveal';

function Skills() {
  const sectionRef = useScrollReveal();

  const skillsData = [
    {
      category: 'FRONTEND',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js']
    },
    {
      category: 'BACKEND',
      items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'TOOLS',
      items: ['Git', 'Docker', 'VS Code', 'Figma', 'Framer Motion']
    }
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="sec-head">
        <span className="sec-num">03</span>
        <span className="sec-title">Skills</span>
        <div className="sec-line"></div>
      </div>
      <div className="skills-grid">
        {skillsData.map((skillBlock, index) => (
          <div key={index} className="skill-block">
            <div className="cat">{skillBlock.category}</div>
            <ul>
              {skillBlock.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
