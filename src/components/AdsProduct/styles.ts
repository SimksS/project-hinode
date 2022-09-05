import styled from "styled-components";

export const SAdsProduct = styled.div`
    position: relative;
    .ads-product{
        position: relative;
    }
    .product-info{
        position: absolute;
        top: 0;
        margin:12px;
        width: 221px;
        background-color: white;
        border-radius:16px;
        padding: 18px 0 23px 15px;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25); ;
    }
    .product-title{
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        font-size: 16px;
    
    }
    .product-info .product-title:nth-child(2){
        margin-bottom: 16px;
    }
    p{
        margin: 0;
        color:black;
    }
    .product-info img{
        margin-bottom: 9px;
    }
    .product-price{
        font-family: 'Rubik', sans-serif;
        font-size: 22px;
        letter-spacing: 1.1px;
        display: flex;
        align-items: flex-start;
    }
    .product-price span{
        font-size: 16px;
    }
    .product-info p:last-child{
        font-family: 'Rubik', sans-serif;
        color: #828282;
        font-size: 10px;
        line-height: 18px;
        margin-top: 5px;
    }
    .buy-btn{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 268px;
        margin: 0 auto 46px;
        background-color: white;
        border: 2px solid #F2994A;
        color: #F2994A;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        padding: 20px 0;
        transition:  all 0.3s ease-in-out;
    }
    .buy-btn:hover{
        background-color: #F2994A;
        color: white;
    }
`