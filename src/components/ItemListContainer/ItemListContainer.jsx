import "./ItemListContainer.css"
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom"

//importaciones firebase
import { CollectionReference, getDocs, where, query, collection } from "firebase/firestore";
import { db } from "../../services/config";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data }
                });
                setProductos(nuevosProductos);
            })
            .catch((error) => console.log("Error ", error))

    }, [idCategoria])

    return (
        <div className="itemListContainer">
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer