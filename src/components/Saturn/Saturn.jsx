// Saturn.js
import { useState } from 'react';
import './saturn.css';
import saturnBackImage from '../../images/saturn-back.jpg';

const Saturn = () => {
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
          <h1 className="cardHeaderFront">Saturn</h1>
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
          <img className="cardImageFront" src="" alt="Saturn Front" />
        </div>
        <div className="card cardBack">
          <h1 className="cardHeaderBack">Saturn</h1>
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
          <img
            className="cardImageBack"
            src={saturnBackImage}
            alt="Saturn Back"
          />
          <section className="cardSection">
            <h2 className="cardTitles">Fun facts about Saturn</h2>
            <p className="cardText">
              Saturn is the sixth planet from the Sun and the second-largest in
              our solar system, known for its stunning ring system.
            </p>
            <p className="cardText">
              The rings of Saturn are made up of ice particles, rock debris, and
              dust. These rings are divided into several major ring groups.
            </p>
            <p className="cardText">
              Saturn has a unique hexagonal cloud pattern at its north pole,
              which was discovered by the Cassini spacecraft.
            </p>
            <h2 className="cardTitles">Historical Events</h2>
            <p className="cardText">
              Saturn has been observed since ancient times and was named after
              the Roman god of agriculture and wealth.
            </p>
            <h2 className="cardTitles">Space Phenomena</h2>
            <p className="cardText">
              Saturn's moon Titan is the second-largest moon in the solar system
              and has a thick atmosphere. It is the only moon with a significant
              atmosphere.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export default Saturn;
