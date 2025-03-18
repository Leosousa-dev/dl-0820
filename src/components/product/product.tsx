import { Checkbox } from "../ui/checkbox/checkbox";
import { Label, List, Container } from "./index";
import { Button } from "../ui/button/button";


const sabores = ["Morango", "Maracujá", "Brigadeiro"];


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
            <Button>😋   Pedir agora !</Button>
        </Container>
    )
}