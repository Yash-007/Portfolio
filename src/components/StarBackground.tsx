import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function StarBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0"
      init={particlesInit}
      options={{
        fullScreen: false,
        style: {
          position: "absolute",
          zIndex: "1",
        },
        background: {
          color: "transparent",
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#64ffda",
          },
          links: {
            enable: true,
            color: "#64ffda",
            opacity: 0.1,
            distance: 200,
            width: 0.3,
            triangles: {
              enable: true,
              opacity: 0.02
            }
          },
          move: {
            enable: true,
            direction: "none",
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.1, // Slower movement for better performance
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 3000, // Much larger area to reduce particle density
            },
            value: typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 25, // Even fewer particles
          },
          opacity: {
            value: 0.15,
            animation: {
              enable: true,
              speed: 0.15,
              minimumValue: 0.08,
              sync: false,
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.3, max: 0.8 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}