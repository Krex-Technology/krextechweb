import styled from "styled-components";

export const PeopleWrapper = styled.div`
   width: 90%;
   max-width: 1470px;
   margin: 6rem auto;
   padding: 5rem 0 0 0;

   .container {
      .heading-title {
         margin-bottom: 3rem;
         text-align: center;
         margin-bottom: 0;
         letter-spacing: 2px;

         h3 {
            font-weight: 600;
            text-transform: uppercase;
         }
      }

      .flex {
         margin: auto;
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         width: 100%;
         gap: 3rem;

         .col-md-4 {
            width: 100%;
            .team-member {
               overflow: hidden;
               .team-img {
                  width: 100%;
                  height: 280px;
                  img {
                     width: 100%;
                     object-fit: cover;
                     height: 100%;
                  }
               }
            }
         }
         p {
            margin: -10px 0;
         }

         @media screen and (max-width: 999px) {
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
         }

         @media screen and (max-width: 599px) {
            grid-template-columns: repeat(1, 1fr);
            padding: 3rem 0;
            width: 100%;
         }
      }
   }

   @media screen and (max-width: 599px) {
      padding: 2.5rem 0;
      width: 98%;
   }
`;
