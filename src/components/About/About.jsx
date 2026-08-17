import './About.css';
import useScrollReveal from '../../hooks/useScrollReveal';

function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="sec-head">
        <span className="sec-num">01</span>
        <span className="sec-title">About</span>
        <div className="sec-line"></div>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>Changes Applied <strong>BRRANCH</strong> precise, deliberate, nothing left to guesswork.</p>
          <p>My process starts with understanding requirements, moves to code fast, and stays there — I'd rather iterate in the browser than in a mockup tool. That habit shows up in how quickly ideas become real, working software.</p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="num">40+</div>
            <div className="label">PROJECTS SHIPPED</div>
          </div>
          <div className="stat-card">
            <div className="num">6</div>
            <div className="label">YEARS DEVELOPING</div>
          </div>
          <div className="about-visual">
            <div className="running-person" aria-hidden="true">
              <div className="runner-head"></div>
              <div className="runner-body"></div>
              <div className="runner-arm runner-arm-front"></div>
              <div className="runner-arm runner-arm-back"></div>
              <div className="runner-leg runner-leg-front"></div>
              <div className="runner-leg runner-leg-back"></div>
            </div>
            <div className="running-caption">Always moving forward.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
