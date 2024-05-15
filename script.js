function validateForm() {
    var form = document.getElementById("employeeForm");
    var codigoAreaFijo = form.codigoAreaFijo.value;
    var numeroFijo = form.numeroFijo.value;
    var codigoAreaMovil = form.codigoAreaMovil.value;
    var numeroMovil = form.numeroMovil.value;

    if (!/^([0-9]{2})$/.test(codigoAreaFijo)) {
        alert("Por favor, ingrese un código de área válido para teléfono fijo (formato: 123).");
        return false;
    }

    if (!/^([0-9]{4}-[0-9]{4})$/.test(numeroFijo)) {
        alert("Por favor, ingrese un número de teléfono fijo válido (formato: 4567-8901).");
        return false;
    }

    if (!/^([0-9]{2})$/.test(codigoAreaMovil)) {
        alert("Por favor, ingrese un código de área válido para teléfono móvil (formato: 123).");
        return false;
    }

    if (!/^([0-9]{4}-[0-9]{4})$/.test(numeroMovil)) {
        alert("Por favor, ingrese un número de teléfono móvil válido (formato: 4567-8901).");
        return false;
    }

    return true;
}
