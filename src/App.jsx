import { EarthContext, EarthProvider } from './context/EarthContext';
import planetsData from './data/Data';

import Earth from './components/Earth/Earth';
import Jupiter from './components/Jupiter/Jupiter';
import Mars from './components/Mars/Mars';
import Moon from './components/Moon/Moon';
import Mercury from './components/Mercury/Mercury';
import Neptune from './components/Neptune/Neptune';
import Venus from './components/Venus/Venus';
import Sun from './components/Sun/Sun';
import Uranus from './components/Uranus/Uranus';

import './App.css';

import SolarSystem from './components/SolarSystem/SolarSystem';
// import { Component } from 'react';

function App() {
  return (
    <>
      {/* <SolarSystem /> */}

      {/* <Jupiter /> */}

      <EarthProvider>
        <h1>AstroFusion Project</h1>
        <Earth />
      </EarthProvider>
    </>
  );
}

export default App;
