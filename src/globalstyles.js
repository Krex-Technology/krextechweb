import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

   *,
   *::before,
   *::after {
      box-sizing: border-box;
      font-family: 'Ubuntu', sans-serif;
   }
 
   html {
      font-size: 62.5%;
   }

   body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    width: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    font-size: 1.4rem;
    font-weight: 400;
    /* letter-spacing: 0.02rem; */
    line-height: 2.5rem;
    background: #e1e7ed;
    background: #fafafc;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: ${({ theme }) => theme.colors?.side};
  }
  
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors?.black};
   }

   button, .button{
    border: 0;
    padding: 0;
    cursor: pointer;
    box-sizing: border-box;
    display: inline-block;
    width: 150px;
    text-align: center;
    padding: 1.2rem 2.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.5rem;
    letter-spacing: 0;
    line-height: 1.6rem;
    border-radius: 3px;
    text-transform: capitalize;
    transition: transform 300ms ease-in-out;
    background-color: ${({ theme }) => theme.colors?.side};
    color: ${({ theme }) => theme.colors.white};
   }

   button:hover, .button:hover{
    background-color: ${({ theme }) => theme.colors?.buttonhover};
   }

   input, textarea{
    width: 100%;
    max-width: 560px;
    border: 1px solid grey;
    outline: none;
    font-size: 1.5rem;
    appearance: none;
    border-radius: 0;
    padding: 1.08rem;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors?.grey01};
   }

   input:hover, textarea:hover{
    background-color: ${({ theme }) => theme.colors?.inputhover};
   }

  input::placeholder, textarea::placeholder {
    font-weight: 400;
    opacity: .9;
    font-size: 12px;
    text-transform: capitalize !important;
    color: grey;
  }

  .menu{
     background: ${({ theme }) => theme.colors?.side};
     fill-opacity: 1;
     color: ${({ theme }) => theme.colors.white};
     background: black;
     fill-opacity: 1;
     opacity: 0.7;
     width: 50px;
     height: 50px;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     position: fixed;
     top: 2rem;
    }
    
    .socials{
    height: 30vh;
    background: ${({ theme }) => theme.colors?.side};
    width: 50px;
    position: fixed;
    bottom: 0px;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    padding: 3rem 0;

    a{
      color: ${({ theme }) => theme.colors?.white};
    }
  }

  .navcontents{
      display: flex;
      justify-content: space-around;
      position: fixed;
      background: ${({ theme }) => theme.colors?.side};
      fill-opacity: 1;
      color: ${({ theme }) => theme.colors.white};
      background: black;
     fill-opacity: 1;
     opacity: 0.7;
      top: 2.2rem;
      left: 6rem;
      width: 90%;
      max-width: 250px;
      border-radius: 50px;
    
    h4, a{
       display: inline;
       margin: 1rem;
       font-weight: 400;
       color: ${({ theme }) => theme.colors.white};
    }
   }

   .footer-wrapper{
    background: ${({ theme }) => theme.colors.side};
    margin-bottom: -20rem;
    
    .heading-frame {
      display: grid;
      grid-template-columns: max-content auto;
      grid-template-rows: auto max-content;
      background-size: cover;
      color: white;
      margin: auto;
      height: 250px;
      padding:  2rem 4rem 0;

      &:before,
      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border: 2px solid ${({ theme }) => theme.colors?.primary};
      }
      &:before {
        grid-row: 1 / 2;
        border-right: none;
        border-bottom: none;
      }	
      &:after {
        grid-row: 1 / span 2;
        border-left: none;
      }
      
    }
    .end{
      background: ${({ theme }) => theme.colors.side};
      width: 100%;
      text-align: center;
      color: white;
    }
  }
  
`;

export { GlobalStyles };
