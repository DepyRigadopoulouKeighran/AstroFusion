import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../../components/SolarSystem/solarSystem.css';
import solarSystem1 from '../../images/solarSystem2.gif';
import solarSystem2 from '../../images/solarSystem1.gif';
import solarSystem3 from '../../images/solarSystem3.gif';
import solarSystem4 from '../../images/solarSystem4.gif';

const SolarSystem = () => {
  const [showFront, setShowFront] = useState(true);
  const handleSide = () => {
    setShowFront(!showFront);
  };
  return (
    <>
      {/* THIS IS THE FRONT SIDE - ITS ABOUT OUR SOLAR SYSTEM */}
      <div className={`card-container${showFront ? '' : ' flipped'}`}>
        <div className="card cardFront">
          <h1 onClick={handleSide} className="cardHeaderSolar">
            Our Solar System <i className="fa-solid fa-right-long arrow"></i>
          </h1>

          <nav className="cardNavSolar">
            <ul className="navUlSolar">
              <li className="navLiSolar">
                <NavLink className="distance" to="/sun">
                  Sun
                </NavLink>
              </li>

              <li className="navLiSolar">
                <NavLink className="characteristics" to="/particles">
                  Particles
                </NavLink>
              </li>
              <li className="navLiSolar">
                <NavLink className="characteristics" to="/moon">
                  Moon
                </NavLink>
              </li>
            </ul>
          </nav>

          <img
            className="cardImageFrontSolar"
            src={solarSystem1}
            alt="Solar System"
          />

          <section className="cardSectionSolar">
            <h2 className="cardTitlesSolar">OUR SOLAR SYSTEM</h2>
            <p className="cardTextSolar">
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
              <br />
              <br />
              It's important to note that while this is the outer boundary of
              our solar system, the gravitational influence of the Sun extends
              much farther. The Oort Cloud, a hypothetical region of icy bodies,
              is thought to be the source of long-period comets and is believed
              to extend to distances of about 50,000 AU or more from the Sun.
              However, the Oort Cloud's existence and precise boundaries remain
              speculative, as it has not been directly observed.
              <br />
              <br />
              As we look at Earth from space, the swirling clouds and patterns
              of its atmosphere remind us of the delicate interconnectedness of
              life on this pale blue dot, a home to billions of organisms,
              including the remarkably adaptable human species.
            </p>
          </section>
          <img className="cardImageFrontSolar" src={solarSystem3} alt="" />
        </div>
      </div>

      {/* THIS IS THE BACK SIDE - ITS ABOUT OUR SOLAR SYSTEM*/}
      <div className={`card-container${showFront ? '' : ' flipped'}`}>
        <div className="card cardBack">
          <h1 onClick={handleSide} className="cardHeaderSolar">
            Our Solar System
            <i class="fa-solid fa-right-long arrow"></i>
          </h1>

          <nav className="cardNavSolar">
            <ul className="navUlSolar">
              <li className="navLiSolar">
                <NavLink className="distance" to="/sun">
                  Sun
                </NavLink>
              </li>
              <li className="navLiSolar">
                <NavLink className="characteristics" to="/particles">
                  Particles
                </NavLink>
              </li>
              <li className="navLiSolar">
                <NavLink className="characteristics" to="/moon">
                  Moon
                </NavLink>
              </li>
            </ul>
          </nav>
          <img className="cardImageBackSolar" src={solarSystem2} alt="" />

          <div>
            <section className="cardSectionSolar">
              <h2 className="cardTitlesSolar">
                FUN FACTS ABOUT THE SOLAR SYSTEM
              </h2>
              <p className="cardTextSolar">
                <span className="spanSolar">Blue Planet: </span>
                <br /> Earth is often referred to as the "Blue Planet" due to
                the high percentage of water on its surface, giving it a
                distinct blue appearance from space.
                <br />
                <br />
                <span className="spanSolar">Only Known Habitable Planet: </span>
                <br /> As of our current understanding, Earth is the only planet
                in our solar system known to support life. Its conditions are
                ideal for a diverse range of organisms.
                <br />
                <br />
                <span className="spanSolar">Unique Moon:</span>
                <br /> Earth's moon, Luna, is relatively large compared to the
                planet it orbits. The Moon's gravitational influence plays a
                crucial role in stabilizing Earth's axial tilt and impacting
                tides.
                <br />
                <br />
                <span className="spanSolar">70% Water: </span>
                <br /> Approximately 70% of Earth's surface is covered by
                oceans. The remaining 30% consists of continents, islands, and
                other landforms.
                <br />
                <br />
                <span className="spanSolar">Oxygen-Rich Atmosphere: </span>
                <br /> Earth's atmosphere is composed of about 78% nitrogen, 21%
                oxygen, and trace amounts of other gases. This oxygen-rich
                atmosphere is crucial for supporting life.
                <br />
                <br />
                <span className="spanSolar">Diverse Ecosystems:</span>
                <br /> Earth boasts a wide variety of ecosystems, from tropical
                rainforests to polar ice caps. This biodiversity allows for a
                rich tapestry of plant and animal life.
                <br />
                <br />
                <span className="spanSolar">Continental Drift: </span>
                <br /> Earth's continents are not fixed; they drift over
                geological time scales. The theory of plate tectonics explains
                the movement of Earth's lithospheric plates.
                <br />
                <br />
                <span className="spanSolar">Highest and Lowest Points: </span>
                <br /> The highest point on Earth is Mount Everest, located in
                the Himalayas, while the lowest point is the Challenger Deep in
                the Mariana Trench, found in the Pacific Ocean.
                <br />
                <br />
                <span className="spanSolar">Rotation and Orbit: </span>
                <br /> Earth rotates on its axis, completing one full rotation
                approximately every 24 hours, leading to day and night. It
                orbits the Sun, completing one orbit roughly every 365.25 days,
                resulting in a year.
                <br />
                <br />
                <span className="spanSolar">Magnetic Field: </span>
                <br /> Earth has a magnetic field that is generated by its
                iron-nickel core. This field protects the planet from the solar
                wind and cosmic rays.
              </p>

              <h2 className="cardTitlesSolar">HISTORICAL EVENTS</h2>

              <p className="cardTextSolar">
                Creating a brief summary of Earth's historical events poses a
                challenge due to the extensive timespan and the multitude of
                impactful incidents. Nonetheless, here are several noteworthy
                events that have shaped Earth's geological and biological
                history:
                <br />
                <br />
                <span className="spanSolar">
                  Formation of Earth (4.5 billion years ago):{' '}
                </span>
                <br />
                Earth formed from the dust and gas surrounding the young Sun,
                coalescing into a molten mass that eventually cooled to become
                our planet.
                <br />
                <br />
                <span className="spanSolar">
                  Origin of Life (3.5 to 4 billion years ago):{' '}
                </span>
                <br /> Life is believed to have originated in the form of
                simple, single-celled organisms in Earth's early oceans.
                <br />
                <br />
                <span className="spanSolar">
                  Oxygenation of the Atmosphere (2.4 to 2 billion years ago):
                </span>
                <br /> Cyanobacteria, through photosynthesis, started releasing
                oxygen into the atmosphere, gradually changing its composition.
                <br />
                <br />
                <span className="spanSolar">
                  Formation of Continents (2.5 billion years ago to present):{' '}
                </span>
                <br /> Over millions of years, tectonic processes led to the
                formation of continents through the collision and separation of
                landmasses.
                <br />
                <br />
                <span className="spanSolar">Mass Extinctions: </span>
                <br />
                Several mass extinctions have occurred throughout Earth's
                history, with notable events such as the Permian-Triassic
                Extinction (around 252 million years ago) and the
                Cretaceous-Paleogene Extinction (around 66 million years ago),
                which led to the demise of dinosaurs.
                <br />
                <br />
                <span className="spanSolar">
                  Development of Multicellular Life (around 1 billion years
                  ago):{' '}
                </span>
                Complex multicellular organisms began to evolve, diversifying
                into various forms over time.
                <br />
                <span className="spanSolar">
                  Cambrian Explosion (541 million years ago):{' '}
                </span>
                <br /> A rapid diversification of life forms occurred during the
                Cambrian period, leading to the emergence of various animal
                phyla.
                <br />
                <br />
                <span className="spanSolar">
                  Ice Ages (multiple occurrences):{' '}
                </span>
                <br /> Earth experienced several ice ages, during which glaciers
                advanced and retreated, shaping the landscape and influencing
                the evolution of species.
                <br />
                <br />
                <span className="spanSolar">
                  Evolution of Humans (2 million years ago to present):{' '}
                </span>
                <br /> Homo sapiens, the modern human species, emerged in Africa
                and gradually spread across the globe, developing complex
                societies and cultures.
                <br />
                <br />
                <span className="spanSolar">
                  Industrial Revolution (18th to 19th centuries):{' '}
                </span>
                <br /> The widespread use of steam engines and other innovations
                marked the Industrial Revolution, transforming human societies
                and leading to significant environmental changes.
                <span className="spanSolar">
                  Space Exploration (20th century to present):
                </span>
                <br /> Humans achieved space travel, with notable events
                including the first human on the Moon in 1969 and the ongoing
                exploration of Mars and other celestial bodies.
                <br />
                <br />
                These events provide a glimpse into Earth's rich and dynamic
                history, shaped by geological, climatic, and biological
                processes over billions of years.
              </p>

              <img
                className="cardImageFrontSolar"
                src={solarSystem4}
                alt="Solar System"
              />

              <h2 className="cardTitlesSolar">SPACE PHENOMENA</h2>

              <p className="cardTextSolar">
                While Earth may not boast the same giant storms and gas
                compositions as Jupiter, it exhibits its own mesmerizing space
                phenomena. From celestial displays to magnetic wonders, Earth
                showcases a unique cosmic dance in its corner of the solar
                system.
                <br />
                <br />
                <span className="spanSolar">Auroras :</span>
                <br />
                Earth's polar regions come alive with vibrant displays of
                auroras, also known as the Northern and Southern Lights. These
                breathtaking light shows result from charged particles from the
                Sun interacting with the Earth's magnetic field and atmosphere,
                creating colorful displays that dance across the night sky.
                <br />
                <br />
                <span className="spanSolar">
                  Magnetic field and Van Allen Belts :
                </span>
                <br />
                Earth's magnetic field plays a crucial role in protecting the
                planet from harmful solar radiation. The Van Allen radiation
                belts, named after scientist James Van Allen, are regions within
                this magnetic field that trap charged particles. They contribute
                to Earth's space weather and impact technologies in space.
                <br />
                <span className="spanSolar">Meteor showers</span>
                <br /> Earth encounters debris from comets and asteroids in its
                orbit, leading to spectacular meteor showers. As these fragments
                burn up upon entering the Earth's atmosphere, they create
                streaks of light, captivating observers during celestial events
                like the Perseids and Geminids.
                <br />
                <br />
                <span className="spanSolar">Eclipses :</span>
                <br /> Earth experiences solar and lunar eclipses, captivating
                skywatchers. A solar eclipse occurs when the Moon passes between
                the Sun and Earth, casting a shadow on the planet. Conversely, a
                lunar eclipse transpires when the Earth comes between the Sun
                and the Moon, resulting in a reddish tint during totality.
                <br />
                <br />
                <span className="spanSolar">Gravity Assist </span>
                <br />
                Earth's gravitational force is harnessed by spacecraft for
                gravity assists. This technique utilizes a planet's gravity to
                alter a spacecraft's speed and trajectory. Earth has played a
                pivotal role in numerous space missions, providing gravity
                assists for spacecraft venturing into the depths of the solar
                system.
                <br />
                <br />
                <span className="spanSolar">Magnetosphere interactions</span>
                Earth's magnetosphere interacts dynamically with solar winds,
                creating dynamic and ever-changing phenomena. The magnetosphere
                protects the planet from the solar wind, forming a boundary that
                shields against the charged particles constantly emitted by the
                Sun.
                <br />
                While Earth may not have the colossal storms and vast gas
                expanses seen on other planets, its own set of space phenomena
                adds to the celestial tapestry, making it a fascinating subject
                for exploration and observation.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolarSystem;
