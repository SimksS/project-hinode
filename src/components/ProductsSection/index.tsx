import Product from "../Product";
import { ReactNode } from "react";
import arrLeft from "./icon/arrow-left-gray.svg"
import arrRight from "./icon/arrow-right-gray.svg"
import {SProductsSection} from "./styles"
import goldDot from "../../pages/main/main/img/gold-dot.svg"

interface ISection {
  product_list: {
    product_name: string;
    original_price: string | null;
    discount_price: string;
    discount_price_cents: string;
    discount_price_percent: string | null;
    product_quantity: string | null
    product_img: string;
  }[];
  children?: ReactNode;
}

const ProductsSection = ({ product_list, children }: ISection) => {
  return (
    <SProductsSection className="product-section-unity">
  
          <img className="arrow-l arrow" src={arrLeft} alt="" />
          <img  className="arrow-r arrow" src={arrRight} alt="" />
      {
        children
        ? children
        : ""
      }
      <div className="product-list">
        {
          product_list.map((item, index) => (
            <Product
              key={index}
              product_name={item.product_name}
              original_price={item.original_price ? item.original_price : ""}
              product_img={item.product_img}
              product_quantity={item.product_quantity? item.product_quantity : ""}
              discount_price={item.discount_price}
              discount_price_cents={item.discount_price_cents}
              discount_price_percent={
              item.discount_price_percent ? item.discount_price_percent : ""
              }
            />
          ))
        }
      </div>
      <img className="gold-dot" src={goldDot} alt="gold-dot" />
      ;
    </SProductsSection>
  );
};

export default ProductsSection;
