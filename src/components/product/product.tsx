import { Checkbox } from "../ui/checkbox/checkbox";
import { Label, List } from "./index";
import { Button } from "../ui/button/button";
import { useState } from "react";


const sabores = ["Morango", "Maracujá", "Brigadeiro"];


export const Product = () => {
    const [saboresSelecionados, setSaboresSelecionados] = useState<string[]>([]);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (sabor: string, isChecked: boolean) => {
        if (isChecked) {
          setSaboresSelecionados((prev) => [...prev, sabor]);
        } else {
          setSaboresSelecionados((prev) => prev.filter((item) => item !== sabor));
        }
      };
    
      
      const handleButtonClick = () => {
        console.log("Sabores selecionados:", saboresSelecionados);
      };

    return (
        <>
            <List>
                {sabores.map((sabor) => (
                    <li key={sabor}>
                        <Label>
                            <Checkbox type="checkbox" value={sabor}
                            onChange={(e) => handleCheckboxChange(sabor, e.target.checked)}
                            />
                            {sabor}
                        </Label>
                    </li>
                ))}
            </List>                
            <Button onClick={handleButtonClick}>😋   Pedir agora !</Button>
        </>
    )
}