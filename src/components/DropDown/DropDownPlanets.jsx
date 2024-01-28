import '../DropDown/dropDownPlanets.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const DropDownPlanets = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className="navbar">
      <div className="dropdown">
        <button id="Depy" onClick={toggleDropdown}>
          Planets
        </button>
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
      <div>
        {/* <button id="home"> Home</button> */}
        <NavLink className="home" to="/">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default DropDownPlanets;
