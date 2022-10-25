/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { AbtWrapper, FlexWrap } from "./AboutStyles";
import dcb2 from "../../assets/images/dcb2.png";
import SubAbout from "../SubAbout/SubAbout";

const About = ({ abtref }) => {
   return (
      <FlexWrap>
         <AbtWrapper>
            <SubAbout />
            <h1>About Us</h1>
            <h1>Service With Extensive Years Of Experience</h1>
            <div className="div"></div>
            <p>
               At Denukan Network Limited, We strive to integrate tech-centred
               solutions into everyday life hereby making this planet a better
               place to live. Please do well to reach out to us.
            </p>
            <div className="years">
               <h1>10+ Years Experience</h1>
               <p className="year">
                  We have over 10 Years experience in the tech space ranging
                  from tech installation to financial services.
               </p>
            </div>
            <div className="phone">
               <h1>
                  <a href="tel:+2349030639862">+234 903 0639 862</a>
               </h1>
            </div>
         </AbtWrapper>
         <div className="cont">
            <img src={dcb2} alt="tech image" />
         </div>
      </FlexWrap>
   );
};

export default About;
