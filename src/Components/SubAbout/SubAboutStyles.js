import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 600px;
   margin: 6rem auto 0rem;

   .abt {
      width: 100%;
      max-width: 650px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h1 {
         font-size: clamp(1rem, 5vw, 3rem);
      }

      h3 {
         font-weight: 400;
         line-height: 1.6;
      }

      ul {
         margin: 0;

         li {
            margin-bottom: 1rem;
            padding: 0;
         }
      }
   }

   .holdertwo {
      width: 100%;
      max-width: 650px;
      height: 100%;
      max-height: 550px;
      display: flex;
      justify-content: center;
      align-items: center;

      .img {
         width: 100%;
         height: 350px;
         margin: auto;
         border-radius: 50%;
         display: flex;
         justify-content: center;
         align-items: center;

         h1 {
            width: 80%;
            max-width: 350px;
            font-size: clamp(6rem, 8vw, 15rem);
            text-align: center;
            animation: floating 2s ease-in-out infinite;
            line-height: 0.3;
            font-weight: 100;
            margin: 0;
            padding: 0;

            .sec {
               font-size: clamp(2rem, 10vw, 3rem);
               font-weight: 400;
            }

            .jb {
               font-size: clamp(3rem, 10vw, 3.5rem);
               font-weight: 500;
            }
         }
      }
   }

   @media screen and (max-width: 900px) {
      display: block;
      margin: 0;
      padding: 1rem;
      height: auto;
   }

   @media screen and (max-width: 650px) {
      .holdertwo {
         .img {
            width: 100%;
            height: 270px;

            h1 {
               line-height: 0.7;
            }
         }
      }
   }

   @keyframes floating {
      0% {
         transform: translatey(0px);
      }

      50% {
         transform: translatey(-50px);
      }

      100% {
         transform: translatey(0px);
      }
   }
`;
