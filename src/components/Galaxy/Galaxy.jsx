/* eslint-disable react/no-unescaped-entities */
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

import { useState } from 'react';
import './galaxy.css';
import universe from '../../images/Galaxies/universe.gif';
import galaxy1 from '../../images/Galaxies/ourGalaxy2.gif';
import galaxy2 from '../../images/Galaxies/milkyWrap.gif';


import matter from '../../images/Galaxies/matter.gif';
import darkMatter from '../../images/Galaxies/darkMatter1.gif';
import darkEnergy1 from '../../images/Galaxies/darkEnergy1.gif';
import energy from '../../images/Galaxies/energy.gif';
import space from '../../images/Galaxies/space.gif';
import time from '../../images/Galaxies/time.gif';
import time2 from '../../images/Galaxies/time2.gif';
import gravitationalWaves from '../../images/Galaxies/gravitationalWaves.gif';
import cosmicMicrowaveBackground from '../../images/Galaxies/cosmicMicrowaveBackground.gif';
import pulsars from '../../images/Galaxies/pulsars.gif';
import kilonova from '../../images/Galaxies/kilonova.gif';
import galaxiesFormation from '../../images/Galaxies/galaxiesFormation.gif';
import formationSolarSystem from '../../images/Galaxies/formationSolarSystem.gif';

import { NavLink } from 'react-router-dom';


const Galaxy = () => {
  const [showFront, setShowFront] = useState(true);
  const handleSide = () => {
    setShowFront(!showFront);
  };

  return (
    <>
      {/* The front side is about the UNIVERSE */}
      <div className={`card-container${showFront ? '' : ' flipped'}`}>
        <div className="card cardFront">
          <h1 onClick={handleSide} className="cardHeaderFrontGalaxy">
            The Universe
          </h1>

          <nav className="cardNavGalaxy">
            <ul className="navUlGalaxy">

              <li className="navLiGalaxy">
                <NavLink to="/solarsystem">Solar System</NavLink>
              </li>
              <li className="navLiGalaxy">
                <NavLink to="/othergalaxies">Other Galaxies</NavLink>
              </li>
              <li className="navLiGalaxy">
                <NavLink to="/blackhole">BlackHole / Supernova</NavLink>
              </li>

            </ul>

          <nav className="cardNavGalaxy navbar navbar-expand-lg">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <li className="nav-item">
                  <NavLink to="/solarsystem" className="nav-link">
                    Solar System
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/othergalaxies" className="nav-link">
                    Other Galaxies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blackhole" className="nav-link">
                    BlackHole / Supernova
                  </NavLink>
                </li>
              </Dropdown.Menu>
            </Dropdown>

          </nav>
          <img

            className="cardImageFrontGalaxy"
            src={universe}

            alt="Planet Earth"
          />
          <section className="cardSectionBackGalaxy">
            <h2 className="cardTitlesBackGalaxy">THE UNIVERSE</h2>
            <p className="cardTextBackGalaxy">
              The universe is all of space, time, matter, and energy that
              exists. It encompasses everything, from the smallest subatomic
              particles to the largest galaxies and beyond. The universe is
              constantly expanding, and its current age is estimated to be
              around 13.8 billion years based on observations of the cosmic
              microwave background radiation.
              <br />
              <br />
              The observable universe is a vast expanse that we can detect and
              study using various astronomical observations and measurements. It
              contains galaxies, stars, planets, dark matter, and other cosmic
              structures. The universe operates according to physical laws and
              principles, and its study falls under the field of cosmology,
              which seeks to understand the origin, evolution, and eventual fate
              of the universe. The vastness and complexity of the universe make
              it a fascinating subject of scientific inquiry and exploration.
            </p>
          </section>


        {/* From here starts the Back Card */}
        <div className="card cardBack">
          <h1 onClick={handleSide} className="cardHeaderBackGalaxy">
            Galaxy
          </h1>

          <nav className="cardNavGalaxy  navbar navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavFront"
              aria-controls="navbarNavBack"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavFront">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/solarsystem" className="nav-link">
                    Solar System
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/othergalaxies" className="nav-link">
                    Other Galaxies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blackhole" className="nav-link">
                    BlackHole / Supernova
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <img className="cardImageBackGalaxy img-fluid" src={galaxy2} alt="" />

          <section className="cardSectionBackGalaxy">
            <h2 className="cardTitlesBackGalaxy">FUN FACTS ABOUT UNIVERSE</h2>
            <p className="cardTextBackGalaxy">
              <span className="spanGalaxy">Expanding Universe: </span>
              <br /> The universe is expanding, meaning that galaxies are moving
              away from each other over time. This discovery, based on
              observations of distant galaxies, earned the Nobel Prize in
              Physics in 2011.
              <br />
              <br />
              <span className="spanGalaxy">Dark Energy Dominance: </span>
              <br /> Approximately 68% of the universe is made up of dark
              energy, a mysterious force causing the accelerated expansion of
              the universe. Dark matter constitutes about 27%, while the rest is
              ordinary matter.
              <br />
              <br />
              <span className="spanGalaxy">Infinite or Finite?: </span>
              <br />
              The shape and ultimate fate of the universe are still unknown.
              Depending on factors such as dark energy and the overall mass
              density, the universe could be infinite or have a finite size.
              <br />
              <br />
              <span className="spanGalaxy">
                Most of the Universe is Empty:{' '}
              </span>
              <br /> Despite the presence of galaxies, stars, and planets, most
              of the universe is empty space. Even within galaxies, the space
              between stars is vast.
              <br />
              <br />
              <span className="spanGalaxy">Hubble's Law: </span>
              <br /> The farther a galaxy is from us, the faster it is moving
              away. This relationship is described by Hubble's Law, named after
              the astronomer Edwin Hubble, who made significant contributions to
              our understanding of the expanding universe.
              <br />
              <br />
              <span className="spanGalaxy">Age of the Universe: </span>
              <br /> The estimated age of the universe is approximately 13.8
              billion years. This age is determined by studying the oldest
              objects in the cosmos and measuring the rate of expansion.
            </p>
          </section>

          <img className="cardImageBackGalaxy" src={matter} alt="" />

          <section className="cardSectionBackGalaxy">
            <h2 className="cardTitlesBackGalaxy">
              PRIMARY CONSTITUENTS OF THE UNIVERSE
            </h2>
            <p className="cardTextBackUniverse">
              <span className="spanGalaxy">Matter: </span>
              <br /> The universe is expanding, meaning that galaxies are moving
              away from each other over time. This discovery, based on
              observations of distant galaxies, earned the Nobel Prize in
              Physics in 2011.
              <br />
              <br />
              <span className="spanGalaxy">Dark Matter: </span>
              <br /> Although it cannot be directly observed, dark matter is
              believed to make up a significant portion of the total mass in the
              universe. It does not emit, absorb, or reflect light, making it
              invisible to electromagnetic radiation. Its presence is inferred
              from its gravitational effects on visible matter.
            </p>
          </section>
          <img className="cardImageBackGalaxy" src={darkMatter} alt="" />

          <img className="cardImageBackGalaxy" src={energy} alt="" />

          <section className="cardSectionBackGalaxy">
            <p className="cardTextBackUniverse">
              <span className="spanGalaxy">Energy: </span>
              <br /> Energy is the fundamental ability to make things happen or
              cause change. In the universe, energy comes in various forms, such
              as light, heat, and motion. It powers stars, fuels cosmic
              processes, and is a key player in shaping the dynamic events that
              unfold across the vast expanse of space and time.
              <br />
              <br />
              <span className="spanGalaxy">Dark Energy: </span>
              <br /> Dark energy is a mysterious form of energy that is thought
              to be responsible for the accelerated expansion of the universe.
              Unlike dark matter, dark energy does not cluster around galaxies
              or other structures but is instead believed to permeate space
              uniformly.
            </p>
          </section>
          <img className="cardImageBackGalaxy" src={darkEnergy1} alt="" />

          <img className="cardImageBackGalaxy" src={space} alt="" />

          <section className="cardSectionBackGalaxy">
            <p className="cardTextBackUniverse">
              <span className="spanGalaxy">Space: </span>
              <br /> The fabric of space itself is a fundamental component of
              the universe. It is not empty but rather filled with a dynamic
              structure that can be affected by the presence of mass and energy.
              The expansion of space is a key feature of the evolving universe.
              <br />
              <br />
              <span className="spanGalaxy">Time: </span>
              <br /> Time is a dimension that allows events to occur in a
              sequential order. It is intimately connected with space to form
              the spacetime continuum. The concept of spacetime is a fundamental
              aspect of Einstein's theory of general relativity.
            </p>
          </section>
          <img className="cardImageBackGalaxy" src={time} alt="" />
          <img className="cardImageBackGalaxy" src={time2} alt="" />

          <img
            className="cardImageBackGalaxy"
            src={gravitationalWaves}
            alt=""
          />

          <section className="cardSectionBackGalaxy">
            <p className="cardTextBackUniverse">
              <span className="spanGalaxy">Gravitational Waves: </span>
              <br /> In 2015, scientists detected gravitational waves for the
              first time, ripples in spacetime caused by the collision of two
              black holes. This discovery confirmed a prediction made by Albert
              Einstein a century earlier.
              <br />
              <br />
              <span className="spanGalaxy">Cosmic Microwave Background: </span>
              <br /> The CMB is faint radiation left over from the Big Bang. It
              provides a snapshot of the early universe's conditions, and its
              discovery earned Arno Penzias and Robert Wilson the Nobel Prize in
              Physics in 1978.
            </p>
          </section>
          <img
            className="cardImageBackGalaxy"
            src={cosmicMicrowaveBackground}
            alt=""
          />

          <img className="cardImageBackGalaxy" src={pulsars} alt="" />

          <section className="cardSectionBackGalaxy">
            <p className="cardTextBackUniverse">
              <span className="spanGalaxy">Pulsars: </span>
              <br /> Pulsars are highly magnetized, rotating neutron stars that
              emit beams of electromagnetic radiation. They can rotate
              incredibly fast, with some pulsars completing hundreds of
              rotations per second.
              <br />
              <br />
              <span className="spanGalaxy">Gold & Cosmic Event: </span>
              <br /> Heavy elements like gold and platinum are believed to be
              produced during the explosive collisions of neutron stars. These
              cosmic events, known as kilonovae, can send ripples through
              spacetime and create heavy elements.
            </p>
          </section>
          <img className="cardImageBackGalaxy" src={kilonova} alt="" />

          <section className="cardSectionBackGalaxy">
            <h2 className="cardTitlesBackGalaxy">HISTORICAL EVENTS</h2>
            <p className="cardTextBackGalaxy">
              <span className="spanGalaxy">
                The Big Bang (13.8 billion years ago):{' '}
              </span>
              <br /> The universe began with an extremely hot and dense state,
              and it rapidly expanded from this singularity. This event marks
              the beginning of space and time as we know them.
              <br />
              <br />
              <span className="spanGalaxy">
                Formation of the First Stars and Galaxies (around 100 million
                years after the Big Bang):{' '}
              </span>
              <br /> The first stars and galaxies formed from the primordial
              elements, marking the end of the cosmic dark ages.
              <br />
              <br />
              <span className="spanGalaxy">
                Formation of the Milky Way (around 13.6 billion years after the
                Big Bang):{' '}
              </span>
              <br />
              Our galaxy, the Milky Way, formed as matter in the early universe
              clumped together under the influence of gravity.
              <br />
              <span className="spanGalaxy">
                Formation of the Solar System (about 4.6 billion years ago):
              </span>
              <br /> The Sun and its surrounding planets, including Earth,
              formed from a rotating disk of gas and dust.
              <br />
              <span className="spanGalaxy">
                Life on Earth (around 3.5 billion years ago):{' '}
              </span>
              <br /> The first life forms appeared on Earth, marking the
              beginning of biological evolution.
              <br />
              <br />
              <span className="spanGalaxy">
                Cambrian Explosion (around 541 million years ago):{' '}
              </span>
              <br /> A period of rapid diversification of life, leading to the
              emergence of various complex multicellular organisms.
              <br />
              <br />
              <span className="spanGalaxy">Mass Extinctions:</span>
              <br /> Several mass extinction events occurred throughout Earth's
              history, including the Permian-Triassic extinction (the most
              severe, about 252 million years ago) and the Cretaceous-Paleogene
              extinction (which led to the extinction of dinosaurs, about 66
              million years ago).
              <br />
              <span className="spanGalaxy">
                Evolution of Homo sapiens (around 300,000 years ago):
              </span>
              <br /> Modern humans evolved in Africa and eventually migrated to
              other parts of the world.
              <br />
              <br />
              <span className="spanGalaxy">
                Discovery of Cosmic Microwave Background (1965):
              </span>
              <br /> Arno Penzias and Robert Wilson accidentally discovered the
              cosmic microwave background radiation, providing evidence for the
              Big Bang theory.
              <br />
              <br />
              <span className="spanGalaxy">
                Cambrian Explosion (around 541 million years ago):{' '}
              </span>
              <br /> The Laser Interferometer Gravitational-Wave Observatory
              (LIGO) detected gravitational waves for the first time, confirming
              a prediction of Einstein's general relativity and opening a new
              era of gravitational wave astronomy.
              <br />
              <br />
            </p>
          </section>

          <img className="cardImageBackGalaxy" src={galaxiesFormation} alt="" />
          <img
            className="cardImageBackGalaxy"
            src={formationSolarSystem}
            alt=""
          />
        </div>

        {/* From here starts the Back Card - OUR GALAXY */}
        <div className="card cardBack">
          <h1 onClick={handleSide} className="cardHeaderBackGalaxy">
            Our Galaxy
          </h1>

          <nav className="cardNavGalaxy">
            <ul className="navUlGalaxy">
              <li className="navLiGalaxy ">
                <Link to="/solarsystem">Our Solar System</Link>
              </li>
            </ul>
          </nav>

          <img className="cardImageBackGalaxy" src={galaxy2} alt="" />

          <section className="cardSectionBackGalaxy">
            <h2 className="cardTitlesBackGalaxy">THE MILKY WAY</h2>
            <p className="cardTextBackGalaxy">
              The Milky Way, our celestial home, is a barred spiral galaxy that
              spans an immense cosmic expanse. It is a vast collection of stars,
              planets, gas, dust, and dark matter bound together by gravity,
              creating a stunning tapestry that graces our night sky. Here's an
              introduction, along with some fun facts and historical events
              related to our galaxy:
              <br />
              <br />
              The Milky Way is an immense structure, with a diameter of about
              100,000 light-years and containing an estimated 100 to 400 billion
              stars. At its center lies a supermassive black hole, Sagittarius
              A*, which influences the orbits of stars in its vicinity. The
              galaxy is organized into spiral arms, and our solar system resides
              in one of these arms, known as the Orion Arm.
            </p>
          </section>

          <img className="cardImageBackGalaxy" src={galaxy1} alt="" />

          <section className="cardSectionBackGalaxy">
            <h2 className="cardTitlesBackGalaxy">FUN FACTS ABOUT MILKY WAY</h2>
            <p className="cardTextBackGalaxy">
              <span className="spanGalaxy">Stellar Neighborhood: </span>
              <br /> The Milky Way is home to a diverse array of stars. Some are
              much larger and more luminous than our Sun, while others are
              faint, small, and cool. Our Sun is an average-sized star, situated
              in the outskirts of the galaxy.
              <br />
              <br />
              <span className="spanGalaxy">Dark Matter Dominance: </span>
              <br /> While stars, gas, and dust contribute to the visible mass
              of the Milky Way, a significant portion of its mass is attributed
              to dark matter, a mysterious and invisible substance that
              interacts with gravity but not with light.
              <br />
              <br />
              <span className="spanGalaxy">Galactic Recycling:</span>
              <br /> Elements essential for life, such as carbon, oxygen, and
              nitrogen, are formed in the cores of stars through nuclear fusion.
              When these stars explode in supernovae, they release these
              elements back into space, contributing to the formation of new
              stars and planetary systems.
              <br />
              <br />
              <span className="spanGalaxy">Galactic Cannibalism: </span>
              <br /> The Milky Way has a history of interacting with and
              absorbing smaller satellite galaxies. Evidence of this can be seen
              in streams of stars and debris that stretch across the night sky.
            </p>

            <h2 className="cardTitlesBackGalaxy">HISTORICAL EVENTS</h2>

            <p className="cardTextBackGalaxy">
              <span className="spanGalaxy">
                Discovery of the Milky Way's Spiral Structure (1845):
              </span>
              <br />
              The American astronomer William Parsons (Lord Rosse) made early
              observations that suggested the Milky Way had a spiral structure.
              Subsequent studies and advancements in observational techniques
              confirmed this spiral nature.
              <br />
              <br />
              <span className="spanGalaxy">
                Harlow Shapley's Galactic Center Determination (1917):
              </span>
              <br /> Astronomer Harlow Shapley used the distribution of globular
              clusters to estimate the position of the center of the Milky Way.
              His work was instrumental in understanding the structure and size
              of our galaxy.
              <br />
              <br />
              <span className="spanGalaxy">
                Radio Astronomy and the Galactic Center (1931):
              </span>
              <br /> Karl Jansky's pioneering work in radio astronomy led to the
              discovery of radio waves emanating from the center of the Milky
              Way, providing a new way to study its structure.
              <br />
              <br />
              <span className="spanGalaxy">
                Milky Way's Rotation Curve (1970s):
              </span>
              <br /> Observations of the rotation of the Milky Way's stars,
              particularly by Vera Rubin and others, led to the discovery that
              galaxies don't behave as expected based on visible matter alone.
              This contributed to the understanding of dark matter's presence in
              galaxies, including the Milky Way.
            </p>

            <h2 className="cardTitlesBackGalaxy">SPACE PHENOMENA</h2>
            <p className="cardTextBackGalaxy">
              Our galaxy, the Milky Way, is home to a variety of fascinating
              space phenomena. These phenomena include cosmic events, celestial
              structures, and interactions that contribute to the dynamic nature
              of our galactic neighborhood. Here are some notable space
              phenomena within the Milky Way:
              <br />
              <span className="spanGalaxy">Spiral Arms: </span>
              <br />
              The Milky Way exhibits prominent spiral arms, including the
              Perseus Arm, Sagittarius Arm, and Orion Arm. These arms contain
              regions of increased star density and are shaped by the
              gravitational interactions between stars and molecular clouds.
              <br />
              <br />
              <span className="spanGalaxy">Galactic Center:</span>
              <br />
              At the heart of the Milky Way lies a supermassive black hole named
              Sagittarius A*. This region, known as the galactic center, is
              surrounded by a complex environment of stars, gas, and dust.
              <span className="spanGalaxy">Star Clusters: </span>
              <br /> The Milky Way contains various types of star clusters,
              including open clusters and globular clusters. Open clusters, like
              the Pleiades, are young groups of stars that formed from the same
              molecular cloud. Globular clusters, such as Omega Centauri, are
              dense spherical collections of older stars.
              <br />
              <span className="spanGalaxy">Nebulae: </span>
              <br />
              Nebulae are vast clouds of gas and dust where new stars are born.
              The Orion Nebula is a well-known example of an emission nebula
              associated with ongoing star formation.
              <br />
              <br />
              <span className="spanGalaxy">Supernova Remnants: </span>
              <br />
              Supernova explosions mark the end of massive stars' lives. The
              remnants of these explosions, such as the Crab Nebula, contribute
              to the enrichment of the interstellar medium with heavy elements.
              <br />
              <br />
              <span className="spanGalaxy">H-II Regions: </span>
              H-II regions are areas of ionized hydrogen gas associated with
              young, massive stars. The Eagle Nebula, known for its "Pillars of
              Creation," is an example of an H-II region.
              <br />
              <span className="spanGalaxy"> Molecular Clouds: </span>
              These dense clouds of cold gas and dust serve as the birthplaces
              of stars. They are often observed in regions of active star
              formation, like the Taurus Molecular Cloud.
              <br />
              <span className="spanGalaxy">Interstellar Medium (ISM): </span>
              The ISM consists of gas and dust between stars, playing a crucial
              role in the lifecycle of cosmic material. It includes ionized gas,
              neutral atomic hydrogen, and molecules.
              <br />
              <span className="spanGalaxy">Galactic Halo and Streams: </span>
              The Milky Way's halo contains globular clusters, dark matter, and
              streams of stars, remnants of interactions with smaller satellite
              galaxies over cosmic time.
              <br />
              These space phenomena contribute to the rich tapestry of our
              galaxy, offering insights into its formation, evolution, and
              ongoing dynamics. Observing and studying these phenomena enhance
              our understanding of the intricate processes shaping the Milky Way
              and, by extension, galaxies throughout the universe.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Galaxy;
