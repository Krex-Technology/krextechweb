import { useState } from "react";
import "animate.css";
import { GlobalStyles } from "./globalstyles";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import { RiMenuUnfoldFill } from "react-icons/ri";
import Home from "./Pages/Home/Home";
import Memo from "./Pages/Memo/Memo";
import Events from "./Pages/Events/Events";
import About from "./Pages/About/About";
import People from "./Pages/People/People";
import Solutions from "./Pages/Solutions/Solutions";
import ContactUS from "./Pages/Contact/Contact";

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
   const [isScrolled, setIsScrolled] = useState(false);

   const toggledisplay = () => {
      setDisplay(!display);
   };

   window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
   };

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact_us" element={<ContactUS />} />
            <Route path="/about_us" element={<About />} />
            <Route path="/our_people" element={<People />} />
            <Route path="/our_solutions" element={<Solutions />} />
         </Routes>
         <div className="navv">
            {" "}
            <div className="menu" onClick={toggledisplay}>
               <h1>
                  <RiMenuUnfoldFill />
               </h1>
            </div>
            {!display ? (
               <div
                  className="navcontents animate__animated animate__rubberBand"
                  onClick={toggledisplay}
               >
                  <h4>
                     <Link to="/">Home</Link>
                  </h4>
                  <h4>
                     <Link to="/memo">Memo</Link>
                  </h4>
                  <h4>
                     <Link to="/events">Events</Link>
                  </h4>
                  <h4>
                     <Link to="/about_us">About us</Link>
                  </h4>
                  <h4>
                     <Link to="/contact_us">Contact us</Link>
                  </h4>
                  <h4>
                     <Link to="/our_solutions">Our solutions</Link>
                  </h4>
                  <h4>
                     <Link to="/our_people">Our people</Link>
                  </h4>
               </div>
            ) : null}
         </div>

         <div className={isScrolled ? "navBar scrolling" : "navBar"}>
            <span>
               <Link to="/">
                  <h1>Denukan</h1>
                  <p>NETWORK LIMITED</p>
               </Link>
            </span>
            <div className="links">
               <h4>
                  <Link to="/">Home</Link>
               </h4>
               <h4>
                  <Link to="/memo">Memo</Link>
               </h4>
               <h4>
                  <Link to="/events">Events</Link>
               </h4>
               <h4>
                  <Link to="/about_us">About us</Link>
               </h4>
               <h4>
                  <Link to="/contact_us">Contact us</Link>
               </h4>
               <h4>
                  <Link to="/our_solutions">Our solutions</Link>
               </h4>
               <h4>
                  <Link to="/our_people">Our people</Link>
               </h4>
            </div>
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
