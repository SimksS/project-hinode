import styled from "styled-components";

export const SMain  = styled.main`
      font-family: 'Open Sans', sans-serif;

      /* MAIN TOP ADS */
      .main__top{
          width: 100%;
        }
        .title__font-Playfair{
            font-family: 'Playfair Display', serif;
            font-size: 75px;
            word-break: break-all;
            color: white;
            width: 514px;
            margin: 0;
        }
        .main__top-adversting div:nth-child(2){
        position: absolute;
        top: 21.5em;
        margin-left: 855px;
        margin-right: 72px;
    }
    .main__top-adversting div:nth-child(2) button{
        margin-top: 31px;
        background-color: transparent;
        border: 1px solid white;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 12px;
        text-transform: uppercase;
        color: white;
        padding: 1rem 0;
        cursor: pointer;
        width: 171px;
    }
    .main__top-adversting div:nth-child(2) button:hover{
        transform: scale(1.2);
        background-color: #F2994A;
        border: none;
    }

    
    .main__top-adversting div:nth-child(3){
        position: absolute;
        width: 1340px;
        display: flex;
        justify-content: space-between;
        margin-left: 40px;
        align-items: center;
        top: 35em;
        cursor: pointer;
    }
    .main__top-adversting div:nth-child(3) img:hover{
        transform:scale(1.2);
    }

    .main_top-dotted{
        position: absolute;
        top: 58rem;
        right: 45rem;
    }

    /* MAIN CENTER - PRODUCTS SECTION */

    .product__section-name {
        font-family: 'Oswald', sans-serif;
        font-size: 46px;
        letter-spacing: 3px;
        font-weight: 300;
        text-transform: uppercase;
        margin: 76px auto 0;
        text-align: center;
    }


    .product__section-interest{
        display: flex;
        position: relative;
        width: 80%;
        height: fit-content;
        margin: 50px auto 117px;
        justify-content: space-between;
    }

    .product__section-ads img{
        height: 574px;
        width: 267px;
    }

    .product__section-ads{
        position: relative;
        height: 574px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .product__section-ads .section-title{
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
        font-family: 'Oswald', sans-serif;
        font-size: 23px;
        color: #FFFFFF;
        transition: all 0.5s ease-in-out;
        padding-bottom: 32px;
        box-shadow: 0 0 1em  rgba(0, 0, 0, );
        background-color: rgba(0, 0, 0, 0.01);
    }
    .section-title h3{
        font-weight: 400;
        letter-spacing: 3px;
        margin: 0;
        text-shadow: 5px  5px 30px rgba(0, 0, 0, 0.57);
    }
    .product-section-unity:last-child{
        background-color: #F8F8F8;
    }
    .blur-overflow{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: linear-gradient(181.19deg, rgba(0, 0, 0, 0.18) 1.02%, 
        rgba(0, 0, 0, 0.57) 28.75%, rgba(0, 0, 0, 0.74)
         67.96%, rgba(0, 0, 0, 0.71) 101.26%);
        opacity:0;
        z-index: 10;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
    }
    .blur-overflow h3{
        font-family: 'Oswald', sans-serif;
        font-size: 32px;
        color: white;
        font-weight: 400;
        margin: 0
    }
    .blur-overflow h3:last-of-type{
        margin-bottom: 21px;
    }
    .blur-overflow a{
        color: white;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        letter-spacing: 2px;
    }
    .product__section-ads:hover .blur-overflow{
        opacity: 1;
    }

    .product__section-ads:hover .section-title{
        opacity: 0;
    }
    /* ADS BIG SIZE */
    .products__ads-container{
        width: 100%;
        position: relative;
    }
    .ads-products{
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: 0 auto;
        position: relative;
    }
    .grayArrow{
        position: absolute;
        z-index: 15;
    }
    .arrow-l{
        margin-left: 40px;
        top: 0;
        margin-top: 25%;
        left: 0;
    }
    .arrow-r{
        margin-right: 60px;
        margin-top: 25%;
        top: 0;
        right: 0;
    }
    .g-dot{
        display: block;
        margin: 40px auto 0;
    }
    .ads-info{
        position: absolute;
        margin: 205px 145px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
    }
    .ads-info h2{
        font-size: 85px;
        font-family: 'Playfair Display', serif;
        color: white;
        margin: 0;
    }
    .ads-info p:last-of-type{
        color: white;
        width: 527px;
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        word-break: keep-all;
    }
    .ads-info button{
        background-color: transparent;
        border: 2px solid white;
        font-size: 12px;
        color: white;
        padding: 17px  0;
        width: 236px;
        font-family: 'Open Sans', sans-serif;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    }
    .ads-info button:hover{
       background-color: #F2994A;
    }
    .ads__banner-empire{
        display: flex;
        gap: 49px;
        align-items: center;

    }
    .ads__banner-empire h2{
        font-family: 'Playfair Display', serif;
        font-size: 85px;
        margin: 0;
    }
    .ads__banner-empire .product-info button{
        background-color: black;
        color: white;
        font-family: 'Open Sans', sans-serif;
        padding: 16px 6.5px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    }
    .ads__banner-empire .product-info{
       background-color:  rgba(247, 247, 247, 0.4);
       width: 100%;
       height: 100%;
    }
    .ads-description{
        width: 441px;
        text-align: left;
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        line-height: 33px;
    }
    .ads__banner-empire .product-info button:hover{
         transform: scale(1.1);
    }
`