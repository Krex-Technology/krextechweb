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
    width: 100%;
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
    }
  }
  
}

@media screen and (max-width: 799px) {
  margin: 7rem auto 6rem;
  width:100%;
}

`;

export const OfficesWrapper = Styled.div`
width: 90%;
max-width: 1470px;
margin: auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 3rem;

.card{
  width: 100%;
  background: #eeeeee;
  padding: 2rem 2.5rem;
  border-radius: 5px;
}

/* .card:hover{
         background: ${({ theme }) => theme.colors?.side};
         color: ${({ theme }) => theme.colors?.white};
         transform: scale(1.05);
         box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
         -webkit-transform: scale3d(1.2, 1.2, 1);
         transform: scale3d(1.05, 1.05, 1);
         transition: all 0.5s linear;
      } */

@media screen and (max-width: 799px) {
  width:100%;
  grid-template-columns: repeat(1, 1fr);
}

`;
