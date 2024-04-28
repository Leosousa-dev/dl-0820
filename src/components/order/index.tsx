import {OrderBtn, Container, ReserveBtn} from "./ui"
import reserve from "../../assets/reserve-icon.svg"
import order from "../../assets/store-icon.svg"


const Order = () => {
    return(
        <Container>
            <OrderBtn>
                <img src={order} alt="" />
                Pedir agora
            </OrderBtn>
            <ReserveBtn>
                <img src={reserve} alt="" />
                Reservar
            </ReserveBtn>
        </Container>
            
    )

}

export default Order;