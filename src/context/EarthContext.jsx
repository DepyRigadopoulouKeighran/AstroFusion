import { createContext } from 'react';
import { useContext } from 'react';
import planetsData from '../data/Data';

export const EarthContext = createContext(); // this is our context

// we need to get this context to all the components who need it
// normally we do this via a wrapper component

// an example we know already is <BrowserRouter>
// this usually wraps around our components and gives us access to the router functions, such as changing routes or linking to other routes

// theme provider is a component that returns jsx
// we pass information to our children component via the value attribute
export const EarthProvider = (props) => {
  return (
    <EarthContext.Provider value={{ planetsData }}>
      {props.children}
    </EarthContext.Provider>
  );
};
export const userEarthContext = () => {
  return useContext(EarthContext);
};
