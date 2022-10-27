import styled from "styled-components";

export const EventsWrapper = styled.div`
   width: 90%;
   max-width: 1470px;
   margin: 4rem auto;
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

   p {
      margin: 1rem auto;
      text-align: center;
      text-transform: capitalize;
      font-weight: 500;
   }

   .info- {
      text-align: center;
      font-weight: 100;
   }

   .gridwrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      .container {
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 5px;
         width: 100vw;
         height: 400px;
         /* height: 60vmin; */
      }
      img {
         flex: 1;
         height: 100%;
         object-fit: cover;
         overflow: hidden;
         filter: grayscale(100%) brightness(75%);
         transition: all 0.5s;
      }
      img:hover {
         flex: 8;
         filter: grayscale(0%) brightness(115%);
      }
   }

   @media screen and (max-width: 790px) {
      width: 98%;

      h3 {
         margin-bottom: 1rem;
         line-height: 1.3;
      }
   }
`;
