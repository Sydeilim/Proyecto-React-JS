import "./Item.css"

export const Item = ({id, name, price, description, imageUrl, children}) => {
    return (
        <article className="product-item"> 
            <img src={imageUrl} alt={description}/>
            <h3 className="product-title">{name}</h3>
            <p>Precio: ${price}</p>
            <p>Descripcion: {description}</p>
            {children}
        </article>
    );
};