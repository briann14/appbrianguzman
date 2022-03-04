export const productos = [
    {
        id: 1,
        name: 'Samsung S20 FE',
        stock: 10,
        price: 85000,
        //img: './img/camisa.jpg',
        img: 'https://www.techinn.com/f/13828/138281761/samsung-smartphone-galaxy-s20fe-2021-6gb-128gb-6.5-dual-sim.jpg',
        category: 'celulares',
        description: 'Memoria : 8gb de ram - Almacenamiento : 128gb '
    },
    {
        id: 2,
        name: 'Iphone 13 pro',
        stock: 2,
        price: '351000',
        //img: './img/gorra.jpg',
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652954000',
        category: 'celulares',
        description: ' Almacenamiento : 256gb '
    },
    {
        id: 3,
        name: 'Xiaomi Redmi Note 9',
        stock: 7,
        price: 49000,
        //img: './img/remera.jpg',
        img: 'https://images.fravega.com/f500/99255d47d5bace0b2f37460b589952a6.jpg',
        category: 'celulares',
        description: ' RAM : 4GB - Almacenamiento : 128gb '
    },
   
];

const categorias = [
   
    {id: 'celular', description: 'Celular'},
    {id: 'tablet', description: 'Tablet'},
    {id: 'contacto', description: 'Contacto'}
]


export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 4000);
});
export const productoUno = (id) => {
    return new Promise((resolve) => {
        const prod = productos.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}
export const getCategorias = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categorias)
        }, 1000)
    })
}
