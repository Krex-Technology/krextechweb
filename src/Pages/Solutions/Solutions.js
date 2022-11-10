import React from "react";
import { solutionData } from "./solutionsData";
import { SolutionWrapper } from "./solutionsStyles";

const Solutions = () => {
   return (
      <SolutionWrapper>
         <h1>Solutions</h1>
         <div className="divv" />
         <h3 className="sol">
            We are dedicated to offering our clients adaptable, affordable
            solutions that will improve the efficiency and profitability of
            their operations.
         </h3>
         <br/>
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
      </SolutionWrapper>
   );
};

export default Solutions;
