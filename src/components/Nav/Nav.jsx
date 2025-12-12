import { Link } from "react-router-dom"
import { useCarContext } from "../../context/CarContext/useCarContext";
import "./Nav.css"

export const Nav = () => {
    const {getTotalItems} = useCarContext();
    return (
    <nav>
        <ul>
            <li> <Link to={"/"}>Inicio</Link></li>
            <li> <Link to={"/category/dulce"}>Dulce</Link> </li>
            <li> <Link to={"/category/salado"}>Salado</Link> </li>
            <li> 
                <Link to={"/carrito"}>Carrito</Link>
                {getTotalItems() > 0 && (
                    <span className="in-cart"> {getTotalItems()} </span>
                )}
            
            </li>
        </ul>
    </nav>
    );
};