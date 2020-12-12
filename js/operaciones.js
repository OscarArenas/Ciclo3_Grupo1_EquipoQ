function validarUsuario() {
    var username = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contrasenia").value;



    if (contrasenia.length > 7) {
        alert("Iniciar sesión: " + username + ", " + contrasenia)
    }
    else
        alert("La contraseña debe tener más de 7 carácteres.")

}

function registrarUsuario() {
    var username = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contrasenia").value;
    var correo = document.getElementById("email").value;

    if (username.length > 7) {
        if (contrasenia.length > 7) {
            let patron = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/;
            if (correo.match(patron)) {
                alert("Registrar Usuario: " + username + ", " + contrasenia + ", " + correo)
            } else
                alert("Correo no válido")
        }
        else
            alert("La contraseña debe tener más de 7 carácteres.")
    } else
        alert("El usuario debe tener más de 7 carácteres.")
}

function subirImagen() {
}
