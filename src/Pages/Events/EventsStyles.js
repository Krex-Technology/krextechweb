import styled from "styled-components";

export const EventsWrapper = styled.div`
   width: 90%;
   max-width: 1470px;
   margin: auto;
   padding: 8rem 0 0 0;
   position: relative;

   #timer {
      font-size: 3em;
      color: ${({ theme }) => theme.colors?.side};
      text-align: center;
      font-weight: 100;
      text-shadow: 0 0 1px #48c8ff;

      div {
         display: inline-block;
         min-width: 90px;

         span {
            color: #b1cdf1;
            display: block;
            font-size: 0.35em;
            font-weight: 400;
         }
      }
   }

   .info- {
      text-align: center;
      font-weight: 100;
   }

   @media screen and (max-width: 790px) {
      width: 98%;

      h1 {
         margin-bottom: 1rem;
      }
   }
`;
