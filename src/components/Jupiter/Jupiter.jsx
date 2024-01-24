import { useState } from 'react';
import './jupiter.css';
import jupiter1 from '../../images/jupiterFront.gif';
import jupiter2 from '../../images/jupiterBack.gif';

const Jupiter = () => {
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
          <h1 className="cardHeaderFrontJupiter">Jupiter</h1>
          <nav className="cardNavJupiter">
            <ul className="navUlJupiter">
              <li className="navLiJupiter">
                <a href="#size">Distance from the Sun</a>
              </li>
              <li className="navLiJupiter">
                <a href="#distance">Size</a>
              </li>
              <li className="navLiJupiter">
                <a href="#characteristics">Key Characteristics</a>
              </li>
            </ul>
          </nav>
          <img className="cardImageFrontJupiter" src={jupiter1} alt="" />
          <section className="cardSectionJupiter">
            <h2 className="cardTitlesJupiter">JUPITER - THE GIANT PLANET</h2>
            <p className="cardTextJupiter">
              Jupiter is the fifth planet from our Sun and is, by far, the
              largest planet in the solar system, more than twice as massive as
              all the other planets combined.
              <br />
              <br />
              Jupiter's stripes and swirls are actually cold, windy clouds of
              ammonia and water, floating in an atmosphere of hydrogen and
              helium. Jupiter’s iconic Great Red Spot is a giant storm bigger
              than Earth that has raged for hundreds of years. Jupiter is named
              for the king of the ancient Roman gods.​
            </p>

            <h2 className="cardTitlesJupiter">POTENTIAL FOR LIFE</h2>
            <p className="cardTextJupiter">
              Jupiter's conditions are likely inhospitable for life as we
              understand it, given the extreme temperatures, pressures, and
              materials prevalent on the planet, making adaptation for organisms
              challenging.
              <br />
              <br />
              While Jupiter itself is an improbable environment for sustaining
              life, the same cannot be said for some of its numerous moons.
              Europa stands out as one of the most promising locations for
              potential extraterrestrial life within our solar system.
              Substantial evidence suggests the presence of an expansive ocean
              beneath its icy surface, providing a conceivable habitat for life.
            </p>
          </section>
        </div>

        {/* From here starts the Back Card */}
        <div className="card cardBack">
          <h1 className="cardHeaderBackJupiter">Jupiter</h1>
          <nav className="cardNavJupiter">
            <ul className="navUlJupiter">
              <li className="navLiJupiter">
                <a href="#size">Distance from the Sun </a>
              </li>
              <li className="navLiJupiter">
                <a href="#distance">Size</a>
              </li>
              <li className="navLiJupiter">
                <a href="#characteristics">Key Characteristics</a>
              </li>
            </ul>
          </nav>
          <img className="cardImageBackJupiter" src={jupiter2} alt="" />
          <section className="cardSectionJupiter">
            <h2 className="cardTitlesJupiter">FUN FACTS ABOUT JUPITER</h2>
            <p className="cardTextJupiter">
              Giant of the Solar System: Jupiter is the largest planet in our
              solar system. It is more than twice as massive as all the other
              planets combined.
            </p>
            <p className="cardTextJupiter">
              Rapid Rotation: Jupiter has the shortest day of any planet,
              completing one rotation on its axis in just about 10 hours. This
              fast rotation causes the planet to have an oblate shape.
            </p>
            <p className="cardTextJupiter">
              Massive Magnetic Field: Jupiter has a powerful magnetic field,
              approximately 16 to 54 times stronger than Earth's. This magnetic
              field creates intense radiation belts and spectacular auroras.
            </p>
            <p className="cardTextJupiter">
              Great Red Spot: Jupiter's Great Red Spot is a massive storm that
              has been raging for at least 300 years. It is twice the size of
              Earth and is a prominent feature in the planet's atmosphere.
            </p>
            <p className="cardTextJupiter">
              Many Moons: Jupiter has a whopping 95 officially recognized moons.
              The four largest, known as the Galilean moons, are Io, Europa,
              Ganymede, and Callisto.
            </p>
            <p className="cardTextJupiter">
              Rings of Jupiter: Although not as prominent as Saturn's, Jupiter
              also has a ring system. Discovered by the Voyager 1 spacecraft in
              1979, these rings are mainly composed of dust particles.
            </p>
            <p className="cardTextJupiter">
              Jovian Atmosphere: Jupiter's atmosphere is composed mostly of
              hydrogen and helium. It displays distinct cloud bands, zones, and
              belts, creating a colorful and dynamic appearance.
            </p>
            <p className="cardTextJupiter">
              Fast-Moving Storms: Jupiter experiences incredibly fast winds,
              with some reaching speeds of up to 335 miles per hour (539
              kilometers per hour) at the equator. The planet is marked by
              numerous storms and cyclones.
            </p>
            <p className="cardTextJupiter">
              Europa's Ocean: One of Jupiter's moons, Europa, is believed to
              have a subsurface ocean beneath its icy crust. This has led
              scientists to consider Europa as a potential location for
              extraterrestrial life.{' '}
            </p>
            <p className="cardTextJupiter">
              Spacecraft Exploration: Nine spacecraft have visited Jupiter.
              Notable missions include Pioneer 10, Pioneer 11, Voyager 1,
              Voyager 2, Galileo, and the more recent Juno mission, which
              arrived at Jupiter in 2016.{' '}
            </p>

            <h2 className="cardTitlesJupiter">Historical Events</h2>
            <p className="cardTextJupiter">
              Many dramatic changes to the Earth’s climate have occurred over
              the planet’s 4.5-billion-year history. Long periods of stability,
              or equilibrium, are occasionally disrupted by periods of change
              that vary in length and intensity. Climatic shifts are
              destructive, and some even caused mass extinction events that
              wiped out high percentages of species. Despite these extinctions,
              life has always rebounded, allowing new species to dominate the
              landscape.
            </p>
            <p className="cardTextJupiter">
              770 million years ago - Snowball Earth Scientists believe that
              there may have been several times when the entire Earth was frozen
              over with ice. There is no consensus as to what exactly caused
              these frigid events. One theory holds that a number of large
              volcanic eruptions sent sulfur gas particles into the atmosphere
              that reacted with solar radiation to produce a cooling effect.
              Some scientists speculate that snowball conditions facilitated an
              explosion of multicellular organisms.
            </p>

            <h2 className="cardTitlesJupiter">Space Phenomena</h2>
            <p className="cardTextJupiter">
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
export default Jupiter;
