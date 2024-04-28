import {OrderBtn, Container, ReserveBtn, WhatsAppButtonContainer} from "./ui"
import reserve from "../../assets/reserve-icon.svg"
import order from "../../assets/store-icon.svg"


const Order = (mensager: any) => {   
    const phoneNumber = '+551112345678'; // Replace with actual user's phone number
    const order = 'Olá! Gostaria de fazer um pedido'; // Replace with your default message
    const reserve = 'Olá! Gostaria de fazer uma reserva'
    const encodedMessage = encodeURIComponent(order);
    
    const sendMensage = () =>{
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');  
     }

    return(
        <Container>
            <OrderBtn onClick={sendMensage}>
                <img src={order} alt="order icon"/>
                Pedir agora
            </OrderBtn>
            <ReserveBtn>
                <img src={reserve} alt="reserve icon" />
                Reservar
            </ReserveBtn>
        </Container>
            
    )

}

export default Order;