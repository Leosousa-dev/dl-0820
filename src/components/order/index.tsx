import {OrderBtn, Container, ReserveBtn} from "./ui";
import orderIcon from "../../assets/order-icon.svg"
import reserveIcon from "../../assets/reserve-icon.svg"






const Order = () => {   

    const phoneNumber = '+55519806-6299';
    const defaultOrder = 'Olá! Gostaria de fazer um pedido';
    const reserveOrder = 'Olá! Gostaria de fazer uma encomenda';

    const sendMensage = (message: string) => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');  
    }

    const handleOrderClick = () => {
        sendMensage(defaultOrder);
    }

    const handleReserveClick = () => {
        sendMensage(reserveOrder);
    }

    return(
        <Container>
            <OrderBtn onClick={handleOrderClick}>
                <img src={orderIcon} alt="order icon"/>
                Pedir agora
            </OrderBtn>
            <ReserveBtn onClick={handleReserveClick}>
                <img src={reserveIcon} alt="reserve icon" />
                Reservar
            </ReserveBtn>
        </Container>
            
    )

}

export default Order;