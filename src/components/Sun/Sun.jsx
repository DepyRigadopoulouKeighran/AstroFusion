/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './sun.css';
import sunFront from '../../images/sunFront.gif';
import sunBack from '../../images/sunBack.gif';

const Sun = () => {
  const [showFront, setShowFront] = useState(true);
  const handleSide = () => {
    setShowFront(!showFront);
  };
  return (
    <>
      {/* THIS IS THE FRONT SIDE - ITS ABOUT SUN */}
      <div className={`card-container${showFront ? '' : ' flipped'}`}>
        <div className="card cardFront">
          <h1 onClick={handleSide} className="cardHeaderFrontSun">
            Sun <i className="fa-solid fa-right-long arrow"></i>
          </h1>

          <nav className="cardNavSun">
            <ul className="navUlSun">
              <li className="navLiSun">
                <a href="#distance">
                  Distance from Earth : 150 million kilometers
                </a>
              </li>
            </ul>
          </nav>

          <img className="cardImageFrontSun" src={sunFront} alt="The Sun" />
          <section className="cardSectionSun">
            <h2 className="cardTitlesSun">SUN - OUR CELESTIAL POWERHOUSE</h2>
            <p className="cardTextSun">
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
          </section>
        </div>

        {/* THIS IS THE BACK SIDE - ITS ABOUT THE SUN */}
        <div className="card cardBack">
          <h1 onClick={handleSide} className="cardHeaderBackSun">
            Sun <i class="fa-solid fa-right-long arrow"></i>
          </h1>
          <nav className="cardNavSun">
            <ul className="navUlSun">
              <li className="navLiSun">
                <a href="#distance">
                  Distance from Earth : 150 million kilometers
                </a>
              </li>
            </ul>
          </nav>
          <img className="cardImageBackSun" src={sunBack} alt="The Sun" />

          <section className="cardSectionSun">
            <h2 className="cardTitlesSun">FUN FACTS ABOUT SUN</h2>
            <p className="cardTextSun">
              <span className="spanSun">Energy Source: </span>
              <br /> The Sun's energy stems from the heart of its core, where
              nuclear fusion transmutes hydrogen into helium, liberating a
              prodigious amount of energy in the process.
              <br />
              <br />
              <span className="spanSun">Light Travel Time: </span>
              <br /> Sunlight embarks on an extraordinary journey, traversing
              the cosmic abyss at a speed of 186,282 miles per second. It takes
              a mere 8 minutes and 20 seconds for this radiant emissary to reach
              Earth.
              <br />
              <br />
              <span className="spanSun"> Solar Flares: </span>
              <br />
              The Sun, in its dynamic splendor, experiences sporadic bursts of
              energy known as solar flares. These eruptions can emit intense
              radiation and influence space weather.
              <br />
              <br />
              <span className="spanSun">Sunspots: </span>
              <br /> Mysterious dark patches, sunspots mark areas of heightened
              magnetic activity on the Sun's surface. Their cyclical appearance
              follows an intriguing 11-year solar cycle.
            </p>

            <h2 className="cardTitlesSun">HISTORICAL EVENTS</h2>
            <p className="cardTextSun">
              <span className="spanSun">Ancient Sun Worship: </span>
              <br />
              Across millennia, cultures have revered the Sun as a deity,
              attributing divine significance to its life-giving radiance.
              Temples aligned with solar movements stand testament to ancient
              sun worship.
              <br />
              <br />
              <span className="spanSun">Galileo's Sunspot Observations: </span>
              <br />
              In the early 17th century, Galileo Galilei revolutionized our
              understanding of the Sun by scrutinizing sunspots through a
              telescope, challenging prevailing notions of celestial perfection.
              <br />
              <br />
              <span className="spanSun"> Solar Eclipses in History: </span>
              <br /> Solar Eclipses in History: Solar eclipses, captivating and
              awe-inspiring, have left an indelible mark on human history.
              Ancient astronomers recorded these celestial ballets, contributing
              to our evolving comprehension of the cosmos.
            </p>

            <h2 className="cardTitlesSun">SPACE PHENOMENA</h2>
            <p className="cardTextSun">
              <span className="spanSun">Solar Wind: </span>
              <br /> Solar Wind: A ceaseless stream of charged particles, the
              solar wind emanates from the Sun, sculpting the heliosphere and
              influencing the magnetospheres of neighboring celestial bodies.
              <br />
              <span className="spanSun">Coronal Mass Ejections (CMEs): </span>
              <br /> Explosive releases of solar material, CMEs surge forth from
              the Sun's corona, occasionally interacting with Earth's
              magnetosphere and contributing to geomagnetic storms.
              <br />
              <br />
              <span className="spanSun">Solar Prominences: </span>
              <br /> Majestic arcs of solar material, solar prominences
              gracefully extend from the Sun's surface into the corona, offering
              captivating displays often visible during total solar eclipses.
              <br />
              <br />
              In essence, the Sun transcends its astronomical role, standing as
              an enduring symbol of cosmic grandeur, a radiant source of life,
              and a captivating celestial entity that continues to inspire
              exploration and understanding in the realms of science and human
              curiosity.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export default Sun;
