# APP PHONE STORE

Este es mi proyecto hecho totalmente en ReactJS sobre una store de celulares, tablets y accesorios

## instalacion y ejecucion

Para ejecutar el programa debe seguir los siguientes pasos...

### ` npm install`

Con npm install instalará todas las dependencias necesarias para que la aplicación funcione
### `npm start`
Con npm start ejecutara el programa si este no ejecuta entrar a [http: // localhost: 3000]

### `Gif con funcionamiento de la app`
[2022-03-29 18-11-30_Trim.gif]

### App Route

- / -> ItemListContainer -> Es la ruta inicial que te llevara a ver todos los productos
- / category /: categoryId -> ItemListContainer -> Es la ruta que te mostrara las categorias
- / detail /: productId -> ItemDetailContainer -> Es la ruta que te mostrara los detalles del producto
- / cart -> Cart -> Es la ruta que te mostrara el carrito de compras
- / form -> FormContainer -> Es la ruta del formulario que tendras que completar para hacer la compra

## Como funciona el proyecto?

### `ItemListContainer`

El ItemListContainer contiene la lista de todos los productos

### `ItemDetailContainer`

el ItemDetailContainer contiene los detalles de un producto en especifico
### `Cart`

El Cart contiene los productos que estan dentro del carrito de compras 

### `FormContainer`

El FormContainer contiene un formulario con validaciones para registrar los datos del usuario en una base de datos y poder finalizar la compra 

### `carpeta context`

La carpeta context contiene el CartContext contiene la logica para sumar los productos, borrarlos , calcular precio,

### `Carpeta Services`

En la carpeta firebase archivo firebase donde esta la logica para recibir los datos de la base de datos de firebase.
En la carpeta notification esta NotifactionServices donde se encuentra las notificaciones que avisan al usuario si se añadio un producto , si se realizo la compra con su id o si hubo un error por falta de stock o un problema  

###  Que datos se tiene cuando se genera el pedido?

- buyer -> es un objeto con los datos del usuario que realizo el pedido
- items -> es un objeto {item, count};
- date -> dia y horario que se realizo el pedido
- total -> el precio total

## Autor

Brian Nahuel Guzman 