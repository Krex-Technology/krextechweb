import styled from "styled-components";

export const BlogWrapper = styled.div`
   width: 96%;
   margin: auto;

   .wrapp {
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
   }
`;
