import styled from "styled-components";

export const HomeWrapper = styled.div`
   width: 90%;
   max-width: 1470px;
   margin: 6rem auto;
   padding: 6rem 0 0 0;
   position: relative;

   .top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .first-child {
         width: 100%;
         h1 {
            line-height: 1.25;
         }
      }
   }

   h1 {
      font-size: clamp(3rem, 4vw, 35rem);
      color: ${({ theme }) => theme.colors?.side};
      font-weight: 600;
      margin-bottom: 4rem;
   }

   h2 {
      font-size: clamp(1.17rem, 3vw, 2rem);
      color: ${({ theme }) => theme.colors?.side};
   }

   .imgWrapper {
      width: 100%;
      max-width: 740px;
      display: flex;
      justify-content: end;

      img {
         width: 100%;
      }
   }

   @media screen and (max-width: 790px) {
      width: 98%;
      margin: auto;

      .top {
         display: block;
      }

      h1 {
         margin-bottom: 1rem;
      }
      /* padding: 7rem 0px 3rem 55px; */

      .imgWrapper {
         margin: auto;
         width: 100%;
         text-align: center;
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
