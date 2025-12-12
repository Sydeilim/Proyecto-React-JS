import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav"
import "./Header.css"

export const Header = () => {
    return (
        <header>
            <Link to={"/"}>
            <div className="contenedor-encabezado">
                <div className="container-nombre-sitio-web">
                    <img src="/images/image-bolsas-sin-fondo.png" alt="imagen_bolsas_sitio" />
                    <h1> 
                        <span className="part-uno">My</span> 
                        <span className="part-dos">Ecommerce</span>   
                    </h1> 
                </div>
            </div>
            </Link>
            {/* <Link to={"/"}>Logo</Link> */}
            <Nav/>
        </header>
    );
};