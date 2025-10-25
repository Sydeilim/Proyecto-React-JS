import { useCarContext } from "../../context/CarContext/useCarContext";
import { Item } from "../Item/Item";

export const ItemDetail = ({detail}) => {

    const {addItem} = useCarContext();
    return (
     <Item {...detail}>
        <button onClick={() => addItem(detail)}>Agregar al carrito</button>
     </Item>
    );
};