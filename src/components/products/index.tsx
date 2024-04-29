import {Availability, ProductListUi, Signal, List, ItemList, Option} from "./ui";
import storeIcon from "../../assets/store-icon.svg";


const ProductList = () => {
    return (
        <ProductListUi>
            <Availability>
                <img src={storeIcon} alt="" />
                <span>◦</span>
                <Signal>
                    Disponiveis
                </Signal>
            </Availability>
            <List>
                <ItemList>
                    <span>✓</span>
                    <Option>Morango</Option>
                </ItemList>
                <ItemList>
                    <span>✓</span>
                    <Option>Maracujá</Option>
                </ItemList>
            </List>
        </ProductListUi>
    )

}
export default ProductList;