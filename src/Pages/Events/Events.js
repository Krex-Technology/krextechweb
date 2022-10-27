/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { catevents } from "./eventsdata";
import { EventsWrapper } from "./EventsStyles";

setInterval(function updateTimer() {
   let future = Date.parse("October 29, 2022 12:00:00");
   let now = new Date();
   let diff = future - now;

   let days = Math.floor(diff / (1000 * 60 * 60 * 24));
   let hours = Math.floor(diff / (1000 * 60 * 60));
   let mins = Math.floor(diff / (1000 * 60));
   let secs = Math.floor(diff / 1000);

   let d = days;
   let h = hours - days * 24;
   let m = mins - hours * 60;
   let s = secs - mins * 60;

   document.getElementById("timer").innerHTML =
      "<div>" +
      d +
      "<span>days</span></div>" +
      "<div>" +
      h +
      "<span>hours</span></div>" +
      "<div>" +
      m +
      "<span>minutes</span></div>" +
      "<div>" +
      s +
      "<span>seconds</span></div>";
}, 1000);

const Events = () => {
   return (
      <EventsWrapper>
         <div id="timer"></div>
         <h3 className="info-">TO OUR SPECIAL TEAM BONDING EXERCISE!</h3>
         <br />
         <hr />
         {catevents.map((item, index) => {
            return (
               <div key={index}>
                  <p>{item.text}</p>
                  <div className="gridwrapper" key={index}>
                     <div className="container">
                        <img src={item.image1} />
                        <img src={item.image2} />
                        <img src={item.image3} />
                        <img src={item.image4} />
                        <img src={item.image5} />
                     </div>
                  </div>
               </div>
            );
         })}
         <br />
      </EventsWrapper>
   );
};

export default Events;
