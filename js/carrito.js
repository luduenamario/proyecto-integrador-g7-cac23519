/*<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... (Tus encabezados) ... -->
</head>
<body>
    <header>
        <!-- ... (Tu barra de navegación) ... -->
    </header>
    <section class="contenedor">
        <aside>
            <div class="carrito">
                <div class="header-carrito">
                    <h2>Tu Carrito</h2>
                </div>
                <div class="carrito-items">
                    <!-- Aquí se agregarán los elementos del carrito dinámicamente -->
                </div>
                <div class="carrito-total">
                    <div class="fila">
                        <strong>Tu Total</strong>
                        <span class="carrito precio-total">
                            $0 <!-- Inicialmente el total es 0 -->
                        </span>
                    </div>
                    <button class="btn-pagar" onclick="confirmarCompra()">Pagar <i class="fa-solid fa-sack-dollar"></i></button>
                </div>
            </div>
        </aside>
    </section>
    <section class="contenedor">
        <div class="contenedor-items">
            <!-- ... (Tus elementos a la venta) ... -->
        </div>
    </section>
    <footer>
        <!-- ... (Tu pie de página) ... -->
    </footer>
    <div id="boton-arriba">
        <i class="fa-solid fa-caret-up"></i>
    </div>

    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <script src="../js/index.js"></script>
    <script>*/

// Variables para llevar un seguimiento del carrito
let carrito = [];
let total = 0;

// Función para agregar un libro al carrito
function agregarAlCarrito(titulo, precio) {
    carrito.push({ titulo, precio });
    total += precio;
    actualizarCarrito();
    alert(`Agregado "${titulo}" al carrito.`);
}

// Función para eliminar un libro del carrito
function eliminarDelCarrito(index) {
    const libroEliminado = carrito.splice(index, 1)[0];
    total -= libroEliminado.precio;
    actualizarCarrito();
    alert(`Eliminado "${libroEliminado.titulo}" del carrito.`);
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const carritoItems = document.querySelector(".carrito-items");
    const precioTotal = document.querySelector(".precio-total");
    carritoItems.innerHTML = "";
    carrito.forEach((libro, index) => {
        const item = document.createElement("div");
        item.classList.add("carrito-item");
        item.innerHTML = `
                    <img src="logo.png" alt="" width="80px">
                    <div class="carrito-item-detalles">
                        <span class="carrito-item-titulo">${libro.titulo}</span>
                        <div class="selector-cantidad">
                            <i class="fa-solid fa-minus restar-cantidad" onclick="restarCantidad(${index})"></i>
                            <input type="text" value="1" class="carrito-item-cantidad" disabled>
                            <i class="fa-solid fa-plus suma-cantidad" onclick="sumarCantidad(${index})"></i>
                        </div>
                        <span class="carrito-item-precio">$${libro.precio}</span>
                    </div>
                    <span>
                        <iconify-icon icon="octicon:trash-24" class="btn-eliminar" onclick="eliminarDelCarrito(${index})"></iconify-icon>
                    </span>
                `;
        carritoItems.appendChild(item);
    });
    precioTotal.textContent = `$${total}`;
}

function restarCantidad(index) {
    if (carrito[index]) {
        // Restar 1 a la cantidad del libro en el carrito (siempre que sea mayor a 1)
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
            // Actualizar el carrito y el total
            actualizarCarrito();
            alert(`Restada una unidad de "${carrito[index].titulo}".`);
        } else {
            alert(`La cantidad de "${carrito[index].titulo}" ya es 1, no se puede restar más.`);
        }
    }
}

// Función para sumar la cantidad de un libro en el carrito
function sumarCantidad(index) {
    if (carrito[index]) {
    // Sumar 1 a la cantidad del libro en el carrito
    carrito[index].cantidad++;
    // Actualizar el carrito y el total
    actualizarCarrito();
    alert(`Añadida una unidad más de "${carrito[index].titulo}".`);
    }
}
    

// Función para confirmar la compra y reiniciar el carrito
function confirmarCompra() {
    if (carrito.length > 0) {
        const confirmacion = confirm("¿Deseas confirmar la compra?");
        if (confirmacion) {
            alert("¡Compra confirmada!");
            carrito = [];
            total = 0;
            actualizarCarrito();
        }
    } else {
        alert("El carrito está vacío.");
    }
}
/* </script>
</body>
</html>*/
