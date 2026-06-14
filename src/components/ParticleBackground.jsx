import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#00D9FF",
          },
          links: {
            color: "#00D9FF",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 2,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;