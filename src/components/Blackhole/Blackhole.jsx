/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './blackhole.css';
import blackholeFront from '../../images/Galaxies/blackhole.gif';
import blackholeBack from '../../images/Galaxies/blackhole2.gif';

const Blackhole = () => {
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
          <h1 className="cardHeaderFrontBlackhole">Blackhole</h1>
          <nav className="cardNavBlackhole">
            <ul className="navUlBlackhole">
              <li className="navLiBlackhole">
                <a href="#distance">Distance from Earth : 93 million miles</a>
              </li>

              <li className="navLiBlackhole">
                <a href="#characteristics">Diameter : 1.4 million klm</a>
              </li>
            </ul>
          </nav>
          <img
            className="cardImageFrontBlackhole"
            src={blackholeFront}
            alt="A blackhole"
          />
          <section className="cardSectionBlackhole">
            <h2 className="cardTitlesBlackhole">
              SUN - OUR CELESTIAL POWERHOUSE
            </h2>
            <p className="cardTextBlackhole">
              The Sun, a dazzling sphere of searing brilliance, serves as the
              radiant heart of our solar system. It is not merely a celestial
              luminary but a cosmic powerhouse, orchestrating the dance of
              planets and influencing the very fabric of space. This massive,
              luminous ball of hot, ionized gas, primarily composed of hydrogen
              and helium, is the central force that sustains life on Earth and
              shapes the dynamics of our celestial neighborhood.
              <br />
              <br />
              Sun is actually a star. Specifically, it is classified as a G-type
              main-sequence star, often referred to as a yellow dwarf. The Sun
              belongs to the G2V spectral class, indicating its temperature,
              color, and certain characteristics.
              <br />
              <br />
              With a diameter of about 1.4 million kilometers (870,000 miles),
              the Sun dwarfs our planet. Its immense mass, approximately 333,000
              times that of Earth, ensures a gravitational hold that keeps the
              planets in their orderly orbits.
              <br />
              <br />
              The Sun's brilliance emanates from its core, where nuclear fusion
              reactions convert hydrogen into helium, releasing a torrent of
              energy in the form of light and heat. This energy production, a
              delicate balance between gravitational forces and nuclear
              reactions, has persisted for billions of years.
              <br />
              <br />
              The Sun is stratified into various layers, including the core,
              radiative zone, convective zone, photosphere, chromosphere, and
              corona. Each layer plays a distinct role in the Sun's dynamic
              behavior. Composed mostly of plasma, the Sun's constituents reveal
              the intricate dance of particles and magnetic fields.
            </p>

            <h2 className="cardTitlesBlackhole">POTENTIAL FOR LIFE</h2>
            <p className="cardTextBlackhole">
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
          <h1 className="cardHeaderBackBlackhole">Supernova</h1>
          <nav className="cardNavBlackhole">
            <ul className="navUlBlackhole">
              <li className="navLiBlackhole">
                <a href="#size">Distance from the Earth </a>
              </li>
              <li className="navLiBlackhole">
                <a href="#distance">Size</a>
              </li>
              <li className="navLiBlackhole">
                <a href="#characteristics">Key Characteristics</a>
              </li>
            </ul>
          </nav>
          <img
            className="cardImageBackBlackhole"
            src={blackholeBack}
            alt="A blackhole"
          />
          <section className="cardSectionBlackhole">
            <h2 className="cardTitlesBlackhole">FUN FACTS ABOUT JUPITER</h2>
            <p className="cardTextBlackhole">
              <span className="spanBlackhole">Giant of the Solar System:</span>
              <br /> Jupiter is the largest planet in our solar system. It is
              more than twice as massive as all the other planets combined.
              <br />
              <br />
              <span className="spanBlackhole">Rapid Rotation:</span>
              <br /> Jupiter has the shortest day of any planet, completing one
              rotation on its axis in just about 10 hours. This fast rotation
              causes the planet to have an oblate shape.
              <br />
              <br />
              <span className="spanBlackhole">Massive Magnetic Field: </span>
              <br /> Jupiter has a powerful magnetic field, approximately 16 to
              54 times stronger than Earth's. This magnetic field creates
              intense radiation belts and spectacular auroras.
              <br />
              <br />
              <span className="spanBlackhole">Great Red Spot:</span>
              <br /> Jupiter's Great Red Spot is a massive storm that has been
              raging for at least 300 years. It is twice the size of Earth and
              is a prominent feature in the planet's atmosphere.
              <br />
              <br />
              <span className="spanBlackhole">Many Moons:</span>
              <br /> Jupiter has a whopping 95 officially recognized moons. The
              four largest, known as the Galilean moons, are Io, Europa,
              Ganymede, and Callisto.
              <br />
              <br />
              <span className="spanBlackhole">Rings of Jupiter:</span>
              <br /> Although not as prominent as Saturn's, Jupiter also has a
              ring system. Discovered by the Voyager 1 spacecraft in 1979, these
              rings are mainly composed of dust particles.
              <br />
              <br />
              <span className="spanBlackhole">Jovian Atmosphere: </span>
              <br /> Jupiter's atmosphere is composed mostly of hydrogen and
              helium. It displays distinct cloud bands, zones, and belts,
              creating a colorful and dynamic appearance.
              <br />
              <br />
              <span className="spanBlackhole">Fast-Moving Storms: </span>
              <br /> Jupiter experiences incredibly fast winds, with some
              reaching speeds of up to 335 miles per hour (539 kilometers per
              hour) at the equator. The planet is marked by numerous storms and
              cyclones.
              <br />
              <br />
              <span className="spanBlackhole">Europa's Ocean: </span>
              <br /> One of Jupiter's moons, Europa, is believed to have a
              subsurface ocean beneath its icy crust. This has led scientists to
              consider Europa as a potential location for extraterrestrial life.
              <br />
              <br />
              <span className="spanBlackhole">Spacecraft Exploration:</span>
              <br /> Nine spacecraft have visited Jupiter. Notable missions
              include Pioneer 10, Pioneer 11, Voyager 1, Voyager 2, Galileo, and
              the more recent Juno mission, which arrived at Jupiter in 2016.{' '}
            </p>

            <h2 className="cardTitlesBlackhole">HISTORICAL EVENTS</h2>
            <p className="cardTextBlackhole">
              Jupiter, being a giant gas planet, doesn't have historical events
              in the same way that Earth does. However, there are significant
              historical events related to the exploration and observation of
              Jupiter by humans. Here are some key historical events related to
              Jupiter:
              <br />
              <br />
              <span className="spanBlackhole">
                Galileo's Discovery (1610):{' '}
              </span>
              <br /> Italian astronomer Galileo Galilei observed Jupiter through
              a telescope and discovered its four largest moons – Io, Europa,
              Ganymede, and Callisto. This discovery was crucial in supporting
              the heliocentric model of the solar system.
              <br />
              <br />
              <span className="spanBlackhole">
                Pioneer 10 and 11 (1972, 1973):
              </span>
              <br /> NASA's Pioneer 10 and Pioneer 11 spacecraft provided the
              first close-up images of Jupiter. Pioneer 10 conducted a flyby in
              December 1973, followed by Pioneer 11 in December 1974.
              <br />
              <br />
              <span className="spanBlackhole">Voyager Missions (1979): </span>
              <br /> Voyager 1 and Voyager 2 conducted extensive studies of
              Jupiter in 1979. They revealed details about Jupiter's atmosphere,
              magnetosphere, and its diverse moons. The missions provided
              valuable data about the planet's structure and composition.
              <br />
              <br />
              <span className="spanBlackhole">
                Galileo Mission (1989 - 2003):{' '}
              </span>
              <br /> NASA's Galileo spacecraft, named after the astronomer
              Galileo Galilei, orbited Jupiter for eight years, from 1995 to
              2003. It conducted detailed studies of Jupiter's atmosphere,
              magnetic field, and moons, providing extensive data.
              <br />
              <br />
              <span className="spanBlackhole">
                Hubble Space Telescope Observations (ongoing):
              </span>
              <br /> The Hubble Space Telescope has provided continuous
              observations of Jupiter, capturing high-resolution images and
              monitoring changes in its atmosphere. These observations
              contribute to our understanding of Jupiter's dynamic features.
              <br />
              <br />
              <span className="spanBlackhole">
                Juno Mission (2016 - present):
              </span>
              <br /> Launched in 2011, NASA's Juno spacecraft arrived at Jupiter
              in 2016. Juno is on a polar orbit, studying Jupiter's composition,
              gravity field, magnetic field, and polar magnetosphere. The
              mission aims to understand the planet's origin and evolution.
            </p>

            <h2 className="cardTitlesBlackhole">SPACE PHENOMENA</h2>
            <p className="cardTextBlackhole">
              While Jupiter itself is not a space phenomenon, it is involved in
              various space phenomena and exhibits fascinating celestial events.
              Here are some space phenomena related to Jupiter:
              <br />
              <br />
              <span className="spanBlackhole">Jovian Auroras: </span>
              <br /> Jupiter's powerful magnetic field interacts with charged
              particles in its magnetosphere, creating intense auroras near its
              polar regions. These auroras are similar to Earth's northern and
              southern lights.
              <br />
              <br />
              <span className="spanBlackhole">Jupiter's Great Red Spot:</span>
              <br /> The Great Red Spot is a massive storm on Jupiter that has
              been observed for centuries. It is an atmospheric phenomenon, a
              giant anticyclonic storm, and it is one of the most prominent
              features in Jupiter's atmosphere.
              <br />
              <br />
              <span className="spanBlackhole">Jovian Magnetosphere: </span>
              <br /> Jupiter's magnetic field is exceptionally strong, ranging
              from 16 to 54 times stronger than Earth's. The magnetosphere
              extends far into space and plays a crucial role in trapping
              charged particles, creating radiation belts and contributing to
              auroras.
              <br />
              <br />
              <span className="spanBlackhole">Galilean Moons:</span>
              <br /> The four largest moons of Jupiter, known as the Galilean
              moons (Io, Europa, Ganymede, and Callisto), exhibit phenomena such
              as volcanic activity, subsurface oceans, and unique surface
              features. These moons are a significant focus of scientific study.
              <br />
              <br />
              <span className="spanBlackhole">Jovian Rings:</span>
              <br /> Jupiter has a faint ring system, discovered by the Voyager
              1 spacecraft in 1979. Although not as prominent as Saturn's rings,
              Jupiter's rings are composed of small particles and are part of
              the complex interactions in the Jovian system.
              <br />
              <br />
              <span className="spanBlackhole">Polar Cyclones:</span>
              <br /> Juno spacecraft observations have revealed polygonal
              arrangements of giant cyclonic storms at both of Jupiter's poles.
              These polar cyclones provide insights into the planet's
              atmospheric dynamics.
              <br />
              <br />
              <span className="spanBlackhole">Fast-Moving Storms: </span>
              <br /> Jupiter experiences incredibly fast winds, with some
              reaching speeds of up to 335 miles per hour (539 kilometers per
              hour) at the equator. The planet is marked by numerous storms and
              cyclones, creating a dynamic and ever-changing atmosphere.
              <br />
              <br />
              <span className="spanBlackhole">Jovian Cloud Bands:</span>
              <br /> Jupiter's atmosphere displays distinct cloud bands, zones,
              and belts, creating a colorful and dynamic appearance. These cloud
              formations are a result of Jupiter's fast rotation and complex
              atmospheric dynamics.
              <br />
              <br />
              <span className="spanBlackhole">Io's Volcanic Activity:</span>
              <br /> Jupiter's moon Io is the most volcanically active body in
              the solar system. The interaction between Jupiter's intense
              gravitational forces and Io's orbit leads to constant volcanic
              eruptions on its surface.
              <br />
              <br />
              <span className="spanBlackhole">Juno's Gravity Science:</span>
              <br /> The Juno spacecraft, in addition to studying Jupiter's
              atmosphere, is mapping its gravity field. This helps scientists
              understand the distribution of mass within the planet, providing
              insights into its internal structure.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export default Blackhole;
