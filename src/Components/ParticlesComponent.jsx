// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { useEffect, useMemo, useState } from "react";
// // import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// // import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// // import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



// const ParticlesComponent = (props) => {

//   const [init, setInit] = useState(false);
//   // this should be run only once per application lifetime
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//       // starting from v2 you can add only the features you need reducing the bundle size
//       //await loadAll(engine);
//       //await loadFull(engine);
//       await loadSlim(engine);
//       //await loadBasic(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };


//   const options = useMemo(
//     () => ({
//       background: {
//         color: {
//           value: "#1E2F97",
//         },
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true,
//             mode: "repulse",
//           },
//           onHover: {
//             enable: true,
//             mode: 'grab',
//           },
//         },
//         modes: {
//           push: {
//             distance: 200,
//             duration: 15,
//           },
//           grab: {
//             distance: 150,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#FFFFFF",
//         },
//         links: {
//           color: "#FFFFFF",
//           distance: 150,
//           enable: true,
//           opacity: 0.3,
//           width: 1,
//         },
//         move: {
//           direction: "none",
//           enable: true,
//           outModes: {
//             default: "bounce",
//           },
//           random: true,
//           speed: 1,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//           },
//           value: 150,
//         },
//         opacity: {
//           value: 1.0,
//         },
//         shape: {
//           type: "circle",
//         },
//         size: {
//           value: { min: 1, max: 3 },
//         },
//       },
//       detectRetina: true,
//     }),
//     [],
//   );


//   return <Particles id={props.id} init={particlesLoaded} options={options} />; 
// };

// export default ParticlesComponent;
// ParticlesComponent.jsx

import React from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-particles';

const ParticlesComponent = () => {
  const particlesInit = async (main) => {
    // You can customize or add shapes and configurations here
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: "#0d47a1", // Set background color
    },
    fpsLimit: 120, // Frames per second limit
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push", // Push particles on click
        },
        onHover: {
          enable: true,
          mode: "repulse", // Repulse particles on hover
        },
        resize: true, // Adjusts particles on window resize
      },
      modes: {
        push: {
          quantity: 4, // Number of particles added on click
        },
        repulse: {
          distance: 200, // Distance for repulsion on hover
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Particle color
      },
      links: {
        color: "#ffffff",
        distance: 150, // Distance between particles for linking
        enable: true, // Enable linking
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true, // Enable particle collisions
      },
      move: {
        direction: "none", // Particles move in random direction
        enable: true,
        outModes: {
          default: "bounce", // Particles bounce when they hit the edge
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800, // Number of particles per 800px area
        },
        value: 80, // Total number of particles
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle", // Particle shape
      },
      size: {
        value: { min: 1, max: 3 }, // Random particle size between 1 and 3
      },
    },
    detectRetina: true, // Enable high-resolution mode for Retina screens
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default ParticlesComponent;
