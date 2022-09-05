import fStars from "./icon/five-stars.svg"
import { SAdsProduct } from "./styles"

interface IAds{
    product_name: string
    product_quantity: string
    product_price: string
    product_price_cents: string
    product_installment: string
    product_img: string
}


const AdsProduct = ({product_name,
    product_quantity,
product_price,
product_price_cents,
product_installment,
product_img}:IAds) => {
    return(
        <SAdsProduct className="advertising-itens">
          <div className="ads-product">
            <img src={product_img} alt="" />
            <div className="product-info">
              <p className="product-title">{product_name}</p>
              <p className="product-title">{product_quantity}</p>
              <img src={fStars} alt="five-stars" />
              <p className="product-price">{product_price}<span>{product_price_cents}</span></p>
              <p>{product_installment}</p>
            </div>
            <button className="buy-btn">COMPRAR</button>
          </div>

        </SAdsProduct>
    )
}
export default AdsProduct