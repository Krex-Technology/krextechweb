/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HomeWrapper } from "../Home/HomeStyles";
import axios from "axios";

const News = () => {
   const { id } = useParams();

   const [newsData, setNewsData] = useState({});
   const [error, setError] = useState("");

   useEffect(() => {
      const cancelToken = axios.CancelToken.source();

      const getData = async () => {
         await axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
               cancelToken: cancelToken.token,
            })
            .then((response) => {
               setNewsData(response.data);
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

      return () => {
         cancelToken.cancel();
      };
   }, [id]);

   const { name } = newsData;

   return (
      <HomeWrapper>
         <h1>News {id}</h1>
         {newsData ? <h2>{name}</h2> : <h2>loading...</h2>}
         {error && <h2 id="error">{error}</h2>}
      </HomeWrapper>
   );
};

export default News;
