import styled from "styled-components"

export const ProductItem = styled.div`
    width: 266px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .product__img{
        overflow: hidden;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(247, 247, 247, 0.5);;
        margin-bottom: 1rem;
        align-self: center;
    }
    .product__img-top{
        display: flex;
        width: 100%;
        justify-content: flex-end;
      
    }
    .product__img-top p{
        color: white;
        background-color: #CF960D;
        padding:  0 4px;
        font-size: 14px;
        font-weight: 700;
    }
    .product__img-top svg{
        margin-left: auto;
    }
    
    .product__img img{
        width: 210px;
        height: 210px;
        transition: all 0.5s ease-in-out;
    }
    .product__img img:hover{
        transform: scale(1.1);
    }
    .stars{
        margin: 8px 0 0;
    }
    
    .title-product{
        font-family: 'Oswald', sans-serif;
        font-size: 15px;
    }

    .product_original-price{
        font-size: 14px;
        color: #828282;
       margin: 16px 0 6px;
    }
    .product__price{
        font-size: 22px;
        font-weight: 700;
        display: flex;
        align-items: flex-start;
        margin-top: auto;
    }
    .product__price span{
        font-size: 14px;
    }
    p{
        margin: 0;
    }

    .btn-buy{
        margin-top: 1rem;
        background-color:transparent;
        width: 100%;
        padding: 20px 0;
        border: 1px solid #F2994A;
        color: #F2994A;
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.7s  ease-in-out;
    }
    .btn-buy:hover{
        background-color: #F2994A;
        color: white;
    }


`