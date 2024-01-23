import { userEarthContext } from '../../context/EarthContext';

const Earth = () => {
  const { planetsData } = userEarthContext();

  const { name, id, info } = planetsData[0];

  return (
    <>
      <h1 key={planetsData.name}> {name} </h1>
      <p key={planetsData.info}> {info}</p>
      {/* {Earth.name} */}
    </>
  );
};

export default Earth;
