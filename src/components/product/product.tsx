import { Checkbox } from "../ui/checkbox/checkbox";
import { Label, List, Container } from "./index";
import { Button } from "../ui/button/button";
import sendMessage from "../../services/whatssapService";

const sabores = ["Morango", "Maracujá", "Brigadeiro"];

const handleSendMessage = async () => {
    await sendMessage(sabores);
}

export const Product = () => {

    return (
        <Container>
            <List>
                {sabores.map((sabor) => (
                    <li key={sabor}>
                        <Label>
                            <Checkbox type="checkbox" value={sabor}/>
                            {sabor}
                        </Label>
                    </li>
                ))}
            </List>                
            <Button onClick={handleSendMessage}>😋   Pedir agora !</Button>
        </Container>
    )
}