import React from "react";
import { HomeWrapper } from "./HomeStyles";
// import dcb from "../../assets/images/dcb1.png";
import dcb from "../../assets/images/sample.jpg";
import About from "../../Components/About/About";
import Contact from "../../Components/contact/Contact";

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
         <Contact />
      </HomeWrapper>
   );
};

export default Home;
