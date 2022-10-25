import { useState } from "react";
import "animate.css";
import { GlobalStyles } from "./globalstyles";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import { RiMenuUnfoldFill } from "react-icons/ri";
import Home from "./Pages/Home/Home";
import Memo from "./Pages/Memo/Memo";
import Events from "./Pages/Events/Events";

const theme = {
   colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#173361",
      button: "#2299fe",
      buttonhover: "#3f75cc",
      grey01: "#fbfbfb",
      grey02: "#e2e2e2",
      inputhover: "#f3f0f0c3",
      transparent: "transparent",
      green: "#02b35a",
      side: "#092240",
   },
};

function App() {
   const [display, setDisplay] = useState(true);

   const toggledisplay = () => {
      setDisplay(!display);
   };

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/events" element={<Events />} />
         </Routes>
         <div className="navv">
            {" "}
            <div className="menu" onClick={toggledisplay}>
               <h1>
                  <RiMenuUnfoldFill />
               </h1>
            </div>
            {!display ? (
               <div className="navcontents animate__animated animate__rubberBand">
                  <h4>
                     <Link to="/">Home</Link>
                  </h4>
                  <h4>
                     <Link to="/memo">Memo</Link>
                  </h4>
                  <h4>
                     <Link to="/events">Events</Link>
                  </h4>
               </div>
            ) : null}
         </div>
         <div className="footer">
            <h4>
               Copyright &copy; 2022 Denukan Network Limited All Rights Reserved
            </h4>
            <p>
               Denukan Network Limited is duly registered under the law of the
               Federal Republic of Nigeria.
            </p>
         </div>
      </ThemeProvider>
   );
}

export default App;
