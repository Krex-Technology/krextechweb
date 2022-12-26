import styled from "styled-components";

export const Wrapper = styled.div`
   width: 90%;
   max-width: 1470px;
   margin: auto;
   padding: 9rem 0 0 0;

   h3 {
      text-align: center;
      margin-bottom: 10px;
   }

   strong {
      text-decoration: underline;
   }

   ol {
      li {
         margin: 1rem 0;
         line-height: 1.8;
      }
   }

   .sub {
      margin-left: 2rem;
   }

   .h4 {
      text-align: center;
   }

   @media screen and (max-width: 790px) {
      width: 98%;

      .sub {
         margin-left: 0.7rem;
      }
   }
`;
