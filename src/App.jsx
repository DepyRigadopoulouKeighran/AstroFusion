import { EarthContext, EarthProvider } from './context/EarthContext';
import Earth from './components/Earth/Earth';
// import Jupiter from './components/Jupiter/Jupiter';
// import Moon from './components/Moon/Moon';
// import Mercury from './components/Mercury/Mercury';
import planetsData from './data/Data';

import './App.css';
import SolarSystem from './components/SolarSystem/SolarSystem';
// import { Component } from 'react';

function App() {
  return (
    <>
      <SolarSystem />
      {/* <EarthProvider> */}
      {/* <Earth />
        <Jupiter />
        <Moon />
        <Mercury /> */}
      <h1>AstroFusion Project</h1>
      {/* <Earth /> */}
      {/* </EarthProvider> */}
    </>
  );
}

export default App;
