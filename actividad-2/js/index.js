


class Producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const producto = [
    new Producto("Yerba", "1500", "./img/producto.png"),
    new Producto("Azucar", "1000","./img/azucar.png"),
    new Producto("Galletita", "800", "./img/galletita.png"),
    new Producto("Coca Cola", "2500", "./img/cocacola.png"),
    new Producto("Mayonesa", "600", "./img/mayonesa.png"),
    new Producto("Vino", "3400", "./img/vino.png"),
    new Producto("Snacks", "1700", "./img/twistos.png"),
    new Producto("Aceite", "2800", "./img/aceite.png")
];


const cajaContenedora = document.getElementById('ProdContenedor');
cajaContenedora.classList.add('caja-contenedora')

function addProducto(productos){
    productos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('producto-card');
        card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class='imgs'>
            <h2 class="NomProduc">${producto.nombre}</h2>
            <div class="linea"></div>
            <p class="precio">Precio: $${producto.precio}</p>
        `;

        cajaContenedora.appendChild(card);
    });
}

addProducto(producto);