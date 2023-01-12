import styled from "styled-components";

export const BlogWrapper = styled.div`
   width: 96%;
   margin: 3rem auto;
   margin-bottom: 40px;
   height: 450px;

   /* .wrapp {
      height: 450px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;

      h4 {
         text-align: center;
         height: 100%;
         width: 97%;
         background: ${({ theme }) => theme.colors?.button};
         color: white;
         margin: auto;
      }
   } */

   .card {
      position: relative;
      max-width: 97%;
      /* background-color: #feefde; */
      border-radius: 8px;
      overflow: hidden;
      padding-bottom: 10px;
      box-shadow: 1px 2px 8px rgba(100, 100, 100, 0.1);
      margin: auto;

      .image-wrapper {
         /* background: ${({ theme }) => theme.colors?.side}; */
         width: 100%;
         height: 200px;
         overflow: hidden;
         object-fit: cover;

         img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
         }

         img:hover {
            -webkit-transform: scale3d(1.2, 1.2, 1);
            transform: scale3d(1.2, 1.2, 1);
            transition: all 1s linear;
         }
      }
   }

   .text-box-wrapper {
      padding: 20px;

      h3{
         text-transform: uppercase;
      }
   }

   .heading::after {
      content: "";
      display: block;
      margin-top: 0.5em;
      width: 30px;
      height: 5px;
      background-color: black;
   }

   .button {
      display: inline-block;
      margin-left: 10px;
      font-size: 12px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.side};
      text-decoration: none;
   }

   .button:hover {
      color: black;
      transition: linear 0.2s;
   }
`;
