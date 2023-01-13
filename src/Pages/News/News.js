/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../App";
import { NewsWrapper } from "./NewsStyles";
import Loading from "../../Components/Loading/Loading";

const News = () => {
   const { id } = useParams();

   const [newsData, setNewsData] = useState({});
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");

   useEffect(() => {
      const cancelToken = axios.CancelToken.source();
      setLoading(true);

      const getData = () => {
         axios
            .get(`${BASE_URL}/news/${id}`, {
               cancelToken: cancelToken.token,
            })
            .then((response) => {
               setNewsData(response.data?.news);
               console.log(newsData);
            })
            .catch((error) => {
               if (axios.isCancel(error)) {
                  console.log("request canceled");
               } else {
                  setError(error.message);
                  console.log(error.message);
               }
            });
      };

      // const dater = ()=>{
      //    let today = new Date();

      // const currentHours = today.getHours();
      // const Hours = ("0" + currentHours).slice(-2);

      // const currentMinutes = today.getMinutes();
      // const minute = ("0" + currentMinutes).slice(-2);

      // const currentSeconds = today.getSeconds();
      // const seconds = ("0" + currentSeconds).slice(-2);

      // const currentMonth = today.getMonth() + 1;
      // const month = ("0" + currentMonth).slice(-2);

      // const currentDay = today.getDate();
      // const day = ("0" + currentDay).slice(-2);
      // }

      getData();
      setLoading(false);
      return () => {
         cancelToken.cancel();
      };
   }, [id]);

   // const { title, imageUrl, date, details, _id } = newsData;

   return (
      <NewsWrapper>
         {loading && <Loading />}
         {newsData && (
            <div>
               <div className="header">
                  <div className="imgWrapper">
                     <img src={newsData.imageUrl} alt={newsData.title} />
                  </div>
                  <h1>{newsData.title}</h1>
               </div>
               <br />
               <span>{newsData.date.slice(0, 10)}</span>
               <br />
               <p>{newsData.details}</p>
            </div>
         )}
         {error && <h2 id="error">{error}</h2>}
      </NewsWrapper>
   );
};

export default News;
