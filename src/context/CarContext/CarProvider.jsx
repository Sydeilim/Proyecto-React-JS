import { useState } from "react";
import { CarContext } from "./CarContext"

export const CarProvider = ({children}) => {
    const [car, setCar] = useState([]);
    
    const exists = (id) => {
        const exist = car.some((p) => p.id === id);
        return exist;
    };

    const addItem = (item) => {
        if (exists(item.id)) {
          const updatedCar = car.map((prod) => {
            if(prod.id === item.id) {
                return {...prod, quantity: item.quantity + prod.quantity};
            } else {
                return prod;
            }
          });
          setCar(updatedCar);
          alert("Agregado al carrito");
        } else  {
            setCar([...car, item]);
            alert(`${item.name} agregado al carrito`);
        }
    };

    const deleteItem = (id) => {
        const filtered = car.filter((p) => p.id !== id);
        setCar(filtered);
        alert("Producto eliminado");
    };

    const clearCar = () => {
        setCar([]);
    };

    const getTotalItems = () => {
        const totalItems = car.reduce((acc, prod) => acc + prod.quantity, 0);
        return totalItems;
    };

    const total = () => {
        const total = car.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
        return Math.round(total*100)/100;
    };

    const checkout = () => {
        const ok = confirm("Quiere finalizar su compra?");
        if (ok) {
            alert("Compra realizada con exito.");
            clearCar();
        } 
    };
    
    const values = {car, addItem, clearCar, getTotalItems, deleteItem, total, checkout};
    return (
        <CarContext.Provider value={values}>
            {children}
        </CarContext.Provider>
    );
};