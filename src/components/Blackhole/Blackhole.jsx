/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './blackhole.css';
import blackholeFront from '../../images/Galaxies/blackhole.gif';
import blackholeBack from '../../images/Galaxies/blackhole2.gif';
import blackhole3 from '../../images/Galaxies/blackhole3.gif';
import supernova1 from '../../images/Galaxies/supernova1.webp';
import supernova2 from '../../images/Galaxies/supernova2.gif';
import supernova3 from '../../images/Galaxies/supernova3.gif';

const Blackhole = () => {
  const [showFront, setShowFront] = useState(true);
  const handleSide = () => {
    setShowFront(!showFront);
  };
  return (
    <>
      <div className={`card-container${showFront ? '' : ' flipped'}`}>
        <div className="card cardFront">
          <h1 onClick={handleSide} className="cardHeaderFrontBlackhole">
            Blackhole
          </h1>
          <nav className="cardNavBlackhole">
            <ul className="navUlBlackhole">
              <li className="navLiBlackhole">
                <a href="#distance">Nearest to earth : V616 Monocerotis</a>
              </li>

              <li className="navLiBlackhole">
                <a href="#characteristics">Distance : 7.200 LY away</a>
              </li>
            </ul>
          </nav>
          <img
            className="cardImageFrontBlackhole"
            src={blackholeFront}
            alt="A blackhole"
          />
          <section className="cardSectionBlackhole">
            <h2 className="cardTitlesBlackhole">BLACKHOLES</h2>
            <p className="cardTextBlackhole">
              Black holes are enigmatic cosmic objects with gravitational forces
              so intense that nothing, not even light, can escape their grasp.
              They are formed from the remnants of massive stars that have
              exhausted their nuclear fuel and undergo gravitational collapse.
              Black holes come in different sizes, from stellar-mass black holes
              to supermassive black holes found at the centers of galaxies.
              <br />
              <br />
              The Milky Way galaxy, where our solar system resides, contains a
              supermassive black hole at its center, known as Sagittarius A*.
              However, it is situated at a distance of approximately 26,000
              light-years from Earth, and its gravitational effects are not
              significant on a planetary scale.
              <br />
              <br />
              It's important to note that black holes do not "suck in" objects
              from vast distances. Their gravitational influence is felt
              primarily by objects in close proximity. The gravitational pull
              from the Sun is much more significant for our solar system than
              any distant black holes.
              <br />
              <br />
              While there may be many stellar-mass black holes distributed
              throughout the Milky Way, their distances are typically measured
              in thousands or tens of thousands of light-years. As of now, there
              is no known black hole close enough to pose any direct threat to
              Earth or our solar system. Here's a closer look at black holes,
              along with some fun facts, historical events, and related space
              phenomena:
            </p>

            <h2 className="cardTitlesBlackhole">FUN FACTS ABOUT BLACK HOLES</h2>
            <p className="cardTextBlackhole">
              <span className="spanBlackhole">Event Horizon:</span>
              <br />
              The boundary surrounding a black hole is called the event horizon.
              Once an object crosses this boundary, it is inevitably drawn into
              the black hole, and no information about it can escape.
              <br />
              <br />
              <span className="spanBlackhole">Singularity: </span>
              <br /> At the center of a black hole lies a point of infinite
              density known as a singularity. The laws of physics, as we
              currently understand them, break down at this point.
              <br />
              <br />
              <span className="spanBlackhole">Time Dilation:</span>
              <br />
              Intense gravitational fields near black holes cause time to pass
              more slowly. This phenomenon, known as time dilation, has been
              experimentally confirmed with observations of clocks near massive
              objects.
              <br />
              <br />
              <span className="spanBlackhole">Microscopic Black Holes: </span>
              <br /> Theoretically, tiny black holes could exist, but they would
              be smaller than atoms and would evaporate rapidly due to Hawking
              radiation, a process proposed by physicist Stephen Hawking.
              <span className="spanBlackhole">Kerr Black Holes: </span>
              <br />
              Black holes can rotate, and those with angular momentum are called
              Kerr black holes. They exhibit interesting effects, such as frame
              dragging, where they drag spacetime along with their rotation.
              <br />
              <br />
            </p>
          </section>

          <img
            className="cardImageBackBlackhole"
            src={blackholeBack}
            alt="A blackhole"
          />

          <section className="cardSectionBlackhole">
            <h2 className="cardTitlesBlackhole">HISTORICAL EVENTS</h2>
            <p className="cardTextBlackhole">
              <span className="spanBlackhole">
                Formation of the Term "Black Hole" (1967):{' '}
              </span>
              <br />
              Physicist John Archibald Wheeler coined the term "black hole"
              during a lecture, popularizing the concept that had previously
              been referred to as "frozen stars."
              <br />
              <br />
              <span className="spanBlackhole">Hawking Radiation (1974): </span>
              <br /> Stephen Hawking proposed that black holes are not
              completely black and should emit thermal radiation due to quantum
              effects near the event horizon. This phenomenon is now known as
              Hawking radiation.
              <br />
              <br />
              <span className="spanBlackhole">
                First Black Hole Candidate (Cygnus X-1, 1964):{' '}
              </span>
              <br />
              Cygnus X-1 was one of the first strong black hole candidates
              identified through X-ray observations of a binary star system. It
              played a significant role in the study of black hole candidates.
            </p>
          </section>

          <img
            className="cardImageBackBlackhole"
            src={blackhole3}
            alt="A blackhole"
          />

          <section className="cardSectionBlackhole">
            <h2 className="cardTitlesBlackhole">SPACE PHENOMENA</h2>
            <p className="cardTextBlackhole">
              <span className="spanBlackhole">Accretion Disks:</span>
              <br />
              As black holes pull in surrounding matter, such as gas from a
              companion star, an accretion disk forms. The intense friction
              within these disks can generate powerful X-ray emissions.
              <br />
              <br />
              <span className="spanBlackhole">Gravitational Waves: </span>
              <br />
              The merger of two black holes generates ripples in spacetime
              called gravitational waves. The first direct detection of
              gravitational waves from a black hole merger occurred in 2015.
              <br />
              <br />
              <span className="spanBlackhole">Quasars:</span>
              <br />
              Quasars: Some of the brightest and most distant objects in the
              universe, quasars, are believed to be powered by supermassive
              black holes at the centers of galaxies.
              <br />
              <br />
              <span className="spanBlackhole">Tidal Disruption Events: </span>
              <br />
              When a star gets too close to a supermassive black hole, tidal
              forces can tear it apart in a cataclysmic event known as a tidal
              disruption event.
            </p>
          </section>
        </div>

        {/* From here starts the Back Card - its about SUPERNOVA*/}
        <div className="card cardBack">
          <h1 onClick={handleSide} className="cardHeaderBackBlackhole">
            Supernova
          </h1>
          <nav className="cardNavBlackhole">
            <ul className="navUlBlackhole">
              <li className="navLiBlackhole">
                <a href="#distance">Nearest to earth : Supernova 1987A</a>
              </li>

              <li className="navLiBlackhole">
                <a href="#characteristics">Distance : 168.000 LY away</a>
              </li>
            </ul>
          </nav>
          <img
            className="cardImageBackBlackhole"
            src={supernova1}
            alt="A supernova"
          />

          <section className="cardSectionBlackhole">
            <h2 className="cardTitlesBlackhole">SUPERNOVA</h2>
            <p className="cardTextBlackhole">
              Supernovae are spectacular and cataclysmic events in the life
              cycles of certain stars. These explosions release an extraordinary
              amount of energy, outshining entire galaxies for a brief period.
              Supernovae play a crucial role in the distribution of elements
              throughout the cosmos and can give rise to other cosmic phenomena.
              <br />
              <br />
              The closest known supernova to our planet that has been observed
              in modern times is Supernova 1987A (SN 1987A). It occurred in the
              Large Magellanic Cloud, a satellite galaxy of the Milky Way
              located about 168,000 light-years away from Earth. SN 1987A was a
              Type II supernova, marking the collapse of a massive star and the
              subsequent release of a tremendous amount of energy.
              <br />
              <br />
              While 168,000 light-years might seem like a vast distance, in
              astronomical terms, it is relatively close compared to the
              vastness of the Milky Way galaxy. The explosion was visible to the
              naked eye and was a significant event for astronomers. SN 1987A
              provided valuable insights into the late stages of stellar
              evolution and the processes involved in a supernova explosion.
              <br />
              <br />
              It's important to note that while SN 1987A was a relatively close
              and well-observed supernova, there could be other supernovae
              occurring at greater distances that are beyond our current
              observational capabilities. The universe is vast, and supernovae
              are occurring regularly, but not all of them are visible or
              detectable from Earth. Here's an introduction to supernovae, along
              with fun facts, historical events, and related space phenomena:
            </p>

            <h2 className="cardTitlesBlackhole">FUN FACTS ABOUT SUPERNOVA</h2>
            <p className="cardTextBlackhole">
              <span className="spanSupernova">Brightness: </span>
              <br />
              A supernova can briefly outshine an entire galaxy, emitting as
              much light as billions of ordinary stars combined.
              <br />
              <br />
              <span className="spanSupernova">Elemental Forging: </span>
              <br /> Supernovae are crucial for the production and dispersal of
              heavy elements such as gold,silver, and uranium. These elements
              are created in the intense heat and pressure during the explosion.
              <br />
              <br />
              <span className="spanSupernova">
                Neutron Stars and Black Holes:{' '}
              </span>
              <br />
              The remnants of a supernova can lead to the formation of neutron
              stars or black holes, depending on the mass of the collapsing
              core.
              <br />
              <br />
              <span className="spanSupernova">Supernova Types: </span>
              <br /> There are two main types of supernovae: Type I, which lacks
              hydrogen lines in its spectrum, and Type II, which does have
              hydrogen lines. Each type has different progenitor stars and
              mechanisms for the explosion.
              <br />
              <br />
              <span className="spanSupernova">Supernova Remnants: </span>
              <br />
              The expanding debris from a supernova explosion forms a nebula
              known as a supernova remnant. Examples include the Crab Nebula and
              the Veil Nebula.
              <br />
            </p>
          </section>

          <img
            className="cardImageBackBlackhole"
            src={supernova3}
            alt="A supernova"
          />

          <section className="cardSectionBlackhole">
            <h2 className="cardTitlesBlackhole">HISTORICAL EVENTS</h2>
            <p className="cardTextBlackhole">
              <span className="spanSupernova">Supernova of 1006:</span>
              <br />
              Supernova of 1006: The supernova of 1006 was one of the most
              well-documented stellar explosions in human history. It was
              visible in the daytime for weeks and left a visible remnant, now
              known as SN 1006.
              <br />
              <br />
              <span className="spanSupernova">
                Tycho's Supernova (SN 1572):{' '}
              </span>
              <br /> In 1572, Danish astronomer Tycho Brahe observed a new star
              in the constellation Cassiopeia, later identified as a supernova.
              This event challenged the prevailing Aristotelian view of the
              unchanging heavens.
              <br />
              <br />
              <span className="spanSupernova">
                Kepler's Supernova (SN 1604):
              </span>
              <br />
              Kepler's Supernova (SN 1604): German astronomer Johannes Kepler
              observed a supernova in 1604, making it the last supernova to be
              observed in our Milky Way galaxy. It was visible to the naked eye
              for several months.
            </p>
          </section>

          <img
            className="cardImageBackBlackhole"
            src={supernova2}
            alt="A supernova"
          />

          <section className="cardSectionBlackhole">
            <h2 className="cardTitlesBlackhole">SPACE PHENOMENA</h2>
            <p className="cardTextBlackhole">
              <span className="spanSupernova">Gamma-Ray Bursts (GRBs): </span>
              <br />
              Some supernovae are associated with gamma-ray bursts, which are
              intense flashes of gamma-ray radiation. These events are among the
              most energetic phenomena in the universe.
              <br />
              <br />
              <span className="spanSupernova">Neutrino Emission: </span>
              <br />
              Supernovae release an enormous number of neutrinos, nearly as many
              as the total number of neutrinos emitted by the Sun over its
              entire lifetime. These elusive particles provide unique insights
              into the core-collapse process.
              <br />
              <br />
              <span className="spanSupernova">
                Supernova Progenitor Systems:{' '}
              </span>
              <br />
              Observations and studies of supernovae contribute to our
              understanding of stellar evolution, the life cycles of massive
              stars, and the conditions leading to these explosive events.
              <br />
              <br />
              Supernovae are key players in the cosmic drama, influencing the
              evolution of galaxies and contributing to the rich tapestry of the
              universe. Their study helps astronomers unlock the mysteries of
              stellar life cycles and the profound impact of these extraordinary
              events.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export default Blackhole;
