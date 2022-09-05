import girlMakeUp from "./img/girl-top-makeup-ads.png";
import subtitle from "./img/top-subtitle.svg";
import prev from "./img/prev-arrow.svg";
import next from "./img/next-arrow.svg";
import grayPrev from "../../../components/ProductsSection/icon/arrow-left-gray.svg"
import grayNext from "../../../components/ProductsSection/icon/arrow-right-gray.svg"
import { SMain } from "./styles";
import dotted from "./img/dotted.svg";
import AdsProduct from "../../../components/AdsProduct";
import { AiOutlineEye } from "react-icons/ai";
import gDot from "./img/gold-dot.svg";
import ProductsSection from "../../../components/ProductsSection";

import {
  best_sellers,
  most_desired,
  healthy_life,
  body_n_bath,
  body_n_bath_2,
  fragrances,
  fragrances_2,
  arrived,
} from "../../../database/data";

const Main = () => {
  return (
    <SMain>
      {/* Main top Ads */}
      <section className="main__top">
        <div className="main__top-adversting">
          <img src={girlMakeUp} alt="" />
          <div>
            <p className="title__font-Playfair"> Base Líquida DAZZLE</p>
            <button>Comprar</button>
          </div>

          <div>
            <img src={prev} alt="" />
            <img src={next} alt="" />
          </div>
          <img className="main_top-dotted" src={dotted} alt="" />
        </div>
        <img src={subtitle} alt="" />
      </section>
      {/* Main center - PRODUCTS SECTION */}
      <section className="main__center">
        {/* PRODUCT SECTION CALLER */}
        <ProductsSection product_list={best_sellers}>
          <div className="product__section-title">
            <h2>MAIS VENDIDOS</h2>
            <div>
              <AiOutlineEye /> Ver todos
            </div>
          </div>
        </ProductsSection>

        {/* SECTION OF INTERESTS */}
        <h2 className="product__section-name">
          isso pode ser do seu interesse
        </h2>

        <div className="product__section-interest">
          <div className="product__section-ads">
            <div className="blur-overflow">
              <h3 className="section_name">MAQUIAGENS</h3>
              <a href="#">VER MAIS</a>
            </div>
            <img
              src={require("./img/beautiful-woman-with-red-lips 1.png")}
              alt=""
            />
            <div className="section-title">
              <h3 className="section_name">MAQUIAGENS</h3>
            </div>
          </div>

          <div className="product__section-ads">
            <div className="blur-overflow">
              <h3 className="section_name">FRAGRÂNCIAS</h3>
              <a href="#">VER MAIS</a>
            </div>
            <img
              src={require("./img/woman-preparing-wedding-ceremony 1.png")}
              alt=""
            />
            <div className="section-title">
              <h3 className="section_name">FRAGRÂNCIAS</h3>
            </div>
          </div>
          <div className="product__section-ads">
            <div className="blur-overflow">
              <h3 className="section_name">ENERGIA &</h3>
              <h3 className="section_name">PERFOMANCE</h3>
              <a href="#">VER MAIS</a>
            </div>
            <img
              src={require("./img/muscular-man-with-protein-drink-shaker 1.png")}
              alt=""
            />
            <div className="section-title">
              <h3 className="section_name">ENERGIA &</h3>
              <h3 className="section_name">PERFOMANCE</h3>
            </div>
          </div>
          <div className="product__section-ads">
            <div className="blur-overflow">
              <h3 className="section_name">CORPO &</h3>
              <h3 className="section_name">BANHO</h3>
              <a href="#">VER MAIS</a>
            </div>
            <img
              src={require("./img/close-up-female-hands-apllying-hand-cream 1.png")}
              alt=""
            />
            <div className="section-title">
              <h3 className="section_name">CORPO &</h3>
              <h3 className="section_name">BANHO</h3>
            </div>
          </div>
        </div>

        {/* BIG SIZE PRODUCT ADS */}
        <div className="products__ads-container">
            <img className="grayArrow arrow-l" src={grayPrev} alt="" />
            <img className="grayArrow arrow-r" src={grayNext} alt="" />

          <div className="ads-products">
            <AdsProduct
              product_name="Venyx L'Or"
              product_quantity="100ml"
              product_price="R$ 150,"
              product_price_cents="00"
              product_installment="em até 2x de R$ 75,00"
              product_img={require("./img/venyx.png")}
            />

            <AdsProduct
              product_name=" Multi- Vit Complex A-Z Mulheres"
              product_quantity="60 Cápsulas"
              product_price="R$ 85,"
              product_price_cents="00"
              product_installment="em até 2x de R$ 42,50"
              product_img={require("./img/multi-vit.png")}
            />
          </div>
        </div>
        <img className="g-dot" src={gDot} alt="" />

        {/* PRODUCT SECTION CALLER */}
        <ProductsSection product_list={most_desired}>
          <div className="product__section-title">
            <h2>OS MAIS DESEJADOS</h2>
            <div>
              <AiOutlineEye /> Ver todos
            </div>
          </div>
        </ProductsSection>

        {/* PRODUCT SECTION CALLER */}
        <ProductsSection product_list={healthy_life}>
          <div className="product__section-title">
            <h2>VIDA SAUDÁVEL</h2>
            <div>
              <AiOutlineEye /> Ver todos
            </div>
          </div>
        </ProductsSection>

        {/* KNOW OUR PRODUCTS ADS */}

        <div className="ads__banner">
          <div className="ads-info">
            <h2>Corpo e</h2>
            <h2>Banho</h2>
            <p>
              Confira nossa linha de produtos para o corpo. Hidratantes, loções
              e desodorantes para os cuidados com seu corpo.
            </p>
            <button>CONHEÇA NOSSOS PRODUTOS</button>
          </div>
          <img
            src={require("./img/woman-relaxing-bath-with-bubbles 1.png")}
            alt="woman-relaxing-bath-with-bubbles"
          />
        </div>
        {/* PRODUCT SECTION CALLER */}
        <ProductsSection product_list={body_n_bath}>
          <div className="product__section-title">
            <h2>CORPO E BANHO</h2>
            <div>
              <AiOutlineEye /> Ver todos
            </div>
          </div>
        </ProductsSection>
        <ProductsSection product_list={body_n_bath_2} />

        {/* PRODUCT ADS */}
        <div className="ads__banner-empire">
          <img src={require("./img/empire-gold.png")} alt="" />
          <div className="product-info">
            <h2>Linha</h2>
            <h2>EMPIRE</h2>
            <p className="ads-description">
              Escolha a sua fragrância masculina favorita e desperte as melhores
              sensações.
            </p>
            <button>CONHEÇA NOSSOS PRODUTOS</button>
          </div>
        </div>
        {/* PRODUCT SECTION CALLER */}
        <ProductsSection product_list={fragrances}>
          <div className="product__section-title">
            <h2>FRAGRÂNCIAS</h2>
            <div>
              <AiOutlineEye /> Ver todos
            </div>
          </div>
        </ProductsSection>
        <ProductsSection product_list={fragrances_2} />
        <ProductsSection product_list={arrived}>
          <div className="product__section-title arrived">
            <h2>ACABARAM DE CHEGAR</h2>
          </div>
        </ProductsSection>
      </section>
    </SMain>
  );
};
export default Main;
