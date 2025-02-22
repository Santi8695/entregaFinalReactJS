# Urban Rituals - Entrega Final - Santiago Lopez - Proyecto React con Vite 

## Descripción
Este proyecto es una aplicación web desarrollada con React y Vite. Vite es un entorno de desarrollo rápido y eficiente para aplicaciones modernas de JavaScript.
La tematica del mismo es una tienda de sneakers y vestimenta relacionada al streetwear que fue creada hace poco por un amigo cercano.

## Características Tecnicas
- Carga rápida y optimizada con Vite.
- Componentes reutilizables con React.
- Uso de hooks para gestionar el estado.
- Estructura modular y escalable.
- Soporte para estilos CSS, SCSS y Tailwind.
- Compatible con despliegue en Vercel, Netlify y GitHub Pages.

## Caracteristicas Principales
- Catalogo de productos en tiempo real desde Firestore
- Sistema de Carrito de compras
- Proceso de checkout con validacion de formularios
- Almacenamiento de ordenes de compra en firestore
- Estado global gestionado con Context API
- Diseño responsivo

## Tecnologías utilizadas
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación y configuración
### Prerrequisitos
Asegúrate de tener instalado Node.js y npm (o yarn) en tu sistema.

### Instalación
1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu_usuario/tu_proyecto.git
   cd tu_proyecto
   ```
2. Instala las dependencias del proyecto:
   ```sh
   npm install
   ```
   o con yarn:
   ```sh
   yarn install
   ```

## Ejecución en modo desarrollo
Para iniciar el servidor de desarrollo, ejecuta:
```sh
npm run dev
```
o con yarn:
```sh
yarn dev
```
La aplicación estará disponible en `http://localhost:5173/` por defecto.

## Construcción para producción
Para compilar el proyecto y optimizarlo para producción, usa:
```sh
npm run build
```
o con yarn:
```sh
yarn build
```
Los archivos generados estarán en la carpeta `dist/`.

## Despliegue
Puedes desplegar la aplicación en cualquier servicio de hosting estático como:
- Vercel
- Netlify
- GitHub Pages

Si usas Vercel, simplemente ejecuta:
```sh
npx vercel
```

## Estructura del proyecto
```sh
.
├── src/
│   ├── components/   # Componentes reutilizables
│   ├── pages/        # Páginas principales
│   ├── assets/       # Imágenes y estilos
│   ├── App.jsx       # Componente principal
│   ├── main.jsx      # Punto de entrada
├── public/           # Archivos estáticos
├── package.json      # Dependencias y scripts
├── vite.config.js    # Configuración de Vite
└── README.md         # Documentación del proyecto
```

## Contribución
Si deseas contribuir, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature-nueva`).
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo `LICENSE`.

## Contacto
Para preguntas o sugerencias, puedes contactarme en [santiago8695sld@gmail.com](gmail:santiago8695sld@gmail.com).

