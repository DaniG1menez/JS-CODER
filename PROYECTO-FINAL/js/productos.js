const productos = [
];

let carrito = [];
const DOMitems = document.getElementById('items');
const DOMcarrito = document.getElementById('carrito');
const DOMtotal = document.getElementById('total');
const DOMboton_vaciar = document.getElementById('botonVaciar');
const DOMbuscadorProduc = document.getElementById('buscadorProduc');
const DOMbotonbuscador = document.getElementById('botonbuscador');


const createApiProduct = async (searchQuery) => {
    const RESULTS = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=20`);
    const DATA = await RESULTS.json();
    return DATA.results;
};

const añadirProduc = async (searchQuery = 'supermercado') => {
    const apiProducts = await createApiProduct(searchQuery);
    const productosCombinados  = [...productos, ...apiProducts];

    DOMitems.innerHTML = '';

    productosCombinados .forEach((info) => {
        const html = `
        <div class="card-pro">
            <img src="${info.thumbnail}" class="card-img" alt="...">
            <div class="card-body">
                <h5 class="card-title">${info.title}</h5>
                <p class="card-text">$${info.price}</p>
                <button class="btn btn-primary" marcador="${info.id}"><span class="carrito material-symbols-outlined">
                shopping_cart
                </span></button>
            </div>
        </div>  
        `;
        DOMitems.innerHTML += html;
    });
    
    document.querySelectorAll('.btn.btn-primary').forEach((boton) => {
        boton.addEventListener('click', agregarProductoCarrito);
    });

    return productosCombinados ;
};

const busqueda = () => {
    const query = DOMbuscadorProduc.value.trim();
    if (query) {
        añadirProduc(query);
    } else {
        Swal.fire({
            title: "Buscador vacio",
            text: "No has colocado nada en el buscador",
            icon: "warning",
            confirmButtonText: "Aceptar",
        });
    }
};


function agregarProductoCarrito(evento){
    const id = evento.target.closest('button').getAttribute('marcador');
    carrito.push(id);
    console.log(carrito);
    renderizarCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));
    Toastify({
        text: "Producto agregado al carrito",
        duration: 2000,
        style: {background: "linear-gradient(to right, #21481d, #125616)"},
        gravity: "bottom",
        position: "right"
    }).showToast();
}


function renderizarCarrito(){
    DOMcarrito.innerHTML = '';
    const apiProducts = JSON.parse(localStorage.getItem('apiProducts') || '[]');
    carrito.forEach((id) => {
        let producto = productos.find((info) => info.id == id) || apiProducts.find((info) => info.id == id);
        if (producto) {
            const html = `<li>${producto.title || producto.nombre} = $${producto.price || producto.precio}</li>`;
            DOMcarrito.innerHTML += html;
        }
    });
    const total = carrito.reduce((total, id) => {
        let producto = productos.find((info) => info.id == id) || apiProducts.find((info) => info.id == id);
        return total + (producto ? (producto.price || producto.precio) : 0);
    }, 0);
    DOMtotal.textContent = total.toFixed(2);
}


function vaciarCarrito() {
    if (carrito.length === 0) {
        Swal.fire({
            title: "Carrito vacio",
            text: "El carrito no contiene productos",
            icon: "error",
            confirmButtonText: "Aceptar",
        });
    } else {
        carrito = [];
        renderizarCarrito();
        localStorage.removeItem('carrito');
        Swal.fire({
            title: "Carrito vaciado",
            text: "Se ha vaciado el carrito de compras",
            icon: "success",
            confirmButtonText: "Aceptar",
        });
    }
}

DOMboton_vaciar.addEventListener('click', vaciarCarrito);
DOMbotonbuscador.addEventListener('click', busqueda);

if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito') || []);
    renderizarCarrito();
}

const init = async () => {
    const apiProducts = await añadirProduc();
    localStorage.setItem('apiProducts', JSON.stringify(apiProducts));
}

init();
