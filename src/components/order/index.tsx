import {OrderBtn, Container, ReserveBtn} from "./ui";
import orderIcon from "../../assets/order-icon.svg"
import reserveIcon from "../../assets/reserve-icon.svg"






const Order = () => {   

    const phoneNumber = '+55519806-6299'; // Replace with actual user's phone number
    const order = 'Olá! Gostaria de fazer um pedido'; // Replace with your default message
    const encodedMessage = encodeURIComponent(order);
    
    const sendMensage = () =>{
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');  
     }

    return(
        <Container>
            <OrderBtn onClick={sendMensage}>
                <img src={orderIcon} alt="order icon"/>
                Pedir agora
            </OrderBtn>
            <ReserveBtn onClick={sendMensage}>
                <img src={reserveIcon} alt="reserve icon" />
                Reservar
            </ReserveBtn>
        </Container>
            
    )

}

export default Order;