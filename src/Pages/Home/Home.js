import { HomeWrapper } from "./HomeStyles";
import dcb from "../../assets/images/dcb11.png";
import About from "../../Components/About/About";
import Offer from "../../Components/Offer/Offer";
// import BlogSlider from "../../Components/BlogSlider/BlogSlider";


const Home = () => {
   return (
      <HomeWrapper>
         <div className="top">
            <div className="first-child">
               <h1>Krex Technology.</h1>
               <h2>Integrating tech-centered software solutions into everyday life.</h2>
            </div>
            <div className="imgWrapper">
               <img src={dcb} alt="illustration for core tech" />
            </div>
         </div>
         <About />
         <Offer />
         <br />
         <br />
         {/* <BlogSlider /> */}
         <br />
      </HomeWrapper>
   );
};

export default Home;
