import styled from "styled-components";

export const BlogWrapper = styled.div`
   width: 96%;
   margin: auto;
   margin-bottom: 40px;

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
      background-color: #feefde;
      border-radius: 8px;
      overflow: hidden;
      padding-bottom: 10px;
      box-shadow: 1px 2px 8px rgba(100, 100, 100, 0.1);
      margin: auto;

      .image-wrapper {
         background: ${({ theme }) => theme.colors?.side};
         width: auto;
         height: 200px;
         overflow: hidden;

         img {
            max-width: 100%;
            height: auto;
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
