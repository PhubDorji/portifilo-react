import { useEffect, useRef, useState } from "react";
import spiderManVideo from "../../assets/spider-man.mp4";

import "./Hero.css";


function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(260);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let frameId;

    const updateVideo = () => {
      frameId = undefined;

      const sectionTop = section.offsetTop;
      const scrollableDistance = section.offsetHeight - window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - sectionTop) / scrollableDistance),
      );

      if (video.duration) {
        video.currentTime = progress * video.duration;
      }
    };

    const requestVideoUpdate = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(updateVideo);
      }
    };

    const handleMetadata = () => {
      if (video.duration && Number.isFinite(video.duration)) {
        setScrollHeight(Math.max(220, video.duration * 28));
      }
    };

    video.addEventListener("loadedmetadata", handleMetadata);
    window.addEventListener("scroll", requestVideoUpdate, { passive: true });
    window.addEventListener("resize", requestVideoUpdate);
    requestVideoUpdate();

    return () => {
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
      video.removeEventListener("loadedmetadata", handleMetadata);
      window.removeEventListener("scroll", requestVideoUpdate);
      window.removeEventListener("resize", requestVideoUpdate);
    };
  }, []);

  return (
    <section
      className="hero-scroll-stage"
      ref={sectionRef}
      style={{ "--hero-scroll-height": `${scrollHeight}vh` }}
    >
      <div className="hero">
        <video
          ref={videoRef}
          className="hero-video"
          src={spiderManVideo}
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="hero-video-overlay" aria-hidden="true" />

        <div className="hero-content">
          <div className="eyebrow">AVAILABLE FOR WORK — THIMPHU / REMOTE</div>
          <h1>Phub<br />Dorji<span className="accent">.</span></h1>
          <p className="role">Full Stack Developer building modern web applications using React, Next.js and Flutter — from first sketch to shipped code.</p>
          <div className="hero-foot">
            <span>Scroll to explore</span>
            <div className="scroll-cue"><div className="line"></div></div>
          </div>
        </div>

      </div>
    </section>

  );

}


export default Hero;