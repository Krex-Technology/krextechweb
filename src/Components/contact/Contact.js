import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactWrapper, OfficesWrapper } from "./contactStyles";

const Contact = () => {
   const [mailData, setMailData] = useState({
      name: "",
      email: "",
      message: "",
   });
   const { name, email, message } = mailData;
   const [error, setError] = useState(null);
   const onChange = (e) =>
      setMailData({ ...mailData, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
      e.preventDefault();
      if (name.length === 0 || email.length === 0 || message.length === 0) {
         setError(true);
         clearError();
      } else {
         emailjs
            .send(
               "service_xkianv2", // service id
               "template_clairg8", // template id
               mailData,
               "vHJd9ppaDziwlyfHz" // public api
            )
            .then(
               (response) => {
                  setError(false);
                  clearError();
                  setMailData({ name: "", email: "", message: "" });
               },
               (err) => {
                  console.log(err.text);
               }
            );
      }
   };

   const clearError = () => {
      setTimeout(() => {
         setError(null);
      }, 2000);
   };

   return (
      <>
         <ContactWrapper>
            <div className="contentWrapper">
               <div className="mapwrapper">
                  <iframe
                     title="map content"
                     width={100}
                     height={100}
                     className="iframe"
                     id="gmap_canvas"
                     src="https://maps.google.com/maps?q=Iya%20Omolere%20st,%20denukan%20network%20limited%20head%20office&t=&z=17&ie=UTF8&iwloc=&output=embed"
                     frameBorder="0"
                     scrolling="no"
                     marginHeight="0"
                     marginWidth="0"
                  ></iframe>
               </div>
               <div className="form">
                  <form onSubmit={(e) => onSubmit(e)}>
                     <h1>CONTACT US</h1>
                     <span>
                        Mail:
                        <a href="mailto:info@krextech.com"> info@krextech.com</a>
                     </span>
                     <span>
                        Telephone:{" "}
                        <a href="tel:+2347084200305">+234 708 4200 305</a>
                     </span>
                     <input
                        id="name"
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        type="text"
                        className="form-control"
                        placeholder="YOUR NAME"
                        required=""
                     />
                     <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={(e) => onChange(e)}
                        value={email}
                        className="form-control"
                        placeholder="YOUR EMAIL"
                        required=""
                     />

                     <textarea
                        id="comment"
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        className="form-control"
                        placeholder="YOUR MESSAGE"
                        required=""
                        // defaultValue={""}
                        cols={65}
                        rows={5}
                     />
                     <button>send message</button>
                     <div className="form-message">
                        <div
                           className={error ? "empty_notice" : "returnmessage"}
                           style={{
                              display: error == null ? "none" : "block",
                           }}
                        >
                           <span>
                              {error
                                 ? "Please Fill Required Fields"
                                 : "Your message has been received, We will contact you soon."}
                           </span>
                        </div>
                        <span className="output_message text-center font-weight-600 uppercase" />
                     </div>
                  </form>
               </div>
            </div>
         </ContactWrapper>
         <OfficesWrapper>
            <h2>Our Branches Are:</h2>
         </OfficesWrapper>
         <OfficesWrapper>
            <div className="card">
               <h3>Denukan Network Limited, Ojota</h3>
               <a href="http://maps.google.com/maps?q=denukan+network+limited+ojota">
                  <h4>
                     Block 17, Suits 2 Odua international shopping complex,
                     Ojota, Lagos
                  </h4>
               </a>
               <p>Click address to see location on map</p>
            </div>

            <div className="card">
               <h3>Idi-Igba Ilora Oyo Denukan CICS Limited</h3>
               <a href="http://maps.google.com/maps?q=1,+idi-igba,+ilora">
                  <h4>1, Idi-igba, Old Oyo Ibadan Road Ilora Oyo State</h4>
               </a>
               <p>Click address to see location on map</p>
            </div>
         </OfficesWrapper>
         <br />
         <br />
      </>
   );
};

export default Contact;
