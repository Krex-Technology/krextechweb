// import React, { useState, useEffect } from "react";
import { PeopleWrapper } from "./PeopleStyles";
import md from "../../assets/images/wwwww.webp";
import bas from "../../assets/images/wwwwww.webp";
import lola from "../../assets/images/lola.webp";
import kay from "../../assets/images/kayy.webp";
import seyi from "../../assets/images/seyi.webp";
import nico from "../../assets/images/nico.webp";
import alex from "../../assets/images/alex.webp";
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

            <p>
               The Company activities are pioneer by the MD/CEO, Mr. Ayodeji
               Odunukan who has over 15 years in Information Technology and
               brings his wealth of experience to the Company. Mr. Elias Bassey,
               Head of Finance has over 18 years working experience in various
               industries and sectors of the economy. Finally, the Head of
               HR/Admin Mrs. Ololade Tikare who is a Licensed HR Practitioner.
               We are a company for excellence and will expect the best as you
               join our family.
            </p>
            <br />
            <div className="flex">
               <div className="col-md-4 col-sm-4">
                  <div className="team-member">
                     <div className="team-img">
                        <img src={md} alt="Managing Director" />
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
                        <img src={lola} alt="Ololade Tikare" />
                     </div>
                  </div>
                  <div className="team-title">
                     <h4>Ololade Tikare</h4>
                     <p>Director of HR/Admin & Strategic Planning</p>
                  </div>
               </div>

               <div className="col-md-4 col-sm-4">
                  <div className="team-member">
                     <div className="team-img">
                        <img src={bas} alt="Bassey Elias" />
                     </div>
                  </div>
                  <div className="team-title">
                     <h4>Bassey Elias</h4>
                     <p>Director of Finance / Banking operations</p>
                  </div>
               </div>
            </div>
            <br />
            <h3 className="cent">Team Leads</h3>
            <br />

            <div className="flex4">
               <div className="col-md-4 col-sm-4">
                  <div className="team-member">
                     <div className="team-img">
                        <img src={kay} alt="Kayode  Ariyo" />
                     </div>
                  </div>
                  <div className="team-title">
                     <h4>Ariyo Kayode Olugbenga</h4>
                     <p>Head of Accounts</p>
                  </div>
               </div>

               <div className="col-md-4 col-sm-4">
                  <div className="team-member">
                     <div className="team-img">
                        <img src={nico} alt="Anozie Nicholas" />
                     </div>
                  </div>
                  <div className="team-title">
                     <h4>Anozie Amuneke Nicholas</h4>
                     <p>Head of IT Department</p>
                  </div>
               </div>

               <div className="col-md-4 col-sm-4">
                  <div className="team-member">
                     <div className="team-img">
                        <img src={seyi} alt="Oluwaseyi Fatumole" />
                     </div>
                  </div>
                  <div className="team-title">
                     <h4>Oluwaseyi Fatumole</h4>
                     <p>Lead Software Engineer</p>
                  </div>
               </div>

               <div className="col-md-4 col-sm-4">
                  <div className="team-member">
                     <div className="team-img">
                        <img src={alex} alt="Oluwaseyi Fatumole" />
                     </div>
                  </div>
                  <div className="team-title">
                     <h4>Alex Ighereje</h4>
                     <p>Head of Admin</p>
                  </div>
               </div>
            </div>
         </div>
      </PeopleWrapper>
   );
};

export default People;
