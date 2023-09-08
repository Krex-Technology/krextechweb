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
            Krex Technology is duly registered under the law of the
            Federal Republic of Nigeria. The Company is organized principally to
            provide quality services to its various customers in the areas of
            Technology and Financial Consultancy.
            <br />
            Some of our sevices include:
         </h3>
         <h3>
            <ul>
               <li>Internet Service Provider</li>
               <li>Core Software Application Provider</li>
               <li>Development and Integration of embedded and distributed systems</li>
               <li>Software as a service(saas)</li>
               <li>Cloud service and solutions</li>
               <li>Platform as a service(Paas)</li>
            </ul>
         </h3>
      </>
   );
};

export default SubAbout;
