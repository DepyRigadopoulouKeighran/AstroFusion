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
import './App.css';
import SolarSystem from './components/SolarSystem/SolarSystem';

import DropDownPlanets from './components/DropDown/DropDownPlanets';

import Saturn from './components/Saturn/Saturn';
import Galaxy from './components/Galaxy/Galaxy';

function App() {
  return (
    <>
      <DropDownPlanets />

      {/* <Galaxy /> */}

      <Routes>
        <Route path="/" element={<Galaxy />} />
        <Route path="earth" element={<Earth />} />
        <Route path="saturn" element={<Saturn />} />
        <Route path="jupiter" element={<Jupiter />} />
        <Route path="mars" element={<Mars />} />
        <Route path="mercury" element={<Mercury />} />
        <Route path="neptune" element={<Neptune />} />
        <Route path="venus" element={<Venus />} />
        <Route path="uranus" element={<Uranus />} />
        <Route path="solarSystem" element={<SolarSystem />} />
        <Route path="sun" element={<Sun />} />
        <Route path="moon" element={<Moon />} />
      </Routes>

      <EarthProvider>
        <h1>AstroFusion Project</h1>
      </EarthProvider>
    </>
  );
}

export default App;
