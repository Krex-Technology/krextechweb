import styled from "styled-components";

export const Wrapper = styled.div`
   margin: 4rem auto;
   display: flex;
   justify-content: space-between;
   color: ${({ theme }) => theme.colors.side};

   .area {
      width: 46%;
      max-width: 500px;
      height: 660px;
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
      height: 630px;

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
         /* background: ${({ theme }) => theme.colors.side}; */
      }

      h1 {
         font-size: clamp(1rem, 3vw, 3rem);
         margin-bottom: 1rem;
      }

      .years {
         display: flex;
         justify-content: space-between;
         width: 100%;
         padding: 1rem 2rem;
         border-radius: 10px;
         background: ${({ theme }) => theme.colors.side};
         box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
         color: ${({ theme }) => theme.colors.white};

         .exp {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 80%;

            h1 {
               font-size: clamp(1.1rem, 10vw, 1.6rem);
               color: ${({ theme }) => theme.colors.white};
               /* color: #22628c;
               color: #2cadf8; */
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
         display: flex;
         width: 100%;
         padding: 2rem 3rem;
         border-radius: 10px;
         background: ${({ theme }) => theme.colors.side};
         box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
         align-items: center;

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

      h2 {
         margin-bottom: 2rem;
      }

      h1,
      .div {
         margin-bottom: 0.5rem;
      }

      p {
         margin-bottom: 3rem;
         font-size: 15px;
      }

      .years {
         margin-bottom: 1.7rem;
         width: 100%;

         .exp {
            width: 100%;
            .year {
               width: 125%;
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
