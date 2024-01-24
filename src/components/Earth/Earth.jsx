import { userEarthContext } from '../../context/EarthContext';

const Earth = () => {
  const { planetsData } = userEarthContext();

  const { name, id, info } = planetsData[0];

  return (
    <>
      <h1 key={planetsData.name}> {name} </h1>
      <p key={planetsData.info}> {info}</p>
      {/* {Earth.name} */}
    </>
  );
};

export default Earth;

// This is the front page

// import "../../src/App.css";
// import satelite from "../images/earth-satelite.gif";

// const EarthFront = () => {
//   return (
//     <>
//       <h1 className="cardHeaderFront">Earth</h1>

//       <nav className="cardNav">
//         <ul className="navUl">
//           <li className="navLi">
//             <a href="#size">Size</a>
//           </li>
//           <li className="navLi">
//             <a href="#distance">Distance from the Sun</a>
//           </li>
//           <li className="navLi">
//             <a href="#characteristics">Key Characteristics</a>
//           </li>
//         </ul>
//       </nav>
//       <img className="cardImageFront" src={satelite} alt="" />
//     </>
//   );
// };

// export default EarthFront;

// This is the back page

// import earth from "../images/earth1.gif";
// import "../../src/App.css";

// function EarthBack() {
//   return (
//     <>
//       <h1 className="cardHeaderBack">Earth</h1>

//       <nav className="cardNav">
//         <ul className="navUl">
//           <li className="navLi">
//             <a href="#size">Size</a>
//           </li>
//           <li className="navLi">
//             <a href="#distance">Distance from the Sun</a>
//           </li>
//           <li className="navLi">
//             <a href="#characteristics">Key Characteristics</a>
//           </li>
//         </ul>
//       </nav>
//       <img className="cardImageBack" src={earth} alt="" />
//       <section className="cardSection">
//         <h2 className="cardTitles">Fun facts about Earth</h2>
//         <p className="cardText">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illum
//           maiores adipisci saepe nam accusantium rerum, hic vel expedita
//           excepturi ut optio architecto laborum, minima aliquam inventore est
//           voluptatum. Vel. Lorem ipsum dolor sit amet, consectetur adipisicing
//           elit. Dicta illum maiores adipisci saepe nam accusantium rerum, hic
//           vel expedita excepturi ut optio architecto laborum, minima aliquam
//           inventore est voluptatum. Vel.
//         </p>

//         <h2 className="cardTitles">Historical Events</h2>
//         <p className="cardText">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illum
//           maiores adipisci saepe nam accusantium rerum, hic vel expedita
//           excepturi ut optio architecto laborum, minima aliquam inventore est
//           voluptatum. Vel. Lorem ipsum dolor sit amet, consectetur adipisicing
//           elit. Dicta illum maiores adipisci saepe nam accusantium rerum, hic
//           vel expedita excepturi ut optio architecto laborum, minima aliquam
//           inventore est voluptatum. Vel.
//         </p>

//         <h2 className="cardTitles">Space Phenomena</h2>
//         <p className="cardText">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illum
//           maiores adipisci saepe nam accusantium rerum, hic vel expedita
//           excepturi ut optio architecto laborum, minima aliquam inventore est
//           voluptatum. Vel. Lorem ipsum dolor sit amet, consectetur adipisicing
//           elit. Dicta illum maiores adipisci saepe nam accusantium rerum, hic
//           vel expedita excepturi ut optio architecto laborum, minima aliquam
//           inventore est voluptatum. Vel.
//         </p>
//       </section>
//     </>
//   );
// }

// export default EarthBack;
