import { useState, useContext } from "react";
import { db } from "../../services/config";
import { CarritoContext } from "../../context/CarritoContext";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css"

export const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");

    const manejadorFormulario = (event) => {
        event.preventDefault();
        setError(""); // Limpia los errores que quedaron de antes (si es que los hubo)

        // Revisa que todos los campos estén completos
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            return;
        }

        // Verifica que los emails coincidan
        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden, por favor verifícalos nuevamente");
            return;
        }

        // Crear objeto con los datos de la orden de compra
        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        // Verificar stock antes de actualizar
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                if (stockActual < productoOrden.cantidad) {
                    throw new Error(
                        `No hay suficiente stock de ${productoOrden.nombre}. Por favor contacta con Soporte o intenta nuevamente más tarde`
                    );
                }

                await updateDoc(productoRef, { stock: stockActual - productoOrden.cantidad });
            })
        )
            .then(() => addDoc(collection(db, "ordenes"), orden))
            .then((docRef) => {
                setOrderId(docRef.id);
                vaciarCarrito();

                // Limpiar el formulario
                setNombre("");
                setApellido("");
                setTelefono("");
                setEmail("");
                setEmailConfirmacion("");
            })
            .catch((error) => {
                console.error(error);
                setError(error.message || "Ocurrió un error al procesar la orden");
            });
    };


    return (
        <div className="contenedorCheckout">
            <h2>Checkout</h2>

            <div className="productosCheckout">
                {carrito.map((producto) => (
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p>Precio: ${producto.item.precio}</p>
                        <hr />
                    </div>
                ))}
            </div>

            <form onSubmit={manejadorFormulario} className="formularioCheckout">
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div>
                    <label>Apellido:</label>
                    <input
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </div>

                <div>
                    <label>Teléfono:</label>
                    <input
                        type="text"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Confirmación del Email:</label>
                    <input
                        type="email"
                        value={emailConfirmacion}
                        onChange={(e) => setEmailConfirmacion(e.target.value)}
                    />
                </div>

                {error && <p className="mensajeError">{error}</p>}

                {orderId && (
                    <strong className="mensajeOrdenCompletada">
                        ¡Gracias por tu compra! El identificador de tu orden es: {orderId}
                    </strong>
                )}

                <button type="submit">Finalizar Orden</button>
            </form>
        </div>
    );
};