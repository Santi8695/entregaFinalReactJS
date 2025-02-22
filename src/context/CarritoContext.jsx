//1) Importamos useState y create Contexto que almacenaran la logica del carrito

import { useState, createContext } from "react";

//2) Crear el context

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

//El valor inicial es un objeto co la propiedad carrito, es un array vacio, el total de compra y cantidad total de productos

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0)

    console.log(carrito);
    console.log("Cantidad Items: ", cantidadTotal);
    console.log("Monto total de la compra: ", total);

    //Agregamos funciones que precisara la logica del carrito

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) { 
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                } else {
                    return prod;
                }
            })
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }
    }

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        //Guarda una referencia del producto a eliminar

        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        //creo un nuevo array sin el producto deseado

        setCarrito(carritoActualizado);
        //Guardo un nuevo carrito sin el producto deseado

        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }


    return (
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}
//En el value enviamos todo lo que debe estar disponible en toda la apliacion