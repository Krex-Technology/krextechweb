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
import { BASE_URL } from "../../App";

const INITIAL_STATE = {
   loading: false,
   news: [],
   error: "",
};

const FETCH_NEWS_START = "FETCH_NEWS_START";
const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
const FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR";

const newsReducer = (state, action) => {
   switch (action.type) {
      case FETCH_NEWS_START:
         return {
            loading: true,
            news: [],
            error: "",
         };
      case FETCH_NEWS_SUCCESS:
         return {
            error: "",
            loading: false,
            news: action.payload,
         };
      case FETCH_NEWS_ERROR:
         return { error: action.payload, loading: false, news: [] };
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
         url: `${BASE_URL}/news/newsArticle`,
      };
      axios
         .request(options, cancelToken)
         .then(function (response) {
            console.log(response);
            dispatch({
               type: "FETCH_NEWS_SUCCESS",
               payload: response.data?.news,
            });
         })
         .catch(function (error) {
            if (axios.isCancel(error)) {
               console.log("you canceled the request");
            } else {
               dispatch({ type: "FETCH_NEWS_ERROR", payload: error.message });
               console.log(error);
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
         <h2> TRENDING IN OUR SPACE</h2>
         <BlogWrapper>
            {state.loading && <Loading />}
            {state.news && (
               <Slider {...settings}>
                  {state.news.map((item, index) => {
                     return (
                        <Link to={`news/${item._id}`} key={index}>
                           <div className="card">
                              <div className="image-wrapper">
                                 <img src={item.imageUrl} alt={item.title} />
                              </div>
                              <div className="text-box-wrapper">
                                 <div className="text-box">
                                    <span>{item.date.slice(0, 10)}</span>
                                    <h3 className="heading">{item.title}</h3>
                                    <p
                                       dangerouslySetInnerHTML={{
                                          __html: item.details.substring(
                                             0,
                                             120
                                          ),
                                       }}
                                    ></p>
                                 </div>
                                 <div className="button-wrapper">
                                    Read More...
                                 </div>
                              </div>
                           </div>
                        </Link>
                     );
                  })}
               </Slider>
            )}
            {state.error && <h2 id="error">{state.error}</h2>}
         </BlogWrapper>
      </>
   );
};

export default BlogSlider;
