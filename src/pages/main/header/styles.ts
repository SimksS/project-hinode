import styled from "styled-components";

export const SHeader = styled.header`
    width: 100%;
    font-family: 'Open Sans', sans-serif;

    /*Extreme Top Menu Header */
    .header__top{
        display: grid;
        grid-template-columns: 80% 5% 5%;
        background-color: #FDFDFD;
        white-space: nowrap;
        fill-opacity: 0.2;
        align-items: center;
        font-size: 10px;
        width: 80%;
        justify-content: space-between;
        margin: 0 auto;
        padding-top: 9px;
    }
   
    .header__top a{
        color: #333333;
        margin: 7.5px;
        text-decoration: none;
        width: fit-content;
        height: fit-content;
        margin: 0;
        padding: 0;
    }
    .header__top a:nth-child(2){
        font-weight: 700;
        text-decoration: underline;
        justify-self: flex-end;
        display: flex;
        gap: 8.55px;
        align-self: flex-end;
    }
    .header__top a:nth-child(3){
        justify-self: center;
    }
    p{
        margin: 0;
    }


    /* Center menu header */
    .header__center a{
        width: fit-content;
    }
    .header__center{
        width: 80%;
        margin: 23px auto ;
        display: flex;
        justify-content: space-between;
        gap: 26px;
        align-items: center;
    }
    .header__center a img{
        width: 216px;
        height: 45px;
    }
    .input__place{
        display: flex;
        align-items: center;
        background-color: #E1DCD5;
        border-radius: 100px;
    }
    
    .input__place input{
        width: 336px;
        border: none;
        margin: 9px 0 9px 23px;
        padding: 0;
        background-color: transparent;
        outline: none;
    }
    .input__place input::placeholder{
        color: #333333;
        font-size: 12px;
        font-weight: 600; 
    }
    .input__place a{
        color: #000000;
        margin-right: 20.5px;
    }

    
    .users__menu{
        width: 480px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    .users__menu img:first-child{
        width: 16px;
        height: 21px;
        margin-right: 7px;

    }
    .users__menu .welcome-text{
        margin-right: auto;
    }
    .users__menu .fav-button{
        margin-right: auto;
    }
    .users__menu div{
        display: flex;
        align-items: center;
    }
    .users__menu div:first-of-type{
        display: block;
        flex-wrap: nowrap;
        width: fit-content;
        height: fit-content;
    }
    .users__menu div a {
        text-decoration: none;
        color: #333333;
        font-size: 12px;
        font-weight: 600;
    }
    .users__menu div p{
        font-size: 12px;
        width: fit-content;
        display: flex;
        gap: 2px;
    }

    .users__menu div p:first-child{
        font-size: 9px;  
    }
    .users__menu div svg{
        margin-right: 5px;
        width: fit-content;
    }

    .users__menu div:last-child svg{
        color: #AA8232;
    }

    .icon-notification{
        display: flex;
        align-items: center;
        margin-right: 0;
        
    }
   
    .icon-notification span{
          background-color: #B90032;
          width: 14px;
          height: 14px;
          color: white;
          font-size: 9px;
          text-align: center;
          line-height: normal;
          border-radius: 100%;
          position: absolute;
          margin-left: -8px;
      }
    
  

      /* HEADER BOTTOM MENU */
    .header__bottom{
        width: 1440px;
        height: 49px;
        background-color: #AA8232;
        align-items: center;
        display: flex;
        justify-content: space-between;
        
    }
    .header__bottom a{
        color: #FFFFFF;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 16px;
        transition: all 0.5s ease-in-out;
    }
    .header__bottom a:hover{
        color: #333333;
        padding: 12px;
        border-radius: 8px;
    }
    .header__bottom a:first-child{
        margin-left: 10%;
    }
    .header__bottom a:last-child{
        margin-right: 10%;
    }
    

`