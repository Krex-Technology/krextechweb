import { useState } from "react";
import "animate.css";
import { GlobalStyles } from "./globalstyles";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import { RiMenuUnfoldFill } from "react-icons/ri";
import Home from "./Pages/Home/Home";
import Memo from "./Pages/Memo/Memo";

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
            {/*
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Page404 />} /> */}
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
         {/* <div className="socials">
            <Link>
               <p>FB</p>
            </Link>
            <Link>
               <p>TW</p>
            </Link>
            <Link>
               <p>IG</p>
            </Link>
            {/* <Link><p>FB</p></Link>
         </div> */}
         <div className="footer">
            <h4>
               Copyright &copy; 2022 Denukan Network Limited All Rights Reserved
            </h4>
            <p>
               Joomla! is Free Software released under the GNU General Public
               License. - The Joomla name and logo are used under a limited
               license granted by Open Source Matters in the United States and
               other countries. Web-eau.net is not affiliated with or endorsed
               by the Joomla project or by Open Source Matters.
            </p>
         </div>
      </ThemeProvider>
   );
}

export default App;
