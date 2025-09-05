// Script simple para mostrar el detalle del producto

// Función para obtener el ID del producto desde la URL
function obtenerIdProducto() {
    // La URL se ve así: producto.html?id=1
    // Queremos obtener el número después de "id="
    const url = window.location.href;
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Función para buscar un producto por su ID
function buscarProducto(id) {
    // Buscar en el array de productos
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == id) {
            return productos[i];
        }
    }
    return null; // Si no encuentra el producto
}

// Función para mostrar el producto en la página
function mostrarProducto() {
    // 1. Obtener el ID del producto
    const id = obtenerIdProducto();
    
    // 2. Buscar el producto
    const producto = buscarProducto(id);
    
    // 3. Obtener el lugar donde vamos a mostrar el producto
    const contenedor = document.getElementById('producto-detalle');
    
    // 4. Si no encontramos el producto, mostrar mensaje de error
    if (!producto) {
        contenedor.innerHTML = `
            <div class="producto-no-encontrado">
                <h2>Producto no encontrado</h2>
                <p>Lo sentimos, el producto que buscas no existe.</p>
                <a href="productos.html" class="btn">Ver todos los productos</a>
            </div>
        `;
        return;
    }
    
    // 5. Crear el HTML del producto
    const html = `
        <div class="producto-detalle-completo">
            <div class="producto-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            
            <div class="producto-info">
                <h1>${producto.nombre}</h1>
                <p class="precio">${producto.precio}</p>
                <p class="descripcion">${producto.descripcion}</p>
                
                <div class="especificaciones">
                    <h3>Especificaciones:</h3>
                    <ul>
                        <li><strong>Medidas:</strong> ${producto.especificaciones.medidas}</li>
                        <li><strong>Materiales:</strong> ${producto.especificaciones.materiales}</li>
                        <li><strong>Acabado:</strong> ${producto.especificaciones.acabado}</li>
                    </ul>
                </div>
                
                <button class="btn-agregar-carrito" onclick="agregarAlCarrito()">
                    Añadir al Carrito
                </button>
                
                <a href="productos.html" class="btn-volver">
                    ← Volver a productos
                </a>
            </div>
        </div>
    `;
    
    // 6. Mostrar el HTML en la página
    contenedor.innerHTML = html;

    // Agregar el event listener después de insertar el HTML
    const productoDetalle = document.querySelector('.producto-detalle-completo');
    if (productoDetalle) {
        productoDetalle.addEventListener('click', agregarAlCarrito);
    }
}

// Función simple para simular agregar al carrito
//function agregarAlCarrito() {
//   alert('¡Producto agregado al carrito!');
//}

// Cuando la página termine de cargar, mostrar el producto
document.addEventListener('DOMContentLoaded', mostrarProducto);




function agregarAlCarrito(e){
    if(e.target.classList.contains('btn-agregar-carrito')){
        const elementHtml = (e.target.parentElement.parentElement);
        SelectData(elementHtml);
    }
}
function SelectData(prod){
    console.log(prod);
}