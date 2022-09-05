import { SFooter } from "./styles"
import facebook from "./icon/Facebook.svg"
import instagram from "./icon/Instagram.svg"
import youtube from "./icon/Youtube.svg"
import receba from "./icon/RecebA nossas ofertas e novidades.svg"
const Footer = () => {

    return(
        <SFooter>
            <section className="section__footer-top">
                <form className="news-register" action="">
                    <img className="news" src={receba} alt="" />
                    <input type="text" placeholder="Digite seu nome" />
                    <input type="text" placeholder="Digite seu email" />
                    <button type="submit">CADASTRAR</button> 
                </form>
            </section>
            <section className="section__footer-center">
                <div>

                    <nav className="menu-footer">
                        <li className="title">GRUPO HINODE</li>
                        <li><a href="">A Empresa</a></li>
                        <li><a href="">Catálogo Hinode</a></li>
                        <li><a href="">Seja um Consultor</a></li>
                        <li><a href="">Hinode Prime</a></li>
                        <li><a href="">Frete Inteligente</a></li>
                    </nav>
                    <nav className="menu-footer">
                        <li className="title">MAIS VENDIDOS</li>
                        <li><a href="">Corps Lígnea</a></li>
                        <li><a href="">Body Contour</a></li> 
                        <li><a href="">Gel Modelador</a></li>
                        <li><a href="">Shake de Vanilla H+ HND</a></li>
                        <li><a href="">Shake de Morango H+ HND</a></li>
                        <li><a href="">Luva de Silicone Creme para as Mãos Hands</a></li>
                        <li><a href=""> Empire Gold</a></li>
                        <li><a href=""> Empire VIP</a></li>
                    </nav>
                    <nav className="menu-footer">
                        <li className="title">DÚVIDAS FREQUENTES</li>
                        <li><a href="">Fale Conosco</a></li>
                        <li><a href="">Entrega, Trocas e Devoluções</a></li>
                        <li><a href="">Compra e Venda</a></li>
                        <li><a href="">Política de Privacidade</a></li>
                        <li><a href="">Remover Consentimento</a></li>
                    </nav>
                    <nav className="menu-footer">
                        <li className="btn-central"><button>CENTRAL DE ATENDIMENTO</button></li>
                        <li className="text-warning"><p>
                        De segunda a sexta das 9h às 21h Capitas e regiões metropolitanas 4020-2424 Demais localidades: 0800-144-6633
                        </p></li>
                        <li className="social-networks">
                            <a href=""><img src={instagram} alt="" /></a>
                            <a href=""><img src={youtube} alt="" /></a>
                            <a href=""><img src={facebook} alt="" /></a>
                        </li>
                    </nav>
                </div>
            </section>
            <img src={require("./icon/hinode-warning-footer.png")} alt="" />
        </SFooter>
    )
}
export default Footer