import Item from "../Item/Item"
import "./ItemList.css";

export const ItemList = ({ productos }) => {
    return (
        <div className="itemList">
            {
                productos.map(producto => <Item key={producto.id} {...producto}/>)
            }
        </div>
    )
}