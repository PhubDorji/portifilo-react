import { useEffect, useState } from 'react';
import './Crosshair.css';

function Crosshair() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="crosshair-v" 
        style={{ transform: `translateX(${position.x}px)` }}
      />
      <div 
        className="crosshair-h" 
        style={{ transform: `translateY(${position.y}px)` }}
      />
      <div 
        className="coord"
        style={{ 
          left: position.x + 'px', 
          top: position.y + 'px',
          transform: 'translate(12px, 12px)'
        }}
      >
        X {position.x} · Y {position.y}
      </div>
    </>
  );
}

export default Crosshair;
