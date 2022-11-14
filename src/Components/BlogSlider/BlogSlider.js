import React, { useEffect, useReducer } from "react";
import Slider from "react-slick";
import axios from "axios";
import Loading from "../Loading/Loading";
import { BlogWrapper } from "./BlogSliderStyles";
import {
   BsFillArrowLeftCircleFill,
   BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const INITIAL_STATE = {
   loading: false,
   news: [],
   error: false,
};

const newsReducer = (state, action) => {
   switch (action.type) {
      case "FETCH_NEWS_START":
         return {
            loading: true,
            news: [],
            error: false,
         };
      case "FETCH_NEWS_SUCCESS":
         return {
            error: false,
            loading: false,
            news: action.payload,
         };
      case "FETCH_NEWS_ERROR":
         return { error: true, loading: false, news: [] };
      default:
         return state;
   }
};

const BlogSlider = () => {
   const [state, dispatch] = useReducer(newsReducer, INITIAL_STATE);

   useEffect(() => {
      const cancelToken = axios.CancelToken.source();
      dispatch({ type: "FETCH_NEWS_START" });
      const options = {
         method: "GET",
         url: "https://jsonplaceholder.typicode.com/users",
      };
      axios
         .request(options, cancelToken)
         .then(function (response) {
            console.log(response.data);
            dispatch({ type: "FETCH_NEWS_SUCCESS", payload: response.data });
         })
         .catch(function (error) {
            if (axios.isCancel(error)) {
               console.log("you canceled the request");
            } else {
               dispatch({ type: "FETCH_NEWS_ERROR" });
            }
         });

      return () => {
         cancelToken.cancel();
      };
   }, []);

   function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
         <BsFillArrowRightCircleFill
            className={className}
            style={{
               ...style,
               display: "block",
               opacity: "1",
               color: "grey",
               fill: "grey",
               position: "absolute",
               borderRadius: "50%",
               objectFit: "cover",
               fontSize: "50px",
            }}
            onClick={onClick}
         />
      );
   }

   function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
         <BsFillArrowLeftCircleFill
            className={className}
            style={{
               ...style,
               display: "block",
               opacity: "1",
               color: "grey",
               fill: "grey",
               position: "absolute",
               borderRadius: "50%",
               objectFit: "cover",
               fontSize: "50px",
            }}
            onClick={onClick}
         />
      );
   }

   let settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000,
      arrow: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   return (
      <>
         <h2> TRENDING IN THE FIN-TECH SPACE</h2>
         <BlogWrapper>
            {state.loading && <Loading />}
            {state.news.length && (
               <Slider {...settings}>
                  {state.news.map((item, index) => {
                     return (
                        <Link to={`news/${item.id}`} key={index}>
                           <div className="wrapp">
                              <h4>{item.name}</h4>
                           </div>
                        </Link>
                     );
                  })}
               </Slider>
            )}
            {state.error && <h1>error FETCH_NEWS_ERROR</h1>}
         </BlogWrapper>
      </>
   );
};

export default BlogSlider;
