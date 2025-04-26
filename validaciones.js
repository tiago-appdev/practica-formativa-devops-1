function validarFormulario() {
    // Obtener valores
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    
    // Validar campos vacíos
    if (!nombre || !apellido || !email || !username || !password) {
        mostrarError("Todos los campos son obligatorios");
        return false;
    }
    
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarError("El formato del email no es válido");
        return false;
    }
    
    // Validar longitud de contraseña
    if (password.length < 6) {
        mostrarError("La contraseña debe tener al menos 6 caracteres");
        return false;
    }
    
    // Validar formato de nombre de usuario (solo letras, números y guiones)
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    if (!usernameRegex.test(username)) {
        mostrarError("El nombre de usuario solo puede contener letras, números, guiones y guiones bajos");
        return false;
    }
    
    return true;
}
//Mensaje en caso de error
function mostrarError(mensaje) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.innerHTML = <p class="error">${mensaje}</p>;
}
