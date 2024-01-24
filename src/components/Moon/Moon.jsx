import { useState } from 'react';
import './moon.css';
import satelite from '../../images/earth-satelite.gif';
import earth from '../../images/earth1.gif';

const Moon = () => {
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
          <h1 className="cardHeaderFront">Moon</h1>
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
          <img className="cardImageFront" src={satelite} alt="" />
        </div>
        <div className="card cardBack">
          <h1 className="cardHeaderBack">Moon</h1>
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
          <img className="cardImageBack" src={earth} alt="" />
          <section className="cardSection">
            <h2 className="cardTitles">Fun facts about Moon</h2>
            <p className="cardText">
              1 Earth is not actually round While this sounds like an elaborate
              joke, we are actually serious. Earth it is not flat, but it is not
              perfectly round either. Earth rotation causes the planet to bulge
              at the equator and flatten at the poles, while the distribution of
              mass on Earth (which is not perfectly uniform) causes small
              variations in the gravitational pull at different locations on the
              planet. These variations are too small to be seen in pictures of
              Earth from space, so it appears round to the human eye
            </p>
            <p className="cardText">
              2 Earth has a squishy interior Earth’s interior is not solid, but
              rather has a semi-solid or ‘squishy’ consistency owing to high
              temperatures and pressures. This squishy consistency allows the
              mantle to flow and move over geological timescales, which is
              responsible for phenomena such as plate tectonics, volcanic
              activity and earthquakes. One consequence of this squishy interior
              is a process known as post-glacial rebound. During the last ice
              age, large portions of Earth's surface were covered by glaciers,
              causing the underlying mantle to deform and sink.
            </p>
            <p className="cardText">
              3 Atacama is the driest place on Earth The Atacama Desert, located
              in South America, is widely considered to be the driest place on
              Earth, outside of the Antarctic dry valleys. This vast expanse of
              land spans over 100 000 sq km and receives an average of less than
              1 mm of rainfall per year. Atacama Desert Atacama Desert The harsh
              climate of the Atacama is due to a combination of factors
              including its location in a rain shadow caused by the Andes
              mountains, the presence of the cold Humboldt Current offshore and
              a lack of moisture-bearing winds. Despite its arid conditions, the
              Atacama is home to a number of unique species of plants and
              animals that have adapted to survive in this harsh environment
            </p>

            <h2 className="cardTitles">Historical Events</h2>
            <p className="cardText">
              Many dramatic changes to the Earth’s climate have occurred over
              the planet’s 4.5-billion-year history. Long periods of stability,
              or equilibrium, are occasionally disrupted by periods of change
              that vary in length and intensity. Climatic shifts are
              destructive, and some even caused mass extinction events that
              wiped out high percentages of species. Despite these extinctions,
              life has always rebounded, allowing new species to dominate the
              landscape.
            </p>
            <p className="cardText">
              770 million years ago - Snowball Earth Scientists believe that
              there may have been several times when the entire Earth was frozen
              over with ice. There is no consensus as to what exactly caused
              these frigid events. One theory holds that a number of large
              volcanic eruptions sent sulfur gas particles into the atmosphere
              that reacted with solar radiation to produce a cooling effect.
              Some scientists speculate that snowball conditions facilitated an
              explosion of multicellular organisms.
            </p>

            <h2 className="cardTitles">Space Phenomena</h2>
            <p className="cardText">
              1 Asteroid A broad and diverse group of rocks in space that were
              little studied by astronomers until the mid-twentieth century. A
              major ‘belt’ of asteroids exists between Mars and Jupiter, and
              divides the solar system into the terrestrial group of planets and
              the gasseous giants.
              <br />
              <br />
              2 Black Hole A large, massive star that has run out of fuel and
              collapsed in on itself. The remnant core or sphere is so densely
              packed that light and other objects cannot escape its
              gravitational pull.
              <br />
              <br />3 Comet These “dirty snowballs” were once believed to be
              harbingers of doom or fortune. Unlocking their secrets helped
              scientists of the renaissance era to hone and prove their
              mathematical models.
              <br />
              <br />4 Dark Matter Scientists believe that small (and possibly
              exotic) particles account for motions of stars and galaxies that
              cannot otherwise be explained. Dark matter, to this point, has
              eluded detection and can not be seen with technologies that known
              particles and matter can.
              <br />
              <br />5 Exoplanet Planets located in solar systems and orbiting
              stars other than our own. There have been a substantial number of
              exoplanets discovered in the past few years by astronomers,
              utilizing improved detection methods and telescopes
              <br />
              <br /> 6 Galaxy Enormous structures in space that are home to
              millions upon millions of stars and solar systems. They come in
              different shapes and varieties, and are among the most beautiful
              astronmoical phenomena to be seen.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export default Moon;
