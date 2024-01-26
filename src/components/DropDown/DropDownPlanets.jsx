import '../DropDown/dropDownPlanets.css';
import { NavLink } from 'react-router-dom';

const DropDownPlanets = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button id="Depy">Planets</button>

        <div className="dropdown-content">
          <NavLink to="/mercury">Mercury</NavLink>
          <NavLink to="/venus"> Venus </NavLink>
          <NavLink to="/earth"> Earth</NavLink>
          <NavLink to="/mars">Mars</NavLink>
          <NavLink to="/jupiter">Jupiter</NavLink>
          <NavLink to="/saturn"> Saturn</NavLink>
          <NavLink to="/uranus"> Uranus </NavLink>
          <NavLink to="/neptune">Neptune</NavLink>
          <NavLink to="/solarSystem"> SolarSystem</NavLink>
        </div>
      </div>
    </div>
  );
};

export default DropDownPlanets;
