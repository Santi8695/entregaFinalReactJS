import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial)

    //Funciones Auxiliares:

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="itemCount">
            <div className="controlStock">
                <button onClick={restarContador}> - </button>
                <p> {contador} </p>
                <button onClick={sumarContador}> + </button>
            </div>


            <button onClick={() => funcionAgregar(contador)} className="botonAgregarAlCarrito"> Agregar al Carrito</button>
            
        </div>
    )
}

export default ItemCount