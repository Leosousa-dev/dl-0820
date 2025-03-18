import { Checkbox } from "../ui/checkbox/checkbox";
import { Label, List, Container } from "./index";
import { Button } from "../ui/button/button";
import db from "../../data/db.json";
import sendMessage from "../../services/whatssapService";
import { useState } from "react";




export const Product = () => {
    const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);


    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = event.target;
    
        if(checked) {
            setSelectedFlavors([...selectedFlavors, value]);
        } else {
            setSelectedFlavors(selectedFlavors.filter((flavor) => flavor !== value));
        }
    }
    
    
    const handleSendMessage = () => {
        sendMessage(selectedFlavors);
    }
    
    return (
        <Container>
            <List>
                {db.flavors.map((sabor) => (
                    <li key={sabor.id}>
                        <Label>
                            <Checkbox 
                                type="checkbox" 
                                value={sabor.name}
                                onChange={handleCheck}
                            />
                            {sabor.name}
                        </Label>
                    </li>
                ))}
            </List>                
            <Button onClick={handleSendMessage}>😋   Pedir agora !</Button>
        </Container>
    )
}