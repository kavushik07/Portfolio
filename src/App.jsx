import React from 'react'
import Navbar from './Components/Navbar'; // Correct the path if needed
import Content from './Components/Content';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
// import ParticlesComponent from './Components/ParticlesComponent'
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
const App = () => {
  return (
    <>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 no-scrollbar'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          {/* <ParticlesComponent /> */}
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className='container mx-auto px-8'>
          <Navbar />
          <Content />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App;

// import React, { useState } from 'react';

// // Child component with no props
// const ChildComponent = React.memo(() => {
//   console.log("ChildComponent rendered");
//   return <div>I'm the child component.</div>;
// });

// // Parent component
// const ParentComponent = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };
//   console.log("ParentComponent rendered");

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <button onClick={increment}>Increment Count</button>
//       <p>Count: {count}</p>
//       <ChildComponent />
//     </div>
//   );
// };

// export default ParentComponent;
