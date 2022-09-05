import { BsBag } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import consultant from "./icon/be-consultant.svg";
import user from "./icon/login-user.svg";
import logo from "./logo.svg";
import { SHeader } from "./styles";

const Header = () => {
  return (
    <SHeader>
      {
            /*Extreme Top Menu Header */
      }
      <div className="header__top">
        <a href="#">A Empresa</a>
        <a href="#">
          <img src={consultant} alt="" />
          <p>SEJA UM CONSULTOR</p>
        </a>
        <a href="#">Fale conosco</a>
      </div>
      {
            /* Center menu header */
      }
      <div className="header__center">
        <a href="#">
          <img src={logo} alt="logo Hinode" />
        </a>
        <div className="input__place">
          <input
            type="text"
            placeholder="Busque aqui o produto de seu interesse"
          />
          <a href="#">
            <FiSearch />
          </a>
        </div>
        <div className="users__menu">
          <img src={user} alt="icone login usuário" />
          <div className="welcome-text">
            <p>Olá,visitante</p>
            <p>
              <a href="#">ENTRE</a>OU<a href="#">CADASTRE-SE</a>
            </p>
          </div>
          <div className="fav-button">
            <AiOutlineHeart />
            <p>FAVORITOS</p>
          </div>
          <div>
            <div className="icon-notification">
              <span>0</span>
              <BsBag />
            </div>
            <p>SACOLA</p>
          </div>
        </div>
      </div>
      {
         /* Header bottom menu*/
      }
      <nav className="header__bottom">
        <a href="#">
          <AiOutlineMenu />
          Todas as categorias
        </a>
        <a href="#">FRAGRÂNCIAS</a>
        <a href="#">MAQUIAGEM</a>
        <a href="#">CORPO & BANHO</a>
        <a href="#">VIDA SAUDÁVEL</a>
        <a href="#">ENERGIA E PERFORMANCE</a>
      </nav>
    </SHeader>
  );
};

export default Header;
