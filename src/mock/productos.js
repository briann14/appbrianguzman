export const products = [
    {
        id: 1,
        name: 'Samsung S20 FE',
        stock: 10,
        price: 85000,
        img: 'https://www.techinn.com/f/13828/138281761/samsung-smartphone-galaxy-s20fe-2021-6gb-128gb-6.5-dual-sim.jpg',
        category: 'celulares',
        description: 'Memoria 8gb de ram - Almacenamiento : 128gb '
    },
    {
        id: 2,
        name: 'Iphone 13 pro',
        stock: 2,
        price: '351000',
       
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652954000',
        category: 'celulares',
        description: ' Almacenamiento : 256gb '
    },
    {
        id: 3,
        name: 'Xiaomi Redmi Note 9',
        stock: 7,
        price: 49000,
        img: 'https://images.fravega.com/f500/99255d47d5bace0b2f37460b589952a6.jpg',
        category: 'celulares',
        description: ' RAM : 4GB - Almacenamiento : 128gb '
    },
    {
        id: 4,
        name: 'Galaxy Tab A7 ',
        stock: 2,
        price: '80000',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/018/096/products/tablet-samsung-a7-10-51-973b1ca1b67d275c3c16291520211063-640-0.jpg',
        category: 'tablet',
        description: ' Almacenamiento : 64gb '
    },
   
];



export const getProducts = (idCategory) => {
    return new Promise ((resolve) => {
        const productsToResolve = idCategory ? products.filter(item => item.category === idCategory) : products
        setTimeout(() => {
            resolve(productsToResolve);
        },500);
    });
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 500)
    })
}