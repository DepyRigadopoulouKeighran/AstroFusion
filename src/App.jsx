import { EarthProvider } from './context/EarthContext';

import { Routes, Route } from 'react-router-dom';

import Earth from './components/Earth/Earth';
import Jupiter from './components/Jupiter/Jupiter';
import Mars from './components/Mars/Mars';
import Moon from './components/Moon/Moon';
import Mercury from './components/Mercury/Mercury';
import Neptune from './components/Neptune/Neptune';
import Venus from './components/Venus/Venus';
import Sun from './components/Sun/Sun';
import Uranus from './components/Uranus/Uranus';
import Pluto from './components/Pluto/Pluto.jsx';

import './App.css';

import SolarSystem from './components/SolarSystem/SolarSystem';

import Saturn from './components/Saturn/Saturn.jsx';

import DropDownPlanets from './components/DropDown/DropDownPlanets';

function App() {
  return (
    <>
      <DropDownPlanets />
      <Routes>
        <Route path="/" element={<SolarSystem />} />
        <Route path="earth" element={<Earth />} />
        <Route path="saturn" element={<Saturn />} />
        <Route path="jupiter" element={<Jupiter />} />
        <Route path="mars" element={<Mars />} />
        <Route path="moon" element={<Moon />} />
        <Route path="mercury" element={<Mercury />} />
        <Route path="neptune" element={<Neptune />} />
        <Route path="venus" element={<Venus />} />
        <Route path="sun" element={<Sun />} />
        <Route path="uranus" element={<Uranus />} />
        <Route path="pluto" element={<Pluto />} />

        <Route path="solarSystem" element={<SolarSystem />} />
      </Routes>

      <EarthProvider>
        <h1>AstroFusion Project</h1>
      </EarthProvider>
    </>
  );
}

export default App;
