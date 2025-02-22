import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="contenidoFooter">
                <div className="informacionContacto">
                    <h3>Sobre Nosotros</h3>
                    <p>
                        Bienvenidos a Urban Rituals

                        <span>Somos una tienda enfocada en sneakers y streetwear de alta calidad, con un catálogo cuidadosamente seleccionado para los amantes de la moda urbana. </span>
                        <br />
                        <ul>
                            <li>Pares exclusivos con opciones para todos los gustos.</li>
                            <li>Atención personalizada para ayudarte a encontrar el estilo perfecto.</li>
                            <li>Envíos rápidos y seguros en todo Uruguay.</li>
                        </ul>
                    </p>
                </div>

                <div className="informacionContacto">
                    <h3>Contacto</h3>
                    <p>Email: urbanrituals23@gmail.com</p>
                    <p>Teléfono: +592 92 123 456</p>
                    <p>Instagram: <a target="_blank" href="https://www.instagram.com/urbanrituals.uy/">@urbanrituals.uy</a></p>
                    <br />
                    <br />
                    <span>
                        <a target="_blank" href="https://www.instagram.com/urbanrituals.uy/">
                            <img src="/img/instagramIco.png" alt="" />
                        </a>

                    </span>

                </div>


            </div>

            <div className="derechosFooter">
                <p>© 2025 Urban Rituals. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;