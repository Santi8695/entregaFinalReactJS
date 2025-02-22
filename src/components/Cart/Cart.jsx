import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import "./Cart.css";

export const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="contenedorCarrito">
                <h2> No hay productos en el carrito </h2>
                <Link to="/">Ver todos los productos</Link>
            </div>
        );
    }

    return (
            <div className="contenedorCompras">
                {carrito.map((producto) => (
                    <CartItem key={producto.item.id} {...producto} />
                ))}

                <div className="totalCarrito">
                    <h3> Total: $ {total} </h3>
                    <h3>Cantidad Total: {cantidadTotal} </h3>
                </div>

                <div className="botonCarrito">
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <Link to="/checkout">Finalizar Compra</Link>
                </div>
            </div>
    );
};