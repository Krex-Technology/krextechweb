import styled from "styled-components";

export const HomeWrapper = styled.div`
   width: 90%;
   max-width: 1470px;
   margin: auto;
   padding: 8rem 0 0 0;
   position: relative;

   .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* background: red; */

      .first-child {
         /* background: red; */
         width: 100%;
         h1{
          line-height: 1;
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
     font-size: clamp(1rem, 3vw, 2rem);
     color: ${({ theme }) => theme.colors?.side};
    }
    
    .imgWrapper {
     filter: brightness(70%);
      width: 100%;
      max-width: 740px;
      height: 640px;
      display: flex;
      justify-content: end;

      img {
         width: 80%;
         object-fit: cover;
         /* animation-name: spin;
         animation-duration: 30000ms;
         animation-iteration-count: infinite;
         animation-timing-function: linear; */
      }
   }

   @media screen and (max-width: 790px) {
      width: 98%;

      .top{
        display:block;
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
