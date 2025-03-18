import { Container, Wrapper, Image, Title, Subtitle, Content,  } from "./index";
import logo from "../../assets/logo.svg";
import product from "../../assets/product.png";


const Hero = () => {
    return (
        <Container>
            <img src={logo} alt="logo"  width={185}/>
            <Wrapper>
                <Image src={product} alt="product" />
                <Content>
                    <Title>Trufas Artesanais: Pequenas Delícias Feitas com Paixão!</Title>
                    <Subtitle>Descubra a magia das trufas artesanais, pequenas delícias feitas com amor e dedicação.</Subtitle>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Hero;