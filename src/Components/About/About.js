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
            <br />
            <h1>Service With Extensive Years Of Experience</h1>
            <div className="div"></div>
            <p>
               At Krex Technology, We strive to integrate tech-centered
               solutions into everyday life hereby making this planet a better
               place to live. Please do well to reach out to us.
            </p>
            <div className="years">
               <h1>Extensive Years of Experience</h1>
               <p className="year">
                  We have vast years of experience in the software development space space ranging.
               </p>
            </div>
            <div className="phone">
               <h1>
                  <a href="tel:+2347084200305">+234 7084200305</a>
               </h1>
            </div>
            <p>
               Our Vision: "To build and empower client with top-notch
               technological service while maintaining excellent service
               delivery
               <br />
               <br />
               Our Mission Statement: To deliver innovative top-class service to
               meet the yearning of individuals, businesses and Organization.
            </p>
         </AbtWrapper>
         <div className="cont">
            <img src={dcb2} alt="tech image" />
            <div></div>
         </div>
      </FlexWrap>
   );
};

export default About;
