import { Checkbox } from "../ui/checkbox/checkbox";
import { Label } from "./index";

const sabores = ["Morango", "Maracujá", "Brigadeiro"];


export const Product = () => {
    return (
        <ul>
            {sabores.map((sabor) => (
                <li key={sabor}>
                    <Label>
                        <Checkbox type="checkbox"  value={sabor}/>
                        {sabor}
                    </Label>
                </li>
            ))}
        </ul>
    )
}