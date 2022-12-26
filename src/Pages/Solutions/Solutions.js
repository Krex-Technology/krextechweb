import React from "react";
import { solutionData } from "./solutionsData";
import { solutionDataTwo } from "./solutionsData";
import { SolutionWrapper } from "./solutionsStyles";


const Solutions = () => {
   return (
      <SolutionWrapper>
         <h2>We profer solutions in the following areas</h2>
         <h2>Finacial Consultancy</h2>
         <p>
            Our expertise is anchored on our extensive business knowledge and
            technical know-how. We help our microfinance bank & SMEs with focus
            on strategic, operational, financial and capital needs of their
            businesses.
         </p>
         <p>
            We provide advisory services on the full spectrum of financial and
            transactional challenges faced by microfinance bank & SMEs which may
            hinder their business performance. In this light we do
         </p>
         <br />
         <div className="solutionsWrapper">
            {solutionData.map((item, index) => {
               return (
                  <div key={index} className="solutionWrapper">
                     <h3>{item.title}</h3>
                     <p>{item.content}</p>
                  </div>
               );
            })}
         </div>
         <br />
         <br />
         <h2>Technology</h2>
         <p>
            We advise Microfinance banks & SMEs in Nigeria to adopt technology,
            to create value in the financial services space and to eliminate
            bottleneck in their operations by deploying technological service in
            the following areas:
         </p>
         <br />
         <div className="solutionsWrapper">
            {solutionDataTwo.map((item, index) => {
               return (
                  <div key={index} className="solutionWrapper">
                     <h3>{item.title}</h3>
                     <p>{item.content}</p>
                  </div>
               );
            })}
         </div>
      </SolutionWrapper>
   );
};

export default Solutions;
