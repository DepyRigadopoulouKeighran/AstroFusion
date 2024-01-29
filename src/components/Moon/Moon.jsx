import { useState } from 'react';
import './moon.css';
import solarSystem4 from '../../images/solarSystem4.gif';

import moon from '../../images/moonPhases.gif';


const Moon = () => {
  const [showFront, setShowFront] = useState(true);
  const handleSide = () => {
    setShowFront(!showFront);
  };
  return (
    <>
      {/* THIS IS THE FRONT SIDE - ITS ABOUT MOON */}
      <div className={`card-container${showFront ? '' : ' flipped'}`}>
        <div className="card cardFront">
          <h1 className="cardHeaderFrontMoon">
            Moon <i className="fa-solid fa-right-long arrow"></i>
          </h1>

          <nav className="cardNavMoon">
            <ul className="navUlMoon">
              <li className="navLiMoon">
                <a href="#size">Distance from Earth</a>
              </li>
            </ul>
          </nav>

          <img className="cardImageFrontMoon" src={moon} alt="The Moon" />
          <section className="cardSectionMoon">
            <h2 className="cardTitlesMoon">OUR SOLAR SYSTEM</h2>
            <p className="cardTextMoon">
              Our solar system is a captivating and intricate cosmic
              neighborhood, consisting of the Sun, planets, moons, asteroids,
              comets, and other celestial bodies. It formed approximately 4.6
              billion years ago from a giant molecular cloud, and its diverse
              components showcase the dynamic processes at play in the cosmos.
              <br />
              <br />
              Earth's landscapes are a testament to its geological history, with
              majestic mountains, sprawling plains, and vast oceans that cover
              about 71% of its surface. The planet's atmosphere, primarily
              composed of nitrogen and oxygen, sustains life as we know it,
              providing the necessary elements for a complex web of ecosystems.
              <br />
              <br />
              The size of our solar system is often measured in terms of its
              outermost boundary, which is known as the heliopause. The
              heliopause is the region where the Sun's influence diminishes, and
              the interstellar medium begins. The exact location of the
              heliopause is not precisely known, but it is estimated to be about
              120 astronomical units (AU) from the Sun. One astronomical unit
              (AU) is the average distance between the Earth and the Sun, which
              is approximately 93 million miles (150 million kilometers).
              <br />
              So, the estimated size of our solar system, as defined by the
              heliopause, is roughly 120 AU or about 11 billion miles (18
              billion kilometers) from the Sun. Beyond the heliopause, the solar
              wind from the Sun gives way to the influence of the interstellar
              medium.
            </p>
          </section>
        </div>

        {/* THIS IS THE BACK SIDE - ITS ABOUT MOON */}

        <div className="card cardBack">
          <h1 onClick={handleSide} className="cardHeaderBackMoon">
            Moon <i className="fa-solid fa-rigsht-long arrow"></i>{' '}
          </h1>
          <nav className="cardNavMoon">
            <ul className="navUlMoon">
              <li className="navLiMoon">
                <a href="#size">Size</a>
              </li>
              <li className="navLiMoon">
                <a href="#distance">Distance from the Sun</a>
              </li>
              <li className="navLiMoon">
                <a href="#characteristics">Key Characteristics</a>
              </li>
            </ul>
          </nav>
          <img className="cardImageBackMoon" src={moon} alt="The Moon" />

          <section className="cardSectionMoon">
            <h2 className="cardTitlesMoon">FUN FACTS ABOUT THE SOLAR SYSTEM</h2>
            <p className="cardTextMoon">
              <span className="spanMoon">Blue Planet: </span>
              <br /> Earth is often referred to as the "Blue Planet" due to the
              high percentage of water on its surface, giving it a distinct blue
              appearance from space.
              <br />
              <br />
              <span className="spanMoon">Only Known Habitable Planet: </span>
              <br /> As of our current understanding, Earth is the only planet
              in our solar system known to support life. Its conditions are
              ideal for a diverse range of organisms.
              <br />
              <br />
              <span className="spanMoon">Unique Moon:</span>
              <br /> Earth's moon, Luna, is relatively large compared to the
              planet it orbits. The Moon's gravitational influence plays a
              crucial role in stabilizing Earth's axial tilt and impacting
              tides.
              <br />
              <br />
              <span className="spanMoon">70% Water: </span>
              <br /> Approximately 70% of Earth's surface is covered by oceans.
              The remaining 30% consists of continents, islands, and other
              landforms.
            </p>

            <h2 className="cardTitlesMoon">HISTORICAL EVENTS</h2>
            <p className="cardTextMoon">
              Creating a brief summary of Earth's historical events poses a
              challenge due to the extensive timespan and the multitude of
              impactful incidents. Nonetheless, here are several noteworthy
              events that have shaped Earth's geological and biological history:
              <br />
              <br />
              <span className="spanMoon">
                Formation of Earth (4.5 billion years ago):{' '}
              </span>
              <br />
              Earth formed from the dust and gas surrounding the young Sun,
              coalescing into a molten mass that eventually cooled to become our
              planet.
              <br />
              <br />
              <span className="spanMoon">
                Origin of Life (3.5 to 4 billion years ago):{' '}
              </span>
              <br /> Life is believed to have originated in the form of simple,
              single-celled organisms in Earth's early oceans.
            </p>

            <img
              className="cardImageFrontMoon"
              src={solarSystem4}
              alt="Solar System"
            />

            <h2 className="cardTitlesMoon">SPACE PHENOMENA</h2>
            <p className="cardTextMoon">
              While Earth may not boast the same giant storms and gas
              compositions as Jupiter, it exhibits its own mesmerizing space
              phenomena. From celestial displays to magnetic wonders, Earth
              showcases a unique cosmic dance in its corner of the solar system.
              <br />
              <br />
              <span className="spanMoon">Auroras :</span>
              <br />
              Earth's polar regions come alive with vibrant displays of auroras,
              also known as the Northern and Southern Lights. These breathtaking
              light shows result from charged particles from the Sun interacting
              with the Earth's magnetic field and atmosphere, creating colorful
              displays that dance across the night sky.
              <br />
              <br />
              <span className="spanMoon">
                Magnetic field and Van Allen Belts :
              </span>
              <br />
              Earth's magnetic field plays a crucial role in protecting the
              planet from harmful solar radiation. The Van Allen radiation
              belts, named after scientist James Van Allen, are regions within
              this magnetic field that trap charged particles. They contribute
              to Earth's space weather and impact technologies in space.
              <br />
              <span className="spanMoon">Meteor showers</span>
              <br /> Earth encounters debris from comets and asteroids in its
              orbit, leading to spectacular meteor showers. As these fragments
              burn up upon entering the Earth's atmosphere, they create streaks
              of light, captivating observers during celestial events like the
              Perseids and Geminids.
              <br />
              <br />
              <span className="spanMoon">Magnetosphere interactions</span>
              Earth's magnetosphere interacts dynamically with solar winds,
              creating dynamic and ever-changing phenomena. The magnetosphere
              protects the planet from the solar wind, forming a boundary that
              shields against the charged particles constantly emitted by the
              Sun.
              <br />
              While Earth may not have the colossal storms and vast gas expanses
              seen on other planets, its own set of space phenomena adds to the
              celestial tapestry, making it a fascinating subject for
              exploration and observation.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export default Moon;
