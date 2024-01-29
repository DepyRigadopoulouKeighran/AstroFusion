import { useState } from 'react';
import './mars.css';
import marsFront from '../../images/marsFront.gif';
import marsBack from '../../images/marsBack.gif';
import { NavLink } from 'react-router-dom';

const Mars = () => {
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
          <h1 className="cardHeaderFrontMars">
            Mars <i className="fa-solid fa-right-long arrow"></i>
          </h1>

          <nav className="cardNavMars">
            <ul className="navUlMars">
              <li className="navLiMars">
                <a href="#distance">Distance from the Sun</a>
              </li>
              <li className="navLiMars">
                <a href="#size">Size</a>
              </li>
              <li className="navLiMars">
                <a href="#characteristics">Key Characteristics</a>
              </li>
            </ul>
          </nav>
          <img
            className="cardImageFrontMars"
            src={marsFront}
            alt="planet Mars"
          />
          <section className="cardSectionBackMars">
            <h2 className="cardTitlesBackMars">MARS - THE RED PLANET</h2>
            <p className="cardTextBackMars">
              Mars, the fourth planet from the Sun, stands as a captivating
              world with its own unique characteristics in our solar system.
              While distinctly different from Earth, Mars has long captured
              human imagination and interest.
              <br />
              <br />
              The Martian landscape is marked by rust-colored deserts, towering
              volcanoes, and a canyon system that dwarfs Earth's Grand Canyon.
              Reddish hues dominate the scenery, earning Mars the moniker "the
              Red Planet." Despite its arid appearance, Mars holds clues to its
              watery past, with evidence of ancient river valleys and polar ice
              caps.
              <br />
              <br />
              Mars boasts a thin atmosphere primarily composed of carbon
              dioxide, with traces of nitrogen and argon. This atmosphere, while
              not conducive to sustaining human life as we know it, plays a role
              in shaping the planet's weather patterns. Dust storms, some of
              which can envelope the entire planet, add an element of dynamic
              turbulence to Mars' climate.
              <br />
              <br />
              Unlike Earth's diverse biosphere, Mars currently shows no signs of
              supporting complex life. However, the planet's surface has been a
              subject of exploration, with missions uncovering intriguing
              features like the Olympus Mons, the largest volcano in the solar
              system, and Valles Marineris, a vast canyon system.
              <br />
              <br />
              Mars derives its name from the Roman god of war, a fitting
              association with its reddish appearance. While smaller than Earth,
              Mars has its own set of mysteries and potential for scientific
              discovery. As we peer at Mars from our vantage point in space, it
              beckons us to unravel the secrets held within its ancient terrain
              and provides a stark yet captivating contrast to our own
              terrestrial home.
            </p>
          </section>
        </div>
        {/* From here starts the Back Card */}
        <div className="card cardBack">
          <h1 className="cardHeaderBackMars">Mars</h1>

          <nav className="cardNavMars">
            <ul className="navUlMars">
              <li className="navLiMars">
                <a href="#distance">Distance from the Sun</a>
              </li>
              <li className="navLiMars">
                <a href="#size">Size</a>
              </li>
              <li className="navLiMars">
                <a href="#characteristics">Key Characteristics</a>
              </li>
            </ul>
          </nav>
          <img className="cardImageBackMars" src={marsBack} alt="" />
          <section className="cardSectionBackMars">
            <h2 className="cardTitlesBackMars">FUN FACTS ABOUT MARS</h2>
            <p className="cardTextBackMars">
              <span className="spanMars">Red Appearance: </span>
              <br /> Mars is often called the "Red Planet" because of its
              reddish appearance. This is due to iron oxide, or rust, on its
              surface.
              <br />
              <br />
              <span className="spanMars">Fourth Planet:</span>
              <br /> Mars is the fourth planet from the Sun in our solar system,
              located between Earth and Jupiter.
              <br />
              <br />
              <span className="spanMars">Two Moons:</span>
              <br /> Mars has two small moons, Phobos and Deimos. They are
              irregularly shaped and are thought to be captured asteroids.
              <br />
              <br />
              <span className="spanMars">Olympus Mons:</span>
              <br /> Mars boasts the tallest volcano in the solar system,
              Olympus Mons. It stands at a height of about 13.6 miles (22
              kilometers) and is roughly three times the height of Mount
              Everest.
              <br />
              <br />
              <span className="spanMars">Valles Marineris: </span>
              <br /> This is one of the largest canyons in the solar system,
              located on Mars. Valles Marineris is about 2,500 miles (4,000
              kilometers) long and, in some places, reaches depths of up to 7
              miles (11 kilometers).
              <br />
              <br />
              <span className="spanMars">Thin Atmosphere: </span>
              <br /> Mars has a thin atmosphere, composed mostly of carbon
              dioxide. It is not thick enough to support human life as we know
              it.
              <br />
              <br />
              <span className="spanMars">Polar Ice Caps: </span>
              <br /> Mars has polar ice caps made of water and dry ice (frozen
              carbon dioxide). These caps grow and recede with the changing
              seasons.
              <br />
              <br />
              <span className="spanMars">Similar Day Length: </span>
              <br /> A day on Mars, known as a "sol," is very close in length to
              a day on Earth, approximately 24.6 hours.
              <br />
              <br />
              <span className="spanMars">Possibility of Liquid Water:</span>
              <br />
              While present-day Mars is dry, evidence suggests that liquid water
              may have existed on its surface in the past. Scientists continue
              to explore the possibility of underground reservoirs.
              <br />
              <br />
              <span className="spanMars">Magnetic Field: </span>
              <br /> Several robotic missions have been sent to explore Mars,
              including rovers like Spirit, Opportunity, Curiosity, and
              Perseverance. These missions have provided valuable data about the
              Martian surface and geology.
            </p>

            <h2 className="cardTitlesBackMars">HISTORICAL EVENTS</h2>

            <p className="cardTextBackMars">
              Providing a detailed historical timeline for Mars is challenging
              due to the limited human exploration of the planet. However,
              notable events in the study and exploration of Mars include:
              <br />
              <br />
              <span className="spanMars">
                Observation by Ancient Civilizations:
              </span>
              <br />
              Mars has been observed since ancient times, with civilizations
              such as the Egyptians, Greeks, and Romans associating it with
              their respective gods of war.
              <br />
              <br />
              <span className="spanMars">Telescopic Observations:</span>
              <br /> The invention of telescopes in the 17th century allowed
              astronomers like Galileo Galilei to make more detailed
              observations of Mars, revealing features like polar ice caps.
              <br />
              <br />
              <span className="spanMars">Mariner Program:</span>
              <br /> In the 1960s, NASA's Mariner program conducted the first
              successful flybys of Mars, providing close-up images and data
              about the planet's surface and atmosphere.
              <br />
              <br />
              <span className="spanMars">Viking Missions:</span>
              <br />
              The Viking 1 and Viking 2 missions in the 1970s marked the first
              successful landings on Mars. These missions conducted experiments
              to search for signs of life and analyzed the planet's soil
              composition.
              <br />
              <br />
              <span className="spanMars">Mars Pathfinder: </span>
              <br />
              In 1997, NASA's Mars Pathfinder mission successfully landed the
              Sojourner rover on Mars, becoming the first rover to explore the
              planet's surface.
              <br />
              <br />
              <span className="spanMars">Global Surveyor:</span>
              Launched in 1996, the Mars Global Surveyor orbiter provided
              detailed mapping of Mars' surface and played a crucial role in
              selecting landing sites for future missions.
              <br />
              <span className="spanMars">Spirit and Opportunity Rovers:</span>
              <br /> Launched in 2003, these twin rovers explored different
              regions of Mars, providing extensive data about the planet's
              geology, soil, and climate.
              <br />
              <br />
              <span className="spanMars">Curiosity Rover:</span>
              <br /> NASA's Curiosity rover, launched in 2011, continues to
              explore Mars, analyzing rocks and soil to assess past
              environmental conditions and the planet's potential for
              habitability.
              <br />
              <br />
              <span className="spanMars">Perseverance Rover:</span>
              <br /> Launched in 2020, Perseverance is the latest rover on Mars,
              focusing on astrobiology, including the search for signs of
              ancient microbial life and the collection of samples for future
              return to Earth.
              <br />
              <br />
              <span className="spanMars">International Collaboration:</span>
              <br /> Various space agencies worldwide, including ESA (European
              Space Agency), Roscosmos (Russian Space Agency), and CNSA (China
              National Space Administration), have initiated missions to study
              Mars, fostering international collaboration in Martian
              exploration.
            </p>

            <h2 className="cardTitlesBackMars">SPACE PHENOMENA</h2>

            <p className="cardTextBackMars">
              Mars exhibits intriguing space phenomena that capture the
              fascination of astronomers and space enthusiasts. Some notable
              phenomena on Mars include:
              <br />
              <br />
              <span className="spanMars">Dust Storms: </span>
              <br />
              Mars is known for its massive dust storms that can engulf the
              entire planet. These storms, fueled by strong winds, can last for
              weeks or even months, affecting visibility and atmospheric
              conditions.
              <br />
              <br />
              <span className="spanMars">Seasonal Polar Ice Caps:</span>
              <br />
              Mars experiences distinct seasons, and its polar ice caps undergo
              changes. During the Martian winter, carbon dioxide freezes,
              creating a layer of dry ice, while water ice is present throughout
              the year.
              <br />
              <span className="spanMars">Dust Devils: </span>
              <br /> Similar to Earth's tornadoes, Mars experiences dust devils
              – swirling columns of dust raised by strong, local winds. These
              features are often observed in Martian deserts and contribute to
              the redistribution of surface dust.
              <br />
              <br />
              <span className="spanMars">Phobos and Deimos: </span>
              <br /> Mars has two small moons, Phobos and Deimos, which are
              irregularly shaped and likely captured asteroids. These moons are
              much smaller than Earth's moon and have unique orbital
              characteristics.
              <br />
              <br />
              <span className="spanMars">Valles Marineris: </span>
              <br />
              Valles Marineris is a vast canyon system on Mars, stretching over
              4,000 kilometers (2,500 miles) long, making it one of the largest
              canyons in the solar system. It dwarfs the Grand Canyon on Earth.
              <br />
              <br />
              <span className="spanMars">Olympus Mons: </span>
              Olympus Mons is the largest volcano in the solar system, located
              on Mars. It stands about 13.6 miles (22 kilometers) high, making
              it nearly three times the height of Mount Everest.
              <br />
              <span className="spanMars">Martian Auroras: </span>
              While not as vivid as Earth's auroras, Mars experiences auroras
              near its polar regions. These light displays are caused by charged
              particles in the atmosphere interacting with the planet's magnetic
              field.
              <br />
              <span className="spanMars">Methane Mystery: </span>
              Detection of methane in Mars' atmosphere is a puzzling phenomenon.
              The origin of this methane is still debated, with potential
              sources including geological processes or even microbial life.
              <br />
              <span className="spanMars">Global Dust Storms: </span>
              Periodically, Mars experiences global dust storms that can shroud
              the entire planet. These storms impact surface operations and
              contribute to variations in the planet's appearance.
              <br />
              <span className="spanMars">Noctilucent Clouds:</span>
              Rare noctilucent clouds have been observed on Mars. These clouds,
              made of water ice crystals, form at high altitudes and can reflect
              sunlight, creating a beautiful yet unusual atmospheric phenomenon.
              <br />
              Exploring these space phenomena on Mars provides valuable insights
              into the planet's geology, climate, and potential habitability.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export default Mars;
