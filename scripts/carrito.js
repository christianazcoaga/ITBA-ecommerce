// Script simple para manejar el contador del carrito

// Función para cargar el contador al iniciar la página
function cargarContadorCarrito() {
    const contador = document.getElementById('carrito-contador');
    if (contador) {
        const cantidad = localStorage.getItem('carrito-cantidad') || 0;
        contador.textContent = cantidad;
        
        // Agregar evento de clic para limpiar carrito
        contador.addEventListener('click', limpiarCarrito);
    }
}

// Función para limpiar el carrito
function limpiarCarrito() {
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        localStorage.removeItem('carrito-cantidad');
        const contador = document.getElementById('carrito-contador');
        if (contador) {
            contador.textContent = '0';
        }
        alert('Carrito vaciado');
    }
}

// Cargar contador cuando la página se carga
document.addEventListener('DOMContentLoaded', cargarContadorCarrito);
