import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Loading from "../Loading/Loading";
import { BlogWrapper } from "./BlogSliderStyles";
import {
   BsFillArrowLeftCircleFill,
   BsFillArrowRightCircleFill,
} from "react-icons/bs";

const BlogSlider = () => {
   const [news, setNews] = useState([]);

   useEffect(() => {
      const cancelToken = axios.CancelToken.source();
      const options = {
         method: "GET",
         url: "https://jsonplaceholder.typicode.com/users",
      };

      axios
         .request(options, cancelToken)
         .then(function (response) {
            console.log(response.data);
            setNews(response.data);
         })
         .catch(function (error) {
            if (axios.isCancel(error)) {
               console.error("request cancelled");
            } else {
               console.log(error.message);
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
         <h2> NEWS BLOG </h2>
         <BlogWrapper>
            {news.length ? (
               <Slider {...settings}>
                  {news.map((item, index) => {
                     return (
                        <div key={index} className="wrapp">
                           <h4>{item.name}</h4>
                        </div>
                     );
                  })}
               </Slider>
            ) : (
               <Loading />
            )}
         </BlogWrapper>
      </>
   );
};

export default BlogSlider;
