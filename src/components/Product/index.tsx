import { ProductItem } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";
import stars from "../../stars.svg";

export interface IProducts {
    [x: string]: any;
    original_price?: string |  null,
    product_img: string,
    product_name: string ,
    discount_price: string,
    discount_price_cents: string,
    discount_price_percent?: string
    product_quantity?: string
}

const Product = ({ 
    original_price,
    product_img,
    product_name,
    discount_price,
    discount_price_cents,
    discount_price_percent,
    product_quantity
 }:IProducts) => {
  return (
    <ProductItem> 
      <div className="product__img">
        <div className="product__img-top">
          {discount_price_percent 
          ? <p>{discount_price_percent}</p>
           : ""}
          <AiOutlineHeart />
        </div>
        <img src={product_img} alt={product_name} />
      </div>
      <p className="title-product">{product_name}</p>
      {
        product_quantity?
        <p className="title-product">{product_quantity}</p> : ""
      }
      <img src={stars} className="stars" alt="estrelas para avaliação do produto" />
      {
        original_price
        ? <p className="product_original-price"><s>{original_price}</s></p>
        : ""
      }
      <p className="product__price">{discount_price}<span>{discount_price_cents}</span></p>
      <button className="btn-buy">comprar</button>
    </ProductItem>
  );
};

export default Product;
