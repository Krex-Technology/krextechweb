import React from "react";
import { HomeWrapper } from "./HomeStyles";
// import dcb from "../../assets/images/dcb1.png";
import dcb from "../../assets/images/dcb11.jpg";
// import dcb from "../../assets/images/sample.jpg";
// import dcb from "../../assets/images/dcb.png";
import About from "../../Components/About/About";
import Contact from "../../Components/contact/Contact";
import Offer from "../../Components/Offer/Offer";

const Home = () => {
   return (
      <HomeWrapper>
         <div className="top">
            <div className="first-child">
               <h1>Denukan Network Limited.</h1>
               <h2>integrating tech-centred solutions into everyday life.</h2>
            </div>

            <div className="imgWrapper">
               <img src={dcb} alt="illustration for core tech" />
            </div>
         </div>
         <About />
         <Offer/>
         <Contact />
      </HomeWrapper>
   );
};

export default Home;
