import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
} from "@react-three/drei";

import Laptop from "./Laptop";

import "./Hero.css";


function Hero() {

  return (

    <section className="hero">

      <div className="hero-content">
        <div className="eyebrow">AVAILABLE FOR WORK — THIMPHU / REMOTE</div>
        <h1>Phub<br />Dorji<span className="accent">.</span></h1>
        <p className="role">Full Stack Developer building modern web applications using React, Next.js and Flutter — from first sketch to shipped code.</p>
        <div className="hero-foot">
          <span>Scroll to explore</span>
          <div className="scroll-cue"><div className="line"></div></div>
        </div>
      </div>

      <div className="canvas-container">

        <Canvas

          camera={{
            position:[0,0,3.5],
            fov:50
          }}

        >


          <ambientLight
            intensity={2}
          />


          <directionalLight

            position={[10,10,5]}

            intensity={3}

          />

          <Laptop />



          <Environment preset="city" />



          <OrbitControls
            enableZoom={false}
          />


        </Canvas>


      </div>


    </section>

  );

}


export default Hero;