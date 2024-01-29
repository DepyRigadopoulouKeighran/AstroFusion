/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './othergalaxies.css';
import cosmos1 from '../../images/Galaxies/cosmos1.gif';
import cosmos2 from '../../images/Galaxies/cosmos2.gif';
import triangulum from '../../images/Galaxies/triangulum.gif';
import sombrero from '../../images/Galaxies/sombrero.jpg';
import andromeda from '../../images/Galaxies/andromedaGalaxy.gif';
import whirlpool from '../../images/Galaxies/whirlpool.gif';
import largeMagellanicCloud from '../../images/Galaxies/largeMagellanicCloud.gif';
import smallMagellanicCloud from '../../images/Galaxies/smallmagellaniccloud.webp';
import messier from '../../images/Galaxies/Messier87.gif';
import centaurus from '../../images/Galaxies/Centaurus.gif';

const OtherGalaxies = () => {
  const [showFront, setShowFront] = useState(true);
  const handleSide = () => {
    setShowFront(!showFront);
  };
  return (
    <>
      {/* THIS IS THE FRONT SIDE - ITS ABOUT OTHER GALAXIES */}
      <div className={`card-container${showFront ? '' : ' flipped'}`}>
        <div className="card cardFront">
          <h1 onClick={handleSide} className="cardHeaderFrontOtherGalaxies">
            Other Galaxies{' '}
            <span>
              <i className="fa-solid fa-right-long arrow"></i>
            </span>
          </h1>
          <nav className="cardNavOtherGalaxies">
            <ul className="navUlOtherGalaxies">
              <li className="navLiOtherGalaxies firstNavLiOtherGalaxies">
                <a href="#andromeda">Andromeda</a>
              </li>
              <li className="navLiOtherGalaxies secondNavLiOtherGalaxies">
                <a href="#triangulum">Triangulum</a>
              </li>
              <li className="navLiOtherGalaxies forthNavLiOtherGalaxies">
                <a href="#sombrero">Sombrero</a>
              </li>
              <li className="navLiOtherGalaxies thirdNavLiOtherGalaxies">
                <a href="#whirlpool">Whirlpool</a>
              </li>
            </ul>
          </nav>
          <img
            className="cardImageFrontOtherGalaxies"
            src={cosmos1}
            alt="cosmos"
          />

          <section className="cardSectionOtherGalaxies">
            <h2 className="cardTitlesOtherGalaxies">GALAXIES</h2>
            <p className="cardTextOtherGalaxies">
              Galaxies, the cosmic building blocks, form a diverse tapestry of
              stars, gas, dust, and dark matter. From spirals to ellipticals,
              irregulars to peculiars, their structures vary. Stars, gas clouds,
              and dark matter shape galaxies, spanning dwarf to massive sizes.
              Galactic congregations, clusters, and groups unite galaxies in
              cosmic gatherings. Over eons, galaxies evolve through star
              formation bursts and cosmic collisions. Observational tools like
              telescopes unveil their intricate details, yet mysteries persist.
              Galaxies, celestial storytellers, hold the universe's history,
              revealing the dynamic cosmos that surrounds us.
            </p>
          </section>

          <img
            className="cardImageFrontOtherGalaxies"
            src={andromeda}
            alt="Andromeda Galaxy"
          />
          <section className="cardSectionOtherGalaxies">
            <h2 id="andromeda" className="cardTitlesOtherGalaxies">
              ANDROMEDA
            </h2>
            <p className="cardTextOtherGalaxies">
              <span className="spanOtherGalaxies">Andromeda Galaxy (M31):</span>
              <br /> The Andromeda Galaxy is the closest spiral galaxy to the
              Milky Way and is on a collision course with our galaxy. It is
              larger than the Milky Way and is a beautiful sight in the night
              sky.
              <br />
              <br />
              <span className="spanOtherGalaxies">
                Distance from Milky Way:{' '}
              </span>
              Approximately 2.5 million light-years.
              <br />
              <br />
              <span className="spanOtherGalaxies">Distance from Earth: </span>
              About 2.5 million light-years.
            </p>
          </section>

          <img
            className="cardImageFrontOtherGalaxies"
            src={triangulum}
            alt="Triangulum Galaxy"
          />
          <section className="cardSectionOtherGalaxies">
            <h2 id="triangulum" className="cardTitlesOtherGalaxies">
              TRIANGULUM
            </h2>
            <p className="cardTextOtherGalaxies">
              <span className="spanOtherGalaxies">
                Triangulum Galaxy (M33):
              </span>
              <br /> Also known as the Pinwheel Galaxy, M33 is the third-largest
              galaxy in our Local Group. It is a spiral galaxy, and its
              structure is influenced by gravitational interactions with the
              Andromeda Galaxy. than the Milky Way and is a beautiful sight in
              the night sky.
              <br />
              <br />
              <span className="spanOtherGalaxies">
                Distance from Milky Way:{' '}
              </span>
              Approximately 2.9 million light-years.
              <br />
              <br />
              <span className="spanOtherGalaxies">Distance from Earth: </span>
              About 2.7 million light-years.
            </p>
          </section>

          <img
            className="cardImageFrontOtherGalaxies"
            src={sombrero}
            alt="Sombrero Galaxy"
          />
          <section className="cardSectionOtherGalaxies">
            <h2 id="sombrero" className="cardTitlesOtherGalaxies">
              SOMBRERO
            </h2>
            <p className="cardTextOtherGalaxies">
              <span className="spanOtherGalaxies">Sombrero Galaxy (M104):</span>
              <br /> The Sombrero Galaxy is a spiral galaxy located in the
              constellation Virgo. Its bright nucleus and large central bulge
              give it a distinctive appearance resembling a sombrero hat.
              <br />
              <br />
              <span className="spanOtherGalaxies">
                Distance from Milky Way:{' '}
              </span>
              Approximately 29 million light-years.
              <br />
              <br />
              <span className="spanOtherGalaxies">Distance from Earth: </span>
              About 28 million light-years.
            </p>
          </section>

          <img
            className="cardImageFrontOtherGalaxies"
            src={whirlpool}
            alt="Whirlpool Galaxy"
          />
          <section className="cardSectionOtherGalaxies">
            <h2 id="whirlpool" className="cardTitlesOtherGalaxies">
              WHIRLPOOL
            </h2>
            <p className="cardTextOtherGalaxies">
              <span className="spanOtherGalaxies">Whirlpool Galaxy (M51):</span>
              <br /> M51 is a classic spiral galaxy with a prominent spiral arm
              structure. It is interacting with a smaller galaxy, NGC 5195,
              creating a beautiful celestial pairing.
              <br />
              <br />
              <span className="spanOtherGalaxies">
                Distance from Milky Way:{' '}
              </span>
              Approximately 23 million light-years.
              <br />
              <br />
              <span className="spanOtherGalaxies">Distance from Earth: </span>
              About 23 million light-years.
            </p>
          </section>
        </div>

        {/* THIS IS THE BACK SIDE - ITS ABOUT OTHER GALAXIES */}
        <div className="card cardBack">
          <h1 onClick={handleSide} className="cardHeaderFrontOtherGalaxies">
            Other Galaxies <i className="fa-solid fa-right-long arrow"></i>
          </h1>
          <nav className="cardNavOtherGalaxies">
            <ul className="navUlOtherGalaxies">
              <li className="navLiOtherGalaxies firstNavLiOtherGalaxies">
                <a href="#lmc">LMC</a>
              </li>
              <li className="navLiOtherGalaxies secondNavLiOtherGalaxies">
                <a href="#smc">SMC</a>
              </li>
              <li className="navLiOtherGalaxies forthNavLiOtherGalaxies">
                <a href="#messier">Messier 87</a>
              </li>
              <li className="navLiOtherGalaxies thirdNavLiOtherGalaxies">
                <a href="#centaurus">Centaurus</a>
              </li>
            </ul>
          </nav>
          <img
            className="cardImageBackOtherGalaxies"
            src={cosmos2}
            alt="cosmos"
          />

          <section className="cardSectionOtherGalaxies">
            <h2 className="cardTitlesOtherGalaxies">GALAXIES</h2>
            <p className="cardTextOtherGalaxies">
              The exact number of galaxies in the observable universe is
              challenging to determine precisely due to the vastness of space
              and the limitations of current observational technology. However,
              astronomers estimate that there are around 100 billion to 200
              billion galaxies in the observable universe. Each of these
              galaxies can host varying numbers of stars, ranging from a few
              million to hundreds of billions.
              <br />
              <br />
              It's important to note that this estimate is based on observations
              of the observable universe, and there may be regions beyond our
              current observational reach. As technology advances and
              observational capabilities improve, astronomers may refine these
              estimates and gain a better understanding of the total number of
              galaxies in the entire universe.
            </p>
          </section>

          <img
            className="cardImageBackOtherGalaxies"
            src={largeMagellanicCloud}
            alt="Large Magellanic Cloud Galaxy"
          />
          <section className="cardSectionOtherGalaxies">
            <h2 id="lmc" className="cardTitlesOtherGalaxies">
              LARGE MAGELLANIC CLOUD
            </h2>
            <p className="cardTextOtherGalaxies">
              <span className="spanOtherGalaxies">
                Large Magellanic Cloud (LMC):
              </span>
              <br /> The LMC is a satellite galaxy of the Milky Way and is one
              of the closest galaxies to us. It is irregular in shape and hosts
              numerous star-forming regions.
              <br />
              <br />
              <span className="spanOtherGalaxies">
                Distance from Milky Way:{' '}
              </span>
              Approximately 163,000 light-years.
              <br />
              <br />
              <span className="spanOtherGalaxies">Distance from Earth: </span>
              About 163,000 light-years.
            </p>
          </section>

          <img
            className="cardImageBackOtherGalaxies"
            src={smallMagellanicCloud}
            alt="Small Magellanic Cloud Galaxy"
          />
          <section className="cardSectionOtherGalaxies">
            <h2 id="smc" className="cardTitlesOtherGalaxies">
              SMALL MAGELLANIC CLOUD
            </h2>
            <p className="cardTextOtherGalaxies">
              <span className="spanOtherGalaxies">
                Small Magellanic Cloud (SMC):
              </span>
              <br /> Like the LMC, the SMC is a satellite galaxy of the Milky
              Way. It is irregular in shape and is gravitationally interacting
              with the Large Magellanic Cloud.
              <br />
              <br />
              <span className="spanOtherGalaxies">
                Distance from Milky Way:{' '}
              </span>
              Approximately 199,000 light-years.
              <br />
              <br />
              <span className="spanOtherGalaxies">Distance from Earth: </span>
              About 199,000 light-years.
            </p>
          </section>

          <img
            className="cardImageBackOtherGalaxies"
            src={messier}
            alt="Galaxy Messier 87"
          />
          <section className="cardSectionOtherGalaxies">
            <h2 id="messier" className="cardTitlesOtherGalaxies">
              MESSIER 87
            </h2>
            <p className="cardTextOtherGalaxies">
              <span className="spanOtherGalaxies">Messier 87 (M87):</span>
              <br /> M87 is a giant elliptical galaxy located in the Virgo
              Cluster. It gained widespread attention due to the first-ever
              image of a black hole, which resides in its center.
              <br />
              <span className="spanOtherGalaxies">
                Distance from Milky Way:{' '}
              </span>
              Approximately 55 million light-years.
              <br />
              <br />
              <span className="spanOtherGalaxies">Distance from Earth: </span>
              About 55 million light-years.
            </p>
          </section>

          <img
            className="cardImageBackOtherGalaxies"
            src={centaurus}
            alt="Centaurus Galaxy"
          />
          <section className="cardSectionOtherGalaxies">
            <h2 id="centaurus" className="cardTitlesOtherGalaxies">
              CENTAURUS
            </h2>
            <p className="cardTextOtherGalaxies">
              <span className="spanOtherGalaxies">Centaurus A (NGC 5128):</span>
              <br /> Centaurus A is a peculiar galaxy with a prominent dust lane
              across its center. It is the fifth-brightest galaxy in the night
              sky and is believed to have undergone a merger.
              <br />
              <span className="spanOtherGalaxies">
                Distance from Milky Way:{' '}
              </span>
              Approximately 13 million light-years.
              <br />
              <br />
              <span className="spanOtherGalaxies">Distance from Earth: </span>
              About 12 million light-years.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export default OtherGalaxies;
