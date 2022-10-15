import React from "react";
import { Wrapper } from "./HomeStyles";
import dcb from "../../assets/images/dcb1.png";
import About from "../../Components/About/About";
import Contact from "../../Components/contact/Contact";

const Home = () => {
   return (
      <Wrapper>
         <h1>Denukan Network Limited.</h1>
         <h2>integrating tech-centred solutions into everyday life.</h2>
         <div className="imgWrapper">
            <img src={dcb} alt="illustration for core tech" />
         </div>
         <About />
         <Contact />
      </Wrapper>
   );
};

export default Home;
