import { Container, Wrapper, Image, Title, Subtitle,  } from "./index";
import logo from "../../assets/logo.svg";
import product from "../../assets/product.png";


const Hero = () => {
    return (
        <Container>
            <img src={logo} alt="logo"  width={187}/>
            <Wrapper>
                <Image src={product} alt="product" />
                <Title>Trufas Artesanais: Pequenas Delícias Feitas com Paixão!</Title>
                <Subtitle>Descubra a magia das trufas artesanais, pequenas delícias feitas com amor e dedicação.</Subtitle>
            </Wrapper>
        </Container>
    )
}

export default Hero;