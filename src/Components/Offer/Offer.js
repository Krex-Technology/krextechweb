import React from "react";
import { Wrapper } from "./OfferStyles";
import { service } from "./Ofrerdata";

const Offer = ({ srcref }) => {
   return (
      <Wrapper className="offer" ref={srcref}>
         <br />
         <h2>
            BriIliant Technology Solutions and Exceptional Financial Consultancy
         </h2>
         <br />
         <div className="holder">
            {service.map((item, index) => {
               return (
                  <div className="container" key={index}>
                     <img src={item.image} alt={index} />
                     <div className="text">
                        <p>{item.text}</p>
                     </div>
                  </div>
               );
            })}
         </div>
         <br />
      </Wrapper>
   );
};

export default Offer;
