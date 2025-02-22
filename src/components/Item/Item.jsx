import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, stock, precio, img }) => {
    return (
        <div className="cardProducto">
            <img src={img} alt={nombre} />
            <h3> {nombre}</h3>
            <p>$ {precio}</p>
            <p>Stock: {stock}</p>


            <Link className="btn" to={`/item/${id}`}> Ver Detalles </Link>
        </div>
    )
}

export default Item
