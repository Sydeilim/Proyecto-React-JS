import { useCarContext } from "../../context/CarContext/useCarContext";
import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./Car.css";

export const Car = () => {
    const {car, clearCar, deleteItem, total, checkout} = useCarContext();
    return (
        <section className="item-list-container">
            <h2 className="title-car">Carrito de compras.</h2>
            {car.length ? (
                car.map((prod) => (
                    <Item key={prod.id} {...prod}>
                        <span>Cantidad: {prod.quantity} </span>
                        <button className="btn" onClick={() => deleteItem(prod.id)}>
                            Eliminar
                        </button>
                    </Item>
                ))
            ) : (
                <p>Tu carrito está vacío.</p>
            )}

            {car.length ? (
                <div className="btn-container">
                    <div className="total-pagar">
                        <p>Total a pagar: ${total()}</p>
                    </div>
                    <button className="btn" onClick={checkout}>
                        Finalizar compra.
                    </button>
                    <button className="btn" onClick={clearCar}>
                        Vaciar carrito.
                    </button>
                </div>
            ) : (
                <Link to="/">
                    <button className="btn">
                        Volver al inicio.
                    </button>
                </Link>
            )}      
        </section>
    )   
};