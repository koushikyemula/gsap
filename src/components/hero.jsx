import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo);
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
  }, []);

  const handleSetVideo = () => {
    if (window.innerWidth > 768) {
      setVideoSrc(heroVideo);
    } else {
      setVideoSrc(smallHeroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSetVideo);
    return () => window.removeEventListener("resize", handleSetVideo);
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 flex w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 16 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay muted playsInline={true} key={videoSrc} className="pointer-events-none">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
