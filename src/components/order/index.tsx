import {OrderBtn, Container, ReserveBtn, WhatsAppButtonContainer} from "./ui"
import reserve from "../../assets/reserve-icon.svg"
import order from "../../assets/store-icon.svg"


const Order = (mensager: any) => {   
    const encodedMessage = encodeURIComponent(mensager); // Codifica a mensagem
    const url = `whatsapp://send?phone=99985041509&text=${encodedMessage}`; // Substitua "NUMERO_DO_DESTINO" pelo número de telefone
  
    const handleClick = () => {
      window.location.href = url; // Abre o link no WhatsApp mobile
    };
  
    
    return(
        <Container>
            <OrderBtn>
                <img src={order} alt="" onClick={handleClick}/>
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