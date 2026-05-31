import React, { useCallback } from 'react';
import './App.css';
import GraphController from "./components/graphContainer";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particlesOptions = {
  particles: {
    color: { value: "#11aa00" },
    links: { color: "#11aa00", enable: true },
    number: { value: 150 },
    size: { value: 5 },
    move: { enable: true },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
    },
  },
};

function ParticlesBackground() {
  const initEngine = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={initEngine}>
      <Particles className="particles" options={particlesOptions} />
    </ParticlesProvider>
  );
}

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <h3>Compare Calgary residential communities:</h3>
      <header className="App-header">
        <GraphController />
      </header>
    </div>
  );
}

export default App;
