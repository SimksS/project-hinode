import styled from "styled-components";

export const SFooter = styled.footer`
    width: 1440px;

    /* FOOTER  TOPSIDE */
    .section__footer-top{
        width: 1440px;
        height: 152px;
        background-color: #00002D;
        
    }
    form{
        display: flex;
        width: 80%;
        margin: 0 auto;
        padding-top: 32px ;
        justify-content: space-between;
        align-items:  center;
        color: white;
    }
    form input{
        background-color: transparent;
        border: none;
        border-bottom: 2px solid white;
        width: 207px;
    }
    form input::placeholder{
        color: white;
        font-family: "Open Sans", "sans-serif";
        font-size: 14px;
        font-weight: 400 ;
        line-height: 23px;
        padding-bottom: 3px;
    }
    button{
        color: white;
        background-color:#009BAA ;
        border: none;
        padding: 15px 30px;
        font-size: 12px;
        font-weight: 700;
        font-family: "Open Sans", "sans-serif";
    }
   
    /* FOOTER CENTER */
    .section__footer-center{
        background-color: #E1DCD5;
        width: 1440px;
        height: 422px;
    }
    .section__footer-center div{
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }
    .menu-footer{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 71px;
     
        gap: 1px;
    }

    .menu-footer li{
        width: 261px;
        word-break: keep-all;
    }
    .menu-footer li{
        white-space: wrap;
        list-style: none;
  
        
    }
    .menu-footer li a{
        color:#333333;
        text-decoration: none;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.2s ease-in-out;
    }
    .menu-footer li a:hover{
        text-decoration: underline;
    }
    .menu-footer .title{
        color:#333333;
        margin-bottom: 30px;
        font-size: 12px;
        font-weight: 700;
        font-family: "Open Sans","sans-serif";
    }
    .btn-central{
        display: flex;
        flex-direction: row-reverse;
    }
    .text-warning{
        text-align: right;
        font-family: "Open Sans","sans-serif";
        font-size: 12px;
    }
    .social-networks{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
    }
  

`