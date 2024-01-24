import { useState } from 'react';
import './earth.css';
import satelite from '../../images/earth-satelite.gif';
import earth from '../../images/earth1.gif';
const Earth = () => {
  const [showFront, setShowFront] = useState(true);

  const handleSide = () => {
    setShowFront(!showFront);
  };

  return (
    <>
      <h1
        className={`cardHeader${showFront ? 'Front' : 'Back'}`}
        onClick={handleSide}
      >
        Earth
      </h1>

      <nav className="cardNav">
        <ul className="navUl">
          <li className="navLi">
            <a href="#size">Size</a>
          </li>
          <li className="navLi">
            <a href="#distance">Distance from the Sun</a>
          </li>
          <li className="navLi">
            <a href="#characteristics">Key Characteristics</a>
          </li>
        </ul>
      </nav>

      {showFront ? (
        <img className="cardImageFront" src={satelite} alt="" />
      ) : (
        <>
          <img className="cardImageBack" src={earth} alt="" />
          <section className="cardSection">
            <h2 className="cardTitles">Fun facts about Earth</h2>
          </section>
        </>
      )}
    </>
  );
};

export default Earth;
