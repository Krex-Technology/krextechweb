// import React, { useState, useEffect } from "react";
import { PeopleWrapper } from "./PeopleStyles";
import md from "../../assets/images/wwwww.webp"
import bas from "../../assets/images/wwwwww.webp"
// import axios from "axios";

const People = () => {
   // const [csvFileData, setCsvFileData] = useState([]);

   // const url = "https://jsonplaceholder.typicode.com/users";

   // useEffect(() => {
   //    axios
   //       .get(url)
   //       .then(function (response) {
   //          setCsvFileData(response.data);
   //       })
   //       .catch(function (error) {
   //          console.log(error);
   //       })
   //       .finally(function () {
   //          console.log("executed");
   //       });
   // }, []);

   // const csvString = [
   //    ...csvFileData.map((item) => [
   //       item.id,
   //       item.name,
   //       item.username,
   //       item.email,
   //    ]),
   // ];

   // function download_csv_file() {
   //    var csv = "ID,NAME,USERNAME,EMAIL\n";
   //    csvString.forEach(function (row) {
   //       csv += row.join(",");
   //       csv += "\n";
   //    });

   //    let hiddenElement = document.createElement("a");
   //    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);

   //    //provide the name for the CSV file to be downloaded
   //    hiddenElement.download = "My DB Data.csv";
   //    hiddenElement.click();
   // }

   return (
      <PeopleWrapper>
         {/* <h1>People</h1>
         <button onClick={download_csv_file}> Download CSV </button> */}

         <div className="container">
            <div className="heading-title">
               <h3>Meet Our Team </h3>
            </div>
            <br />
            <p>
               The Company activities are pioneer by the MD/CEO, Mr. Ayodeji
               Odunukan who has over 15 years in Information Technology and
               brings his wealth of experience to the Company. Mr. Elias Bassey,
               Head of Finance has over 18 years working experience in various
               industries and sectors of the economy. Finally, the Head of
               HR/Admin Mrs. Ololade Odunukan who is a Licensed HR Practitioner.
               We are a company for excellence and will expect the best as you
               join our family.
            </p>
            <br />
            <div className="flex">
               <div className="col-md-4 col-sm-4">
                  <div className="team-member">
                     <div className="team-img">
                        <img
                           src={md}
                           alt="Managing Director"
                        />
                     </div>
                  </div>
                  <div className="team-title">
                     <h4>Ayodeji Odunukan</h4>
                     <p>Managing Director</p>
                  </div>
               </div>

               <div className="col-md-4 col-sm-4">
                  <div className="team-member">
                     <div className="team-img">
                        <img
                           src="https://image.freepik.com/free-photo/elegant-man-with-thumbs-up_1149-1595.jpg"
                           alt="team member"
                        />
                     </div>
                  </div>
                  <div className="team-title">
                     <h4>Franklin Harbet</h4>
                     <p>HR Manager</p>
                  </div>
               </div>

               <div className="col-md-4 col-sm-4">
                  <div className="team-member">
                     <div className="team-img">
                        <img
                           src={bas}
                           alt="Bassey Elias"
                        />
                     </div>
                  </div>
                  <div className="team-title">
                     <h4>Bassey Elias</h4>
                     <p>Head of Finance / Banking operations</p>
                  </div>
               </div>
            </div>
         </div>
      </PeopleWrapper>
   );
};

export default People;
