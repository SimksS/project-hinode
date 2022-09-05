import styled from "styled-components";

export const SProductsSection =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    /* CARROUSSEL BUTTONS */
    .arrow{
        transition: all 0.3s ease-in-out;
        position: absolute;
        width: 25px;
        margin-top: auto;
        margin-bottom: auto;
        height: 40px;
    }
    .arrow:hover{
        transform: scale(1.1);
    }
    .arrow-l{
        left: 0;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 38px;
    }
    .arrow-r{
        right: 0;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 60px;
    }

    
     .product__section-title{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        width: 80%;
        margin: 96px auto 0;
    }
    .product__section-title h2{
        align-self: center;
        font-family: 'Oswald', sans-serif;
        font-weight: 300;
        font-size: 46px;
        letter-spacing: 3px;
    }
    .product__section-title div{
        display: flex;
        font-size: 12px;
        font-weight: 600;
        gap: 5px;
        text-decoration: underline;
        align-items: center;
    }
    .product-list{
        width: 80%;
        margin: 50px auto 40px ;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }
    .gold-dot{
        align-self: center;
    }


`