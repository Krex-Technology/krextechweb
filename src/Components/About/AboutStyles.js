import styled from "styled-components";

export const FlexWrap = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   align-content: center;
   align-items: center;
   margin: 4rem 0 0;
   padding: 0;

   h1 {
      font-size: clamp(1rem, 4vw, 2rem);
      margin-bottom: 1rem;
      font-weight: 600;
   }

   ul,
   .years,
   .phone {
      background: ${({ theme }) => theme.colors?.side};
      color: ${({ theme }) => theme.colors?.white};
      margin: 0 0 3rem;
      padding: 2rem;
      border-radius: 5px;

      h1,
      a {
         color: ${({ theme }) => theme.colors?.white};
      }
   }
   .years,
   .phone {
      margin-bottom: 2rem;
   }

   li {
      list-style: none;
   }

   h3,
   p,
   li {
      font-size: clamp(1.3rem, 2vw, 1.5rem);
      line-height: 1.9;
      font-weight: 400;
   }
   .div {
      width: 100px;
      background: ${({ theme }) => theme.colors?.side};
      height: 4px;
   }

   .cont {
      width: 50%;
      height: 100%;
      max-height: 500px;

      img {
         width: 100%;
         object-fit: cover;
      }
   }

   @media screen and (max-width: 790px) {
      .cont {
         width: 100%;
      }
      display: block;
   }
`;

export const AbtWrapper = styled.div`
   width: 50%;
`;
