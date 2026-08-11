import './Contact.css';
import useScrollReveal from '../../hooks/useScrollReveal';

function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="sec-head">
        <span className="sec-num">04</span>
        <span className="sec-title">Get in touch</span>
        <div className="sec-line"></div>
      </div>
      <p className="sec-title">Have a project in mind? I'd love to hear about it.</p>
      <div className="contact-links">
        <a href="mailto:hello@phubdorji.com">hello@phubdorji.com</a>
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        <a href="#">Twitter</a>
      </div>
    </section>
  );
}

export default Contact;
