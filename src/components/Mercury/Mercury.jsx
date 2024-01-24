import { useState } from 'react';
import './mercury.css';
import mercuryFront from '../../images/MercuryFront.gif';
import mercuryBack from '../../images/MercuryBack.gif';

const Mercury = () => {
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
          <h1 className="cardHeaderFrontMercury">Mercury</h1>
          <nav className="cardNavMercury">
            <ul className="navUlMercury">
              <li className="navLiMercury">
                <a href="#distance">Distance from the Sun</a>
              </li>
              <li className="navLiMercury">
                <a href="#size">Size</a>
              </li>
              <li className="navLiMercury">
                <a href="#characteristics">Key Characteristics</a>
              </li>
            </ul>
          </nav>
          <img
            className="cardImageFrontMercury"
            src={mercuryFront}
            alt="planet Mercury"
          />

          <section className="cardSectionBackMercury">
            <h2 className="cardTitlesBackMercury">
              MERCURY - THE SWIFT MESSENGER OF THE SOLAR SYSTEM
            </h2>
            <p className="cardTextBackMercury">
              Mercury, the smallest and innermost planet, holds a unique allure
              in our solar system. Positioned as the closest planet to the Sun,
              Mercury stands out with its own distinctive features and
              characteristics.
              <br />
              <br />
              The surface of Mercury is a rugged expanse, marked by vast plains,
              impact craters, and towering cliffs. Extreme temperature
              variations are a defining trait, with scorching temperatures
              during the day and frigid coldness at night. Despite its proximity
              to the Sun, some craters near Mercury's poles remain in permanent
              shadow, harboring the possibility of frozen water ice.
              <br />
              <br />
              With minimal atmosphere and no protective magnetic field, Mercury
              faces the unrelenting solar wind, resulting in a harsh space
              environment. The lack of a substantial atmosphere also means that
              Mercury's surface is heavily cratered, bearing the scars of
              countless collisions with celestial bodies.
              <br />
              <br />
              Mercury's dayside temperatures can soar to scorching highs, hot
              enough to melt some metals. Meanwhile, its nightside experiences
              extreme cold due to the absence of a thick atmosphere to retain
              heat. The planet's rotation is peculiar, with a slow rotation
              period and a unique 3:2 spin-orbit resonance.
              <br />
              <br />
              Named after the Roman messenger god, Mercury has inspired
              fascination throughout history. Its fleeting appearances on the
              horizon during dawn and dusk have contributed to its portrayal as
              a swift messenger in mythology. The lack of a substantial
              atmosphere means that Mercury lacks the protective shield that
              contributes to the dynamic atmospheres of larger planets.
              <br />
              <br />
              While Mercury may not resemble Earth in terms of habitability, it
              stands as a testament to the diverse nature of worlds within our
              solar system. As we continue to explore and study this enigmatic
              planet, Mercury beckons scientists to uncover the secrets of its
              origin, evolution, and the broader processes shaping the inner
              realms of our cosmic neighborhood.
            </p>
          </section>
        </div>

        {/* From here starts the Back Card */}
        <div className="card cardBack">
          <h1 className="cardHeaderBackMercury">Mercury</h1>
          <nav className="cardNavMercury">
            <ul className="navUlMercury">
              <li className="navLiMercury">
                <a href="#distance">Distance from the Sun</a>
              </li>
              <li className="navLiMercury">
                <a href="#size">Size</a>
              </li>
              <li className="navLiMercury">
                <a href="#characteristics">Key Characteristics</a>
              </li>
            </ul>
          </nav>
          <img
            className="cardImageBackMercury"
            src={mercuryBack}
            alt="planet Mercury"
          />
          <section className="cardSectionBackMercury">
            <h2 className="cardTitlesBackMercury">FUN FACTS ABOUT MERCURY</h2>
            <p className="cardTextBackMercury">
              <span className="spanMercury">Orbital Oddity: </span>
              <br />
              Mercury boasts a peculiar orbit, characterized by a 3:2 spin-orbit
              resonance. This means it rotates on its axis three times for every
              two orbits around the Sun, creating a unique pattern of day and
              night.
              <br />
              <br />
              <span className="spanMercury">Extreme Temperatures: </span>
              <br /> Mercury experiences extreme temperature fluctuations due to
              its lack of a substantial atmosphere. Daytime temperatures can
              soar to a blistering 800 degrees Fahrenheit (430 degrees Celsius),
              while nighttime temperatures plummet to a chilling -290 degrees
              Fahrenheit (-180 degrees Celsius).
              <br />
              <br />
              <span className="spanMercury">Compact Companion: </span>
              <br /> As the smallest planet in our solar system, Mercury has a
              diameter of only about 4,880 kilometers (3,032 miles), making it
              just slightly larger than Earth's Moon.
              <br />
              <br />
              <span className="spanMercury">Metallic Core: </span>
              <br /> Mercury's core sets it apart. Comprising about 60% of the
              planet's mass, the core is rich in iron and is believed to be
              partially molten. This unique composition contributes to Mercury's
              unusually high density.
              <br />
              <br />
              <span className="spanMercury">Scarred Surface: </span>
              <br /> Mercury's surface is marked by a multitude of impact
              craters, evidence of its exposure to countless collisions with
              asteroids and comets. The largest crater, Caloris Basin, is
              approximately 1,550 kilometers (963 miles) in diameter.
              <br />
              <br />
              <span className="spanMercury">Thin Atmosphere: </span>
              <br /> Mercury has an exospheric atmosphere, an extremely thin
              layer of gases like helium and hydrogen. This lack of a
              substantial atmosphere results in challenges for retaining heat
              and contributes to the stark temperature differences.
              <br />
              <br />
              <span className="spanMercury">Hasty Heliocentric Traveler: </span>
              <br /> With an average orbital speed of about 47.87 kilometers per
              second (29.74 miles per second), Mercury is the fastest planet in
              our solar system. It completes an orbit around the Sun in just
              about 88 Earth days.
              <br />
              <br />
              <span className="spanMercury">Sparse Exploration: </span>
              <br /> Despite its proximity to Earth, Mercury remains relatively
              unexplored. Only two spacecraft, Mariner 10 and MESSENGER, have
              ventured close enough to capture detailed images and data about
              this enigmatic planet.
              <br />
              <br />
              <span className="spanMercury">
                Solar System's Closest Neighbor:{' '}
              </span>
              <br />
              Mercury is the closest planet to the Sun, orbiting at an average
              distance of about 57.9 million kilometers (36 million miles). Its
              proximity exposes it to intense solar radiation.
              <br />
              <br />
              <span className="spanMercury">Mythological Namesake: </span>
              <br /> In Roman mythology, Mercury is named after the swift
              messenger god, known for his speed and agility. The planet's rapid
              movements across the sky contributed to its association with this
              mythological figure.
            </p>

            <h2 className="cardTitlesBackMercury">HISTORICAL EVENTS</h2>

            <p className="cardTextBackMercury">
              <span className="spanMercury">
                Mariner 10's Pioneering Encounter (1974-1975):
              </span>
              <br />
              Mariner 10, NASA's robotic space probe, embarked on a historic
              mission, becoming the first spacecraft to visit Mercury. It
              conducted three flybys, capturing the first close-up images of the
              planet's surface and gathering valuable data on its geological
              features.
              <br />
              <br />
              <span className="spanMercury">
                MESSENGER Mission (2004-2015):{' '}
              </span>
              <br /> MESSENGER (MErcury Surface, Space ENvironment,
              GEochemistry, and Ranging) was a NASA mission dedicated to the
              comprehensive study of Mercury. Launched in 2004, it orbited
              Mercury for over four years, providing detailed insights into the
              planet's composition, magnetic field, and geologic history.
              <br />
              <br />
              <span className="spanMercury">
                BepiColombo Mission (2018–Present):{' '}
              </span>
              <br /> BepiColombo, a joint mission by the European Space Agency
              (ESA) and the Japan Aerospace Exploration Agency (JAXA), aims to
              further our understanding of Mercury. Launched in 2018, it is set
              to arrive at Mercury in the coming years, carrying a suite of
              instruments to explore various aspects of the planet.
              <br />
              <br />
              <span className="spanMercury">Mercury's Unusual Orbit:</span>
              <br />
              Mercury's orbit around the Sun is highly elliptical, and its
              rotation is in a 3:2 resonance with its orbit, meaning it rotates
              three times for every two orbits around the Sun. This unique
              spin-orbit resonance contributes to extreme temperature variations
              on the planet's surface.
              <br />
              <br />
              <span className="spanMercury">
                Caloris Basin - Giant Impact Structure:
              </span>
              <br />
              Caloris Basin, one of Mercury's most prominent features, is a
              large impact basin created by a powerful asteroid strike. This
              basin's formation has influenced the planet's geological
              characteristics and surface features.
              <br />
              <br />
              <span className="spanMercury">MESSENGER's Ice Discoveries:</span>
              Despite Mercury's proximity to the Sun, MESSENGER's observations
              revealed the presence of water ice in permanently shadowed regions
              near the planet's poles. The discovery of volatile elements
              challenges previous assumptions about the conditions on this
              innermost planet.
              <br />
              <span className="spanMercury">Extreme Temperature Extremes:</span>
              <br /> Mercury experiences some of the most significant
              temperature variations in our solar system. Daytime temperatures
              can soar over 800 degrees Fahrenheit (427 degrees Celsius), while
              nighttime temperatures plummet to -290 degrees Fahrenheit (-179
              degrees Celsius).
              <br />
              <br />
              <span className="spanMercury">
                BepiColombo's Ongoing Investigations:
              </span>
              <br /> The BepiColombo mission, currently in progress, continues
              to investigate Mercury's surface, magnetosphere, and exosphere.
              The data collected aims to enhance our understanding of Mercury's
              composition and evolution.
              <br />
              <br />
              <span className="spanMercury">
                Mercury's Elongated Orbit and Tidal Forces:
              </span>
              <br /> Mercury's elongated orbit exposes it to strong tidal forces
              from the Sun, influencing its rotation and contributing to its
              unique spin-orbit resonance. This interaction has implications for
              the planet's geological history.
              <br />
              <br />
              <span className="spanMercury">Shrinking Planet:</span>
              <br /> Observations from Earth-based telescopes and space missions
              suggest that Mercury is gradually contracting due to the cooling
              and solidification of its interior. This phenomenon has led to the
              formation of cliffs and ridges on the planet's surface.
            </p>

            <h2 className="cardTitlesBackMercury">SPACE PHENOMENA</h2>

            <p className="cardTextBackMercury">
              Mercury, the closest planet to the Sun, experiences unique
              phenomena shaped by its proximity to our star and its distinctive
              characteristics.
              <br />
              <br />
              <span className="spanMercury">
                Extreme Temperature Extremes:{' '}
              </span>
              <br />
              Mercury has an extreme temperature range due to its lack of a
              significant atmosphere to retain heat. Daytime temperatures can
              soar to around 800 degrees Fahrenheit (427 degrees Celsius), while
              nighttime temperatures plummet to approximately -290 degrees
              Fahrenheit (-179 degrees Celsius).
              <br />
              <br />
              <span className="spanMercury">
                Rapid Rotation and Slow Orbit:
              </span>
              <br />
              Mercury is known for its peculiar rotation and orbit patterns. It
              rotates on its axis very slowly, taking about 59 Earth days for
              one complete rotation, but it has a relatively fast orbital period
              around the Sun, completing an orbit in approximately 88 Earth
              days.
              <br />
              <span className="spanMercury">Unusual Orbit Resonance: </span>
              <br /> Mercury's orbit exhibits a resonance known as a 3:2
              spin-orbit resonance. This means that for every three orbits
              around the Sun, Mercury rotates on its axis twice. This resonance
              is a result of gravitational interactions with the Sun.
              <br />
              <br />
              <span className="spanMercury">
                Scarce Atmosphere and Magnetosphere:{' '}
              </span>
              <br /> Mercury has a tenuous atmosphere primarily composed of
              oxygen, sodium, and hydrogen. However, it's too thin to support
              weather patterns. Additionally, Mercury possesses a weak global
              magnetic field, a unique feature among rocky planets.
              <br />
              <br />
              <span className="spanMercury">Dynamic Surface Features: </span>
              <br />
              Mercury is surprisingly dense, with a composition consisting of a
              large iron-nickel core. This high density suggests that Mercury's
              interior has undergone significant geological processes, possibly
              involving the cooling and contraction of its core.
              <br />
              <br />
              <span className="spanMercury">
                Elongated Orbit and Eccentricity:{' '}
              </span>
              Olympus Mons is the largest volcano in the solar system, located
              on Mars. It stands about 13.6 miles (22 kilometers) high, making
              it nearly three times the height of Mount Everest.
              <br />
              Observing and understanding these phenomena provide valuable
              insights into the formation and evolution of Mercury, shedding
              light on the complex processes that have shaped this fascinating
              celestial body.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export default Mercury;
