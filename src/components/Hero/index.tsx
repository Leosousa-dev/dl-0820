import {HeroUI, Headline, About} from "./ui"


const Hero = () => {
    return(
        <HeroUI>
            <img src="../../../public/logo.png" alt="" />
            <Headline>Lojinha da Dan</Headline>
            <About>
                👋 Bem-Vindo a loja da Dandan assim que finalizar seu pedido entraremos em contato para realizar a entrega
            </About>
        </HeroUI>
    )
}

export default Hero;