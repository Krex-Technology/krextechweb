import React, { useState, useEffect } from "react";
import { HomeWrapper } from "../Home/HomeStyles";
import axios from "axios";

const People = () => {
   const [csvFileData, setCsvFileData] = useState([]);

   const url = "https://jsonplaceholder.typicode.com/users";

   useEffect(() => {
      axios
         .get(url)
         .then(function (response) {
            setCsvFileData(response.data);
         })
         .catch(function (error) {
            console.log(error);
         })
         .finally(function () {
            console.log("executed");
         });
   }, []);

   const csvString = [
      ...csvFileData.map((item) => [
         item.id,
         item.name,
         item.username,
         item.email,
      ]),
   ];

   function download_csv_file() {
      var csv = "ID,NAME,USERNAME,EMAIL\n";
      csvString.forEach(function (row) {
         csv += row.join(",");
         csv += "\n";
      });

      let hiddenElement = document.createElement("a");
      hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);

      //provide the name for the CSV file to be downloaded
      hiddenElement.download = "My DB Data.csv";
      hiddenElement.click();
   }

   return (
      <HomeWrapper>
         <h1>People</h1>
         <button onClick={download_csv_file}> Download CSV </button>
      </HomeWrapper>
   );
};

export default People;
