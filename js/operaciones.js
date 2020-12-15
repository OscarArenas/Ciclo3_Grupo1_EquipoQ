function validarUsuario() {
    var username = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contrasenia").value;

    if (contrasenia.length > 7) {
        //alert("Iniciar sesión: " + username + ", " + contrasenia);
        window.location.href = "html/gestion_imagenes.html";
    } else
        alert("La contraseña debe tener más de 7 carácteres.")
}

function registrarUsuario() {
    var username = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contrasenia").value;
    var correo = document.getElementById("email").value;

    if (username.length > 7) {
        if (contrasenia.length > 7) {
            var patron = /[A-Za-z0-9]+@([A-Za-z0-9]+\.)+[A-Za-z0-9]+/;

            if (correo.match(patron)) {
                alert("Registrar Usuario: " + username + ", " + contrasenia + ", " + correo)
            } else
                alert("Correo no válido")
        } else
            alert("La contraseña debe tener más de 7 carácteres.")
    } else {
        alert("El usuario debe tener más de 7 carácteres.");
        document.getElementById("usuario").focus()
    }
}

function recuperarContrasenia() {
    var correo = document.getElementById("email").value;

    var patron = /[A-Za-z0-9]+@([A-Za-z0-9]+\.)+[A-Za-z0-9]+/;

    if (correo.match(patron)) {
        alert("Enlace enviado al correo " + correo + " para recuperar contraseña.")
    } else
        alert("Correo no válido")
}

function subirImagen() {
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;

    if (nombre.length > 0) {
        if (descripcion.length > 0) {
        } else {
            alert("Ingrese la descripción de la imagen.")
        }
    } else {
        alert("Ingrese el nombre de la imagen.")
    }
}

function buscarImagen() {
    var dato = document.getElementById("datoBusqueda").value;

    if (dato.length > 0) {

    } else {
        alert("Ingrese el dato de búsqueda")
    }
}

function validarDatoActualizar() {
    var dato = document.getElementById("datoActualizar").value;

    if (dato.length > 0) {

    } else {
        alert("Ingrese la palabra clave de búsqueda.")
    }
}

function validarDatoDescargar() {
    var dato = document.getElementById("datoDescargar").value;

    if (dato.length > 0) {

    } else {
        alert("Ingrese la palabra clave de búsqueda.")
    }
}

function validarDatoEliminar() {
    var dato = document.getElementById("eliminar").value;

    if (dato.length > 0) {

    } else {
        alert("Ingrese la palabra clave de búsqueda.")
    }
}