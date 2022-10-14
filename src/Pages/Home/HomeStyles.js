import styled from "styled-components";

export const Wrapper = styled.div`
   width: 90%;
   max-width: 1470px;
   margin: auto;
   padding: 7rem 0 0;
   position: relative;
   /* background: red; */

   h1 {
      font-size: clamp(3rem, 4vw, 35rem);
      color: ${({ theme }) => theme.colors?.side};
      font-weight: 600;
      /* color: ${({ theme }) => theme.colors?.white}; */
   }

   .imgWrapper {
      width: 100%;
      height: 600px;
      display: flex;
      justify-content: end;

      img {
         width: 80%;
         object-fit: cover;
         /* animation-name: spin; */
         /* animation-duration: 30000ms;
         animation-iteration-count: infinite;
         animation-timing-function: linear; */
      }
   }

   @media screen and (max-width: 790px) {
      width: 98%;
      padding: 7rem 0px 3rem 55px;

      .imgWrapper {
         width: 100%;
         img {
            width: 100%;
         }
      }
   }

   /* @keyframes spin {
      from {
         transform: rotate(0deg);
      }
      to {
         transform: rotate(360deg);
      }
   } */
`;
