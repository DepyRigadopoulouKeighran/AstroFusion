import solarSystem1 from '../../images/solarSystem2.gif';
import solarSystem2 from '../../images/solarSystem1.gif';
import '../../components/SolarSystem/solarsystem.css';

const SolarSystem = () => {
  return (
    <>
      <h1 className="cardHeaderFrontSolar">Our Solar System</h1>

      <nav className="cardNavSolar">
        <ul className="navUlSolar">
          <li className="navLiSolar">
            <a href="#size">Planets</a>
          </li>
          <li className="navLiSolar">
            <a href="#distance">Sun</a>
          </li>
          <li className="navLiSolar">
            <a href="#characteristics">Moon</a>
          </li>
        </ul>
      </nav>
      <img className="cardImageFrontSolar" src={solarSystem1} alt="" />

      <section className="cardSectionSolar">
        <h2 className="cardTitlesSolar">Lorem lorem lore lorem</h2>
        <p className="cardTextSolar">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illum
          maiores adipisci saepe nam accusantium rerum, hic vel expedita
          excepturi ut optio architecto laborum, minima aliquam inventore est
          voluptatum. Vel. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Dicta illum maiores adipisci saepe nam accusantium rerum, hic
          vel expedita excepturi ut optio architecto laborum, minima aliquam
          inventore est voluptatum. Vel.
        </p>
      </section>

      {/* Back Side of the Solar System */}

      <h1 className="cardHeaderFrontSolar">Our Solar System</h1>

      <nav className="cardNavSolar">
        <ul className="navUlSolar">
          <li className="navLiSolar">
            <a href="#size">Planets</a>
          </li>
          <li className="navLiSolar">
            <a href="#distance">Sun</a>
          </li>
          <li className="navLiSolar">
            <a href="#characteristics">Moon</a>
          </li>
        </ul>
      </nav>
      <img className="cardImageFrontSolar" src={solarSystem2} alt="" />

      <section className="cardSectionSolar">
        <h2 className="cardTitlesSolar">Lorem lorem lore lorem</h2>
        <p className="cardTextSolar">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illum
          maiores adipisci saepe nam accusantium rerum, hic vel expedita
          excepturi ut optio architecto laborum, minima aliquam inventore est
          voluptatum. Vel. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Dicta illum maiores adipisci saepe nam accusantium rerum, hic
          vel expedita excepturi ut optio architecto laborum, minima aliquam
          inventore est voluptatum. Vel.
        </p>

        <h2 className="cardTitlesSolar">Lorem lorem lore lorem</h2>
        <p className="cardTextSolar">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illum
          maiores adipisci saepe nam accusantium rerum, hic vel expedita
          excepturi ut optio architecto laborum, minima aliquam inventore est
          voluptatum. Vel. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Dicta illum maiores adipisci saepe nam accusantium rerum, hic
          vel expedita excepturi ut optio architecto laborum, minima aliquam
          inventore est voluptatum. Vel.
        </p>
      </section>
    </>
  );
};

export default SolarSystem;
