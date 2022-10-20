import styled from "styled-components";

export const FlexWrap = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   /* background: red; */
   align-content: center;
   align-items: center;
   margin: 4rem 0 0;
   padding: 0;

   h1 {
      font-size: clamp(1rem, 4vw, 2rem);
      margin-bottom: 1rem;
      font-weight: 600;
   }

   ul,
   .years,
   .phone {
      background: ${({ theme }) => theme.colors?.side};
      color: ${({ theme }) => theme.colors?.white};
      margin: 0 0 3rem;
      padding: 2rem;
      border-radius: 5px;

      h1,
      a {
         color: ${({ theme }) => theme.colors?.white};
      }
   }
   .years,
   .phone {
      margin-bottom: 2rem;
   }

   li {
      list-style: none;
   }

   h3,
   p,
   li {
      font-size: clamp(1.3rem, 2vw, 1.5rem);
      font-weight: 400;
      line-height: 1.9;
   }

   li {
      line-height: 2.9;
   }
   .div {
      width: 100px;
      background: ${({ theme }) => theme.colors?.side};
      height: 4px;
   }

   .cont {
      width: 50%;
      height: 100%;
      filter: brightness(40%);
      animation: zoom-in-zoom-out 3s ease infinite;
      overflow: hidden;
      /* max-height: 500px; 

      .square {
         width: 200px;
         height: 200px;
         background: grey; */
      /* transform: rotateY(45deg);
      animation: rotateAnimation 1s linear infinite; */

      img {
         width: 100%;
         object-fit: cover;
         animation-name: spin;
         animation-duration: 30000ms;
         animation-iteration-count: infinite;
         animation-timing-function: linear;
      }
   }

   @media screen and (max-width: 790px) {
      .cont {
         width: 100%;
      }
      display: block;
   }

   @keyframes spin {
      from {
         transform: rotate(0deg);
      }
      to {
         transform: rotate(360deg);
      }
   }

   /* @keyframes zoom-in-zoom-out {
      0% {
         transform: scale(0.91, 0.91);
      }
      50% {
         transform: scale(1.1, 1.1);
      }
      100% {
         transform: scale(0.91, 0.91);
      }
   } */

   @keyframes rotateAnimation {
      from {
         transform: rotateY(45deg);
      }
      to {
         transform: rotateY(225deg);
      }
   }
`;

export const AbtWrapper = styled.div`
   width: 50%;

   @media screen and (max-width: 790px) {
      width: 100%;
   }
`;
