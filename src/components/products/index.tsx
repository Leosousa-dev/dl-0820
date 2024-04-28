import {Availability, ProductListUi, Signal} from "./ui";
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
        </ProductListUi>
    )

}
export default ProductList;