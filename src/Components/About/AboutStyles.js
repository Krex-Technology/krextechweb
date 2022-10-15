import styled from "styled-components";

export const AbtWrapper = styled.div`
   margin: 5rem auto;
   display: flex;
   justify-content: space-between;
   /* align-items: center; */
   /* background: green; */
   color: ${({ theme }) => theme.colors.side};
   height: 500px;

   .area {
      width: 46%;
      max-width: 500px;
   }

   .blue {
      background: ${({ theme }) => theme.colors.side};
      height: 300px;
      position: relative;
   }

   .transform {
      transform: translateY(30px);
      position: absolute;
      right: 0;
      width: 85%;

      img {
         object-fit: cover;
         height: 99.3%;
         width: 100%;
      }
   }

   .about {
      padding: 2rem 0;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .div {
         width: 80px;
         height: 4px;
         background: #2cadf8;
      }

      h1 {
         font-size: clamp(1.1rem, 10vw, 1.6rem);
         margin-bottom: 1rem;
      }

      .years {
         width: 100%;
         padding: 1rem 2rem;
         border-radius: 10px;
         background: ${({ theme }) => theme.colors.side};
         box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
         color: ${({ theme }) => theme.colors.white};
         margin-bottom: 2rem;

         .exp {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 90%;

            h1 {
               font-size: clamp(1.1rem, 10vw, 1.6rem);
               color: ${({ theme }) => theme.colors.white};
            }

            p {
               text-transform: capitalize;
            }

            .year {
               line-height: 1.6;
            }
         }
      }

      .phone {
         width: 100%;
         padding: 2rem 3rem;
         border-radius: 10px;
         background: ${({ theme }) => theme.colors.side};
         box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

         a {
            color: ${({ theme }) => theme.colors.white};
         }

         @media screen and (max-width: 900px) {
            padding-bottom: 0rem;
         }
      }
   }

   @media screen and (max-width: 1100px) {
      padding: 2rem;
   }

   @media screen and (max-width: 900px) {
      margin: 0.5rem auto;
      display: block;
      padding: 0.5rem;

      h1,
      .div {
         margin-bottom: 0.5rem;
      }

      p {
         margin-bottom: 3rem;
         font-size: 15px;
      }

      .years {
         margin-bottom: 1.5rem;
         width: 100%;

         .exp {
            width: 100%;
            .year {
               width: 105%;
               /* background: green; */
            }
         }
      }

      p,
      .exp {
         text-transform: capitalize;
      }

      .area,
      .about {
         width: 100%;
         margin: 2rem 0 3rem;
      }

      .blue {
         .transform {
            width: 100%;
            /* height: 500px; */
         }
      }
      .area {
         margin: 0 auto 4rem;
         align-items: center;
         .blue {
            padding: 1rem 2rem 0 0;
         }
      }
   }

   @media screen and (max-width: 600px) {
      transform {
         width: 100%;
         /* height: 550px; */
      }
   }
`;
