import { useCarContext } from "../../context/CarContext/useCarContext";
import { Count } from "../Count/Count";
import { Item } from "../Item/Item";

export const ItemDetail = ({detail}) => {

    const {addItem} = useCarContext();
    const handleAdd = (quantity) => {
        addItem({...detail, quantity});
    };

    return (
     <Item {...detail}>
        <Count btnText={"Agregar al carrito"} onConfirm={handleAdd}/>
        {/* <button onClick={() => addItem(detail)}>Agregar al carrito</button> */}
     </Item>
    );
};