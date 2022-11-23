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
               <span>{newsData.date}</span>
               <br />
               <p>{newsData.details}</p>
            </div>
         )}
         {error && <h2 id="error">{error}</h2>}
      </NewsWrapper>
   );
};

export default News;
