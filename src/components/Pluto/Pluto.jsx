// Pluto.js
import { useState } from 'react';
import './pluto.css';

const Pluto = () => {
  const [showFront, setShowFront] = useState(true);

  const handleSide = () => {
    setShowFront(!showFront);
  };

  return (
    <>
      <div
        className={`card-container${showFront ? '' : ' flipped'}`}
        onClick={handleSide}
      >
        <div className="card cardFront">
          <h1 className="cardHeaderFront">Pluto</h1>
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
          <img className="cardImageFront" src="" alt="Pluto Front" />
        </div>
        <div className="card cardBack">
          <h1 className="cardHeaderBack">Pluto</h1>
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
          <img className="cardImageBack" src="" alt="Pluto Back" />
          <section className="cardSection">
            <h2 className="cardTitles">Fun facts about Pluto</h2>
            <p className="cardText">
              Pluto, once considered the ninth planet in our solar system, was
              reclassified as a dwarf planet in 2006 by the International
              Astronomical Union (IAU).
            </p>
            <p className="cardText">
              It is located in the Kuiper Belt, a region of the solar system
              beyond Neptune that is populated with small icy bodies.
            </p>
            <p className="cardText">
              Pluto has a thin atmosphere primarily composed of nitrogen,
              methane, and carbon monoxide. Its surface is covered in frozen
              nitrogen and methane.
            </p>
            <h2 className="cardTitles">Historical Events</h2>
            <p className="cardText">
              Pluto was discovered by astronomer Clyde Tombaugh in 1930 at the
              Lowell Observatory in Flagstaff, Arizona. It remained classified
              as the ninth planet for 76 years.
            </p>
            <h2 className="cardTitles">Space Phenomena</h2>
            <p className="cardText">
              Pluto's status as a dwarf planet has led to debates and
              discussions about the definition of a planet and the
              classification of objects in the solar system.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Pluto;
