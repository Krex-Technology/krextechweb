import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
    line-height: 2.5rem;
    background: #e1e7ed;
    background: #fafafc;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: ${({ theme }) => theme.colors?.side};
    position: relative;
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
     display: none;
     justify-content: center;
     align-items: center;
     position: fixed;
     top: 2rem;
     z-index: 99;

     @media screen and (max-width: 790px){
      display: flex;
     }
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

  #error{
    color: ${({ theme }) => theme.colors?.red};
  }

  .navcontents{
      display: none;
      justify-content: space-around;
      position: fixed;
      background: ${({ theme }) => theme.colors?.side};
      fill-opacity: 1;
      color: ${({ theme }) => theme.colors.white};
      background: black;
     fill-opacity: 1;
     opacity: 0.7;
      top: 0rem;
      left: 0rem;
      width: 100%;
      height: 100vh;
      text-align: center;
      padding: 10vh 0;
      /* max-width: 250px; */
      /* border-radius: 50px; */
    
    h4, a{
       display: inline;
       margin: 1rem;
       font-weight: 500;
       color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (max-width: 790px){
      display: flex;
      flex-direction: column;
     }
   }

  .footer{
    width: 100vw;
    padding: 4rem 1rem;
    text-align: center;
    background:  ${({ theme }) => theme.colors.side};
    color:  ${({ theme }) => theme.colors.white};
    
    h4{
      width: 80%;
      margin: 0 auto 1rem;
      text-align: center;
    }
    
    p{
      width: 90%;
      margin: auto;
      text-align: center;
    }
  }

  .navBar{
    width: 100%;
    position: fixed;
    top: 0;

    .width{      
    margin: auto;    
    color: ${({ theme }) => theme.colors.side};
    width: 90%;
    padding: 1.5rem 0rem;
    display: flex;    
    max-width: 1470px;
    align-items: center;
    justify-content: space-between;
    }


    h1,p{
      margin: 0;
    }

    .links{
      display: flex;
      justify-content: space-around;
      width: 100%;
      max-width: 700px;
      
      h4{
        a,p{
          color: ${({ theme }) => theme.colors.side};
        }
      }
    }

    @media screen and (max-width: 790px) {
      display: none;
    }
  }

  .scrolling{
    background: black;
    fill-opacity: 1;
    opacity: 0.7;
    z-index: 888;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    span{
      p, h1{
        color: ${({ theme }) => theme.colors.white};
      }
    }

    h1,p{
      a{
          color: ${({ theme }) => theme.colors.white};
        }
    }

    .links{
      color: ${({ theme }) => theme.colors.white};
      h4,p{
        a,p{
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }

    button{
      color: ${({ theme }) => theme.colors.side};
      background: ${({ theme }) => theme.colors.white};
    }
  }
  
`;

export { GlobalStyles };
