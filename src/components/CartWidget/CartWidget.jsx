import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'


const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
  return (
    <div className="carrito">
      <Link to="/cart">
        <img src={imgCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <p> {cantidadTotal} </p>
        }
      </Link>
    </div>
  )
}

export default CartWidget