import { useEffect, useRef, useState } from "react";
import spiderManVideo from "../../assets/spider-man.mp4";
import phubCharacter from "../../assets/phub-character.png";

import "./Hero.css";

function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [scrollHeight, setScrollHeight] = useState(260);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    let frameId;

    const updateVideo = () => {
      frameId = undefined;

      const sectionTop = section.offsetTop;

      const scrollableDistance =
        section.offsetHeight - window.innerHeight;

      const currentProgress = Math.min(
        1,
        Math.max(
          0,
          (window.scrollY - sectionTop) /
            scrollableDistance
        )
      );

      setProgress(currentProgress);

      if (video.duration) {
        video.currentTime =
          currentProgress * video.duration;
      }
    };

    const requestVideoUpdate = () => {
      if (frameId === undefined) {
        frameId =
          window.requestAnimationFrame(updateVideo);
      }
    };

    const handleMetadata = () => {
      if (
        video.duration &&
        Number.isFinite(video.duration)
      ) {
        setScrollHeight(
          Math.max(220, video.duration * 28)
        );
      }
    };

    video.addEventListener(
      "loadedmetadata",
      handleMetadata
    );

    window.addEventListener(
      "scroll",
      requestVideoUpdate,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      requestVideoUpdate
    );

    requestVideoUpdate();

    return () => {
      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId);
      }

      video.removeEventListener(
        "loadedmetadata",
        handleMetadata
      );

      window.removeEventListener(
        "scroll",
        requestVideoUpdate
      );

      window.removeEventListener(
        "resize",
        requestVideoUpdate
      );
    };
  }, []);

  /* =========================
     INTRO ANIMATION
  ========================= */

  const introOpacity =
    progress < 0.18
      ? 1
      : Math.max(
          0,
          1 - (progress - 0.18) * 7
        );

  const introY = progress * -120;

  /* =========================
     DEVELOPER MESSAGE
  ========================= */

  const developerOpacity =
    progress > 0.12 && progress < 0.48
      ? Math.min(
          1,
          (progress - 0.12) * 8,
          (0.48 - progress) * 8
        )
      : 0;

  const developerX =
    progress < 0.3
      ? (0.3 - progress) * -500
      : 0;

  /* =========================
     BUILD MESSAGE
  ========================= */

  const buildOpacity =
    progress > 0.4 && progress < 0.75
      ? Math.min(
          1,
          (progress - 0.4) * 8,
          (0.75 - progress) * 8
        )
      : 0;

  const buildX =
    progress < 0.55
      ? (0.55 - progress) * 600
      : 0;

  /* =========================
     FINAL MESSAGE
  ========================= */

  const finalOpacity =
    progress > 0.7
      ? Math.min(
          1,
          (progress - 0.7) * 5
        )
      : 0;

  const finalScale =
    progress > 0.7
      ? 0.85 + (progress - 0.7) * 0.5
      : 0.85;

  return (
    <section
      className="hero-scroll-stage"
      ref={sectionRef}
      style={{
        "--hero-scroll-height": `${scrollHeight}vh`,
      }}
    >
      <div className="hero">

        {/* =========================
            BACKGROUND VIDEO
        ========================= */}

        <video
          ref={videoRef}
          className="hero-video"
          src={spiderManVideo}
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />

        <div
          className="hero-video-overlay"
          aria-hidden="true"
        />


        {/* =========================
            INTRO
        ========================= */}

        <div
          className="hero-content hero-intro"
          style={{
            opacity: introOpacity,
            transform: `translateY(${introY}px)`,
          }}
        >

          <div className="eyebrow">
            AVAILABLE FOR WORK — THIMPHU / REMOTE
          </div>


          {/* =========================
              CHARACTER IMAGE
          ========================= */}

          <div className="hero-character">
            <img
              src={phubCharacter}
              alt="Phub Dorji"
              className="hero-character-image"
            />
          </div>


          {/* =========================
              ROLE
          ========================= */}

          <p className="role">
            Phub Dorji Tsirap <br />
            This is where the story begins.
          </p>


          {/* =========================
              SCROLL CUE
          ========================= */}

          <div className="hero-foot">

            <span>
              Scroll to explore
            </span>

            <div className="scroll-cue">
              <div className="line"></div>
            </div>

          </div>

        </div>


        {/* =========================
            MESSAGE 01
        ========================= */}

        <div
          className="scroll-message developer-message"
          style={{
            opacity: developerOpacity,
            transform: `
              translateX(${developerX}px)
              translateY(-50%)
            `,
          }}
        >

          <span className="message-number">
            01
          </span>

          <h2>
            I BUILD
            <br />

            <span>
              DIGITAL
            </span>

            <br />

            EXPERIENCES.
          </h2>

          <p>
            Interfaces that feel fast,
            intentional and alive.
          </p>

        </div>


        {/* =========================
            MESSAGE 02
        ========================= */}

        <div
          className="scroll-message build-message"
          style={{
            opacity: buildOpacity,
            transform: `
              translateX(${buildX}px)
              translateY(-50%)
            `,
          }}
        >

          <span className="message-number">
            02
          </span>

          <h2>
            CODE.
            <br />

            CREATE.
            <br />

            <span>
              SHIP.
            </span>
          </h2>

          <p>
            React · Next.js · Flutter · Node.js
          </p>

        </div>


        {/* =========================
            MESSAGE 03
        ========================= */}

        <div
          className="scroll-message final-message"
          style={{
            opacity: finalOpacity,
            transform: `
              translate(-50%, -50%)
              scale(${finalScale})
            `,
          }}
        >

          <span className="message-number">
            03
          </span>

          <h2>
            LET'S
            <br />

            BUILD
            <br />

            <span>
              SOMETHING.
            </span>
          </h2>

          <p>
            Scroll down to see my work.
          </p>

        </div>


        {/* =========================
            TOP RIGHT INDEX
        ========================= */}

        <div className="hero-index">

          <span>
            PORTFOLIO
          </span>

          <span>
            2026
          </span>

        </div>


        {/* =========================
            PROGRESS
        ========================= */}

        <div className="hero-progress">

          <div
            className="hero-progress-bar"
            style={{
              transform: `scaleY(${progress})`,
            }}
          />

          <span>
            {String(
              Math.round(progress * 100)
            ).padStart(2, "0")}
          </span>

        </div>

      </div>
    </section>
  );
}

export default Hero;