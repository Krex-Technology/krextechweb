import styled from "styled-components";

export const SolutionWrapper = styled.div`
   width: 90%;
   max-width: 1470px;
   margin: 6rem auto;
   padding: 4rem 0 0 0;
   position: relative;

   h1 {
      text-align: center;
      margin: auto;
   }

   .divv {
      text-align: center;
      margin: 1.5rem auto;
      height: 4px;
      background: ${({ theme }) => theme.colors?.side};
      width: 70px;
   }

   .sol {
      width: 90%;
      max-width: 750px;
      line-height: 2.1;
      font-weight: 400;
   }

   .solutionsWrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;

      @media screen and (max-width: 790px) {
         grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 500px) {
         grid-template-columns: repeat(1, 1fr);
      }

      .solutionWrapper {
         width: 100%;
         background: #eeeeee;
         padding: 2rem 2.5rem;
         border-radius: 5px;
      }

      .solutionWrapper:hover {
         background: ${({ theme }) => theme.colors?.side};
         color: ${({ theme }) => theme.colors?.white};
         transform: scale(1.05);
         box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
         -webkit-transform: scale3d(1.2, 1.2, 1);
         transform: scale3d(1.05, 1.05, 1);
         transition: all 0.5s linear;
      }
   }

   @media screen and (max-width: 790px) {
      padding: 2.5rem 0;
      width: 97%;
   }
`;
