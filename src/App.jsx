import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Checkout } from './components/Checkout/Checkout'
import "./App.css";

//Implementamos el context:
import { CarritoProvider } from './context/CarritoContext';

const App = () => {
    return (
        <div className="contenedorPrincipal">
            <BrowserRouter>
                <CarritoProvider>
                    <NavBar />
                    <div className="contenidoPrincipal">
                        <Routes>
                            <Route path='/' element={<ItemListContainer />} />
                            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
                            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/checkout' element={<Checkout />} />
                        </Routes>
                    </div>
                    <Footer />
                </CarritoProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;
