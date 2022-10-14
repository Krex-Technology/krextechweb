import React, { useEffect } from "react";
import { Wrapper } from "./SubAboutStyles";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";

const SubAbout = () => {
   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);

   const settingsTwo = {
      arrows: false,
      infinite: true,
      dot: false,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   return (
      <Wrapper>
         <div className="abt">
            <h1>Basic Company Information</h1>
            <h3>
               Denukan Network Limited is duly registered under the law of the
               Federal Republic of Nigeria. The Company is organized principally
               to provide quality services to its various customers in the areas
               of Technology and Financial Consultancy
               <br />
               some of our sevices include:
            </h3>
            <h3>
               <ul>
                  <li>IT Consultancy</li>
                  <li>Internet Connectivity</li>
                  <li>Sales and Installation Of CCTV</li>
                  <li>Sales and Installation Of Inverter</li>
                  <li>Sales and Installation Of Intercom</li>
                  <li>Sales and Installation Of ATM</li>
                  <li>Consultancy For Microfinance banks</li>
                  <li>Asset Management</li>
               </ul>
            </h3>
         </div>
         <Slider {...settingsTwo} className="holdertwo">
            <div data-aos="fade-left" className="div">
               <div className="img">
                  <h1>
                     WE<span className="sec"> handle </span>
                     <span className="jb">IT Consultancy</span>
                  </h1>
               </div>
            </div>
            <div data-aos="fade-left" className="div">
               <div className="img">
                  <h1>
                     WE<span className="sec"> handle </span>
                     <span className="jb">Internet Connectivity</span>
                  </h1>
               </div>
            </div>
            <div data-aos="fade-left" className="div">
               <div className="img">
                  <h1>
                     WE<span className="sec"> handle </span>
                     <span className="jb">Sales and Installation Of CCTV</span>
                  </h1>
               </div>
            </div>
            <div data-aos="fade-left" className="div">
               <div className="img">
                  <h1>
                     WE<span className="sec"> handle </span>
                     <span className="jb">
                        Sales and Installation Of Inverter
                     </span>
                  </h1>
               </div>
            </div>
            <div data-aos="fade-left" className="div">
               <div className="img">
                  <h1>
                     WE<span className="sec"> handle </span>
                     <span className="jb">
                        Sales and Installation Of Intercom
                     </span>
                  </h1>
               </div>
            </div>
            <div data-aos="fade-left" className="div">
               <div className="img">
                  <h1>
                     WE<span className="sec"> handle </span>
                     <span className="jb">Sales and Installation Of ATM</span>
                  </h1>
               </div>
            </div>
            <div data-aos="fade-left" className="div">
               <div className="img">
                  <h1>
                     WE<span className="sec"> handle </span>
                     <span className="jb">
                        Consultancy For Microfinance banks
                     </span>
                  </h1>
               </div>
            </div>
            <div data-aos="fade-left" className="div">
               <div className="img">
                  <h1>
                     WE<span className="sec"> handle </span>
                     <span className="jb">Asset Management</span>
                  </h1>
               </div>
            </div>
         </Slider>
      </Wrapper>
   );
};

export default SubAbout;
