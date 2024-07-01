
const productos = {
    lista: [
        { nombre: "Yerba", precio: "3500", imagen: "../img/producto.png" },
        { nombre: "Azucar", precio: "1000", imagen: "../img/azucar.png" },
        { nombre: "Galletita", precio: "800", imagen: "../img/galletita.png" },
        { nombre: "Coca Cola", precio: "2500", imagen: "../img/cocacola.png" },
        { nombre: "Mayonesa", precio: "1600", imagen: "../img/mayonesa.png" },
        { nombre: "Vino", precio: "3400", imagen: "../img/vino.png" },
        { nombre: "Snacks", precio: "1700", imagen: "../img/twistos.png" },
        { nombre: "Aceite", precio: "2800", imagen: "../img/aceite.png" },
    ]
};

localStorage.setItem('productos', JSON.stringify(productos));

const produAgregado = JSON.parse(localStorage.getItem('productos')).lista;

const cajaContenedora = document.getElementById('ContenedorProductos');
cajaContenedora.classList.add('caja-contenedora');

function AñadirProduc(productos) {
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

AñadirProduc(produAgregado);