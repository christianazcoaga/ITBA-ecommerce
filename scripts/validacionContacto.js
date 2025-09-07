// inputs en el formulario de contactos
const nombreUsuario = document.querySelector('#nombreUsuario');
const emailUsuario = document.querySelector('#emailUsuario');
const mensajeUsuario = document.querySelector('#mensajeUsuario');

// formulario y mensajes de error
const formulario = document.querySelector('#formularioContacto');
const msgErrorNombre = document.querySelector('#msgErrorNombre');
const msgErrorEmail = document.querySelector('#msgErrorEmail');
const msgErrorMensaje = document.querySelector('#msgErrorMensaje');

function validarEmail (email) {
    const emailPatron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPatron.test(email);
}

// Limpiar mensajes de error cuando el usuario empiece a escribir
nombreUsuario.addEventListener('input', function() {
    msgErrorNombre.textContent = '';
});

emailUsuario.addEventListener('input', function() {
    msgErrorEmail.textContent = '';
});

mensajeUsuario.addEventListener('input', function() {
    msgErrorMensaje.textContent = '';
});

formulario.addEventListener('submit', function(evento){
    // prevenir que se envie el formulario
    evento.preventDefault();

    // valores ingresados por los usuarios
    const nombre = nombreUsuario.value;
    const email = emailUsuario.value;
    const mensaje = mensajeUsuario.value;
    let esValido = true;

    // Validar nombre
    if (nombre.trim().length < 2) {
        msgErrorNombre.textContent = 'Por favor, ingrese un nombre válido (mínimo 2 caracteres).';
        esValido = false;
    }

    // Validar email
    if (!validarEmail(email)) {
        msgErrorEmail.textContent = 'Por favor, ingrese un email válido.';
        esValido = false;
    }

    // Validar mensaje
    if (mensaje.trim().length < 5) {
        msgErrorMensaje.textContent = 'Por favor, ingrese al menos 5 carácteres.';
        esValido = false;
    }

    if (esValido) {
        // Mostrar mensaje de éxito usando manipulación del DOM
        const mensajeExito = document.createElement('div');
        mensajeExito.innerHTML = '¡Formulario enviado con éxito!';
        mensajeExito.className = 'mensaje-exito';
        
        // Insertar antes del formulario
        formulario.parentElement.insertBefore(mensajeExito, formulario);
        
        // Limpiar formulario
        formulario.reset();
        msgErrorNombre.textContent = '';
        msgErrorEmail.textContent = '';
        msgErrorMensaje.textContent = '';
        
        // Quitar mensaje después de 3 segundos
        setTimeout(() => mensajeExito.remove(), 3000);
    }
})