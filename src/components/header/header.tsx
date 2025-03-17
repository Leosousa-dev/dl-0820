import { Container } from "./index";
import logo from "../../assets/logo.svg";
import background from "../../assets/background.svg";

const Header = () => {
    return (
        <Container>
            <img src={logo} alt="logo"  width={187}/>
            <div>
                <img src={background} alt="background" />
            </div>
        </Container>
    )
}

export default Header;