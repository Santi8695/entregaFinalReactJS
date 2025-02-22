import "./ItemDetail.css";

import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
//Para navegar al componente "/cart precisamos Link"
import { Link } from "react-router-dom";

//Importamos el CarritoContext
import { CarritoContext } from "../../context/CarritoContext";

//Importamos el hook useContext:
import { useContext } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

    //Creamos un estado local con la cantidad de productos que agregamos
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    //Cambios para trabajar con el context
    const { agregarAlCarrito } = useContext(CarritoContext)


    //Creamos una funcion para manejar las cantidades
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = { id, nombre, precio, img };
        agregarAlCarrito(item, cantidad);
    }

    return (
        <div className='contenedorItem'>
            <img src={img} alt={nombre} />
            <div className="informacionProducto">
                <h2> {nombre} </h2>
                <h3>${precio} </h3>
                <p> {descripcion}</p>
                <h3>{stock} Unidades Disponibles</h3>

                <div className="controlesStock">
                    <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail