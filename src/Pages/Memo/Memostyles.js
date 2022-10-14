import styled from "styled-components";

export const Wrapper = styled.div`
   width: 100%;
   padding: 6rem 7%;

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
      padding: 6rem 4%;

      .sub {
         margin-left: 0.7rem;
      }
   }
`;
