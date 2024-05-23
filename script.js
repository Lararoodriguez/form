function mostrarAlerta() {
    alert("¡Hola bienvenid@! Logueate con tu email y contraseña");
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarAlerta();
    
    // Agregar evento click al botón "Registrarse"
    var registroBtn = document.getElementById("registroBtn");
    registroBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        if (validateForm()) {
            alert("¡Registro exitoso!");
        }
    });
});

function validateForm() {
    var form = document.getElementById("employeeForm");
    var codigoAreaFijo = form.codigoAreaFijo.value;
    var numeroFijo = form.numeroFijo.value;
    var codigoAreaMovil = form.codigoAreaMovil.value;
    var numeroMovil = form.numeroMovil.value;

    if (!/^([0-9]{3})$/.test(codigoAreaFijo)) {
        alert("Por favor, ingrese un código de área válido para teléfono fijo (formato: 011).");
        return false;
    }

    if (!/^([0-9]{8})$/.test(numeroFijo)) {
        alert("Por favor, ingrese un número de teléfono fijo válido (formato: 45678901).");
        return false;
    }

    if (!/^([0-9]{3})$/.test(codigoAreaMovil)) {
        alert("Por favor, ingrese un código de área válido para teléfono móvil (formato: 011).");
        return false;
    }

    if (!/^([0-9]{8})$/.test(numeroMovil)) {
        alert("Por favor, ingrese un número de teléfono móvil válido (formato: 45678901).");
        return false;
    }

    return true;
}