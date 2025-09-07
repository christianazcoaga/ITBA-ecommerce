// inputs en el formulario de contactos
const nombreUsuario = document.querySelector('#nombreUsuario');
const emailUsuario = document.querySelector('#emailUsuario');
const mensajeUsuario = document.querySelector('#mensajeUsuario');

// formulario y mensajes de error
const formulario = document.querySelector('#formularioContacto');
const msgErrorEmail = document.querySelector('#msgErrorEmail');
const msgErrorMensaje = document.querySelector('#msgErrorMensaje');

function validarEmail (email) {
    const emailPatron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPatron.test(email);
}

formulario.addEventListener('submit', function(evento){
    // prevenir que se envie el formulario
    evento.preventDefault();

    // valores ingresados por los usuarios
    const email = emailUsuario.value;
    const mensaje = mensajeUsuario.value;
    let esValido = true;

    if (!validarEmail(email)) {
        msgErrorEmail.textContent = 'Por favor, ingrese un email válido.';
        esValido = false;
    }

    if (mensaje.trim().length < 5) {
        msgErrorMensaje.textContent = 'Por favor, ingrese al menos 5 carácteres.';
        esValido = false;
    }

    if (esValido) {
        alert('¡Formulario enviado con éxito!');
        formulario.submit();
    }
})