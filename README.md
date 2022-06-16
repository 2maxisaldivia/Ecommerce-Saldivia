# Menu-Go

## Descripción
El proyecto que contiene este repositorio consta de una tienda online de comida rápida desarrollada para el curso de React JS de Coderhouse.

El usuario inicialmente visualiza una pantalla principal donde se encuentran todos los productos, pero cuenta con la opción de filtrar los productos según la categoría que prefiera, por ejemplo, acceder a la categoría Pizzas. Además puede acceder al detalle específico de cada producto, donde encontrará una descripcion y la opcion de "Agregar al carrito".

Una vez que los productos son agregados al carrito, se podrá finalizar la compra completando un formulario que contiene los campos nombre, apellido, correo electrónico y celular. Completado el mismo se le generará un numero de orden único para identificar su compra.

El proyecto puede visualizarse en: https://menu-go-dfacd.web.app/
![Proyecto](/src/components/images/Funcionalidad.gif)
--------------------------------------
## Tecnologías utilizadas.

 <a href="https://es.reactjs.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" width="50px"> </a><a href="https://mui.com/"><img src="https://mui.com/static/logo.png" width="50px"></a> <a href="https://reactrouter.com/"><img src="https://reacttraining.com/images/blog/reach-react-router-future.png" width="50px"></a> <a href="https://firebase.google.com/"><img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-built_knockout.png?hl=es-419" width="90px" height="40px"></a> 


-----------------------------------------
## Ejecución del proyecto
Si se desea ejecutar el proyecto debe hacer lo siguiente: 

 * Clonar el repositorio


        git clone https://github.com/2maxisaldivia/Ecommerce-Saldivia.git

       cd Ecommerce-Saldivia


* Instalar las dependencias

       npm install

* Inicializar la ejecución

       npm start

  El proyecto se inicializará en http://localhost:3000


-----------------------------------------
## Consideraciones adicionales.

### Firebase
* A través de Firebase, se hizo el deploy de la aplicación y se almacenaron tanto los productos (con sus respectivas propiedades) como las órdenes generadas.
### Material UI
* Se utilizó Material UI para el diseño con el fin de agilizar el desarrollo estético de la aplicación 

### Diseño responsive
 * Siguiendo con la estrategia de diseño "Mobile First", esta aplicación fue diseñada en primera instancia para ser visualizada en dispositivos moviles, y luego se implementó el diseño para dispositivos de escritorio.

 ### Local Storage
 * Se implementó el uso del almacenamiento del navegador para que los productos en el carrito persistan por mas que no hayan finalizado la compra y cierren la sesión

 ### Control de stock
 * Se aplicó un control de stock muy básico a través de un alerta del navegador. Posteriormente, cuando se agregue una base de datos en tiempo real, se implementará un metodo de control aún mas reactivo a las interacciones del usuario.

 ### React Hook Form
 * Utilicé react-hook-form para la validacion del formularios

 ### React Router Dom.
 * El routeo de la tienda virtual fue implementado con react-router-dom.
---------------------------------------










