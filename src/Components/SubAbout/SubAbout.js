import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const SubAbout = () => {
   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);

   return (
      <>
         <h1>Basic Company Information</h1>
         <h3>
            Denukan Network Limited is duly registered under the law of the
            Federal Republic of Nigeria. The Company is organized principally to
            provide quality services to its various customers in the areas of
            Technology and Financial Consultancy.
            <br />
            Some of our sevices include:
         </h3>
         <h3>
            <ul>
               <li>Internet Service Provider</li>
               <li>Core Banking Software Application Provider</li>
               <li>Consultancy and Advisory Services to MFI and MFB</li>
               <li>Telecommunications, Media and Entertainment Consultant</li>
               <li>Sales of Access Control and Installation Of CCTV Cameras</li>
               <li>Sales and Installation Of ATM</li>
               <li>
                  Sales and Service of Inverters, Inverter batteries and solar
                  panels{" "}
               </li>
               <li>Asset Management</li>
            </ul>
         </h3>
      </>
   );
};

export default SubAbout;
