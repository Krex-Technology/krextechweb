import { useState } from "react";
import "animate.css";
import { GlobalStyles } from "./globalstyles";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import { RiMenuUnfoldFill } from "react-icons/ri";
import Home from "./Pages/Home/Home";
// import Memo from "./Pages/Memo/Memo";
// import Events from "./Pages/Events/Events";
// import About from "./Pages/About/About";
// import People from "./Pages/People/People";
// import Solutions from "./Pages/Solutions/Solutions";
import ContactUS from "./Pages/Contact/Contact";
import News from "./Pages/News/News";
import Page404 from "./Pages/404/Page404";

const theme = {
   colors: {
      white: "#ffffff",
      black:  "#673ab7" ,
      primary:  "#673ab7" ,
      button: "#2299fe",
      buttonhover: "#3f75cc",
      grey01:  "#673ab7" ,
      grey02:  "#673ab7" ,
      inputhover: "#f3f0f0c3",
      transparent: "transparent",
      green: "#02b35a",
      side:  "#673ab7" ,
      red: "#e0515f",
   },
};

export const BASE_URL = "https://cerise-life-jacket.cyclic.app";

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
            {/* <Route path="/memo" element={<Memo />} /> */}
            {/* <Route path="/events" element={<Events />} /> */}
            <Route path="/contact_us" element={<ContactUS />} />
            {/* <Route path="/about_us" element={<About />} /> */}
            {/* <Route path="/our_people" element={<People />} /> */}
            {/* <Route path="/our_solutions" element={<Solutions />} /> */}
            <Route path="/news/:id" element={<News />} />
            <Route path="*" element={<Page404 />} />
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
                  {/* <h4>
                     <Link to="/about_us">About us</Link>
                  </h4> */}
                  {/* <h4>
                     <Link to="/events">Events</Link>
                  </h4> */}
                  {/* <h4>
                     <Link to="/our_solutions">Our solutions</Link>
                  </h4> */}
                  {/* <h4>
                     <Link to="/our_people">Our people</Link>
                  </h4> */}
                  <h4>
                     <Link to="/contact_us">Contact us</Link>
                  </h4>
                  {/* <h4>
                     <Link to="/memo">Memo</Link>
                  </h4> */}
               </div>
            ) : null}
         </div>

         <div className={isScrolled ? "navBar scrolling" : "navBar"}>
            <div className="width">
               <span>
                  <Link to="/">
                     <h1>KREX TECH</h1>
                     {/* <p>NETWORK LIMITED</p> */}
                  </Link>
               </span>
               <div className="links">
                  <h4>
                     <Link to="/">Home</Link>
                  </h4>
                  {/* <h4>
                     <Link to="/about_us">About us</Link>
                  </h4> */}
                  {/* <h4>
                     <Link to="/events">Events</Link>
                  </h4>
                  <h4>
                     <Link to="/our_solutions">Our solutions</Link>
                  </h4>
                  <h4>
                     <Link to="/our_people">Our people</Link>
                  </h4> */}
                  <h4>
                     <Link to="/contact_us">Contact us</Link>
                  </h4>
                  {/* <h4>
                     <Link to="/memo">Memo</Link>
                  </h4> */}
               </div>
            </div>
         </div>

         <div className="footer">
            <h4>
               Copyright &copy; 2023 Krex Technology All Rights Reserved
            </h4>
            <p>
               Krex Technology is duly registered under the law of the
               Federal Republic of Nigeria.
            </p>
         </div>
      </ThemeProvider>
   );
}

export default App;
