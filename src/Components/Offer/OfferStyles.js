import styled from "styled-components";

export const Wrapper = styled.div`
   width: 100%;
   text-align: center;

   h3 {
      font-size: clamp(1rem, 7vw, 1.6rem);
      margin: 1.5rem auto;
      max-width: 700px;
      font-weight: 400;
      line-height: 1.5;
   }

   .holder {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-top: 4rem;
      margin: auto;

      .container {
         background: block;
         display: inline-block;
         max-width: 395px;
         min-width: 230px;
         overflow: hidden;
         position: relative;
         text-align: left;
         width: 100%;
         max-height: 450px;
      }

      .container * {
         -webkit-box-sizing: border-box;
         box-sizing: border-box;
         -webkit-transition: all 0.35s ease;
         transition: all 0.35s ease;
      }

      .container p {
         background-color: #000;
         border: 2px solid white;
         color: white;
         font-size: 1.5rem;
         font-weight: 400;
         letter-spacing: 1px;
         margin: 0;
         padding: 10px 15px;
         text-transform: capitalize;
      }

      .container::before,
      .container::after {
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         -webkit-transition: all 0.35s ease;
         transition: all 0.35s ease;
         background: #000;
         border-left: 3px solid black;
         border-right: 3px solid black;
         content: "";
         opacity: 0.9;
         z-index: 1;
      }

      .container::before {
         -webkit-transform: skew(45deg) translateX(-155%);
         transform: skew(45deg) translateX(-155%);
      }

      .container::after {
         -webkit-transform: skew(45deg) translateX(155%);
         transform: skew(45deg) translateX(155%);
      }

      .container img {
         backface-visibility: hidden;
         width: 100%;
         object-fit: cover;
         vertical-align: top;
         height: 100%;
      }

      .container .text {
         top: 50%;
         padding: 1rem;
         font-size: 2rem;
         line-height: 1.5;
         left: 50%;
         width: 80%;
         position: absolute;
         z-index: 5;
         -webkit-transform: translate(-50%, -50%) scale(0.5);
         transform: translate(-50%, -50%) scale(0.5);
         box-shadow: 0 0 10px black;
         opacity: 0;
      }

      .container:hover::before,
      .container.hover::before {
         -webkit-transform: skew(45deg) translateX(-55%);
         transform: skew(45deg) translateX(-55%);
      }

      .container:hover::after,
      .container.hover::after {
         -webkit-transform: skew(45deg) translateX(55%);
         transform: skew(45deg) translateX(55%);
      }

      .container:hover .text,
      .container.hover .text {
         -webkit-transform: translate(-50%, -50%) scale(1);
         transform: translate(-50%, -50%) scale(1);
         opacity: 1;
      }

      @media screen and (max-width: 1100px) {
         grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (max-width: 900px) {
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         gap: 2rem;
         margin-top: 4rem;
         margin: auto;

         .container {
            margin-bottom: 1.5rem;
         }
      }
      @media screen and (max-width: 500px) {
         display: block;
         margin: auto;
      }
   }
`;
