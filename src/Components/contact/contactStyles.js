import Styled from "styled-components";

export const ContactWrapper = Styled.div`
margin: 12rem auto 6rem;
  width: 90%;
  max-width: 1470px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  .contentWrapper{
    width: 100%;
    height: 89%;
    max-height: 935px;
    display: flex;
    background: white;
    border-radius: 7px;
    
    .mapwrapper{
      filter: brightness(80%);
      width: 50%;
      
      .iframe{
        width: 100%;
        height: 100%;
        border-radius: 7px 0 0 7px ;
        filter: brightness(90%);
      }
    }

    .form{
      padding: 6rem 5rem;
      width: 50%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;


      h1 {
         font-size: clamp(1rem, 5vw, 3rem);
      }
      
      form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .img{
        height: 50px;
      }

      input, textarea, span{
      margin-bottom: 2rem;
      width: 100%;
    }
    }


    @media screen and (max-width: 900px) {
        display: block;
        margin: 0;
        padding: 1rem;
        height: auto;
        background: transparent;
        padding: 0;

        .mapwrapper{
          width:100%;
          height: 400px;
          border-radius:0;
          padding: 0.5rem;
          
          .iframe{
            border-radius:0;
          }
        }
        
        .form{
          border-radius:0;
          width: 100%;
          padding: 0.5rem;
          /* background: white; */
        }
     }
  }


`;
