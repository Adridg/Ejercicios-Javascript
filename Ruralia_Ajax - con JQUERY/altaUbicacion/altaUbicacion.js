$("#btnAceptarUbicacion").click(altaUbicacion);

var oDatos = null;

function altaUbicacion() {
    // if(validarAltaUbicacion())
    $.ajax({
        url: "altaUbicacion/altaUbicacion.php",
        async: true,
        cache: false,
        method: "POST",
        dataType: "json",
        data: $("#frmAltaUbicacion").serializeArray(),
        //  beforeSend: prepararDatosEnvio,
        complete: respuestaAltaUbicacion
    });
}

function prepararDatosEnvio() {
    oDatos = $("#frmAltaUbicacion").serializeArray();
}

function respuestaAltaUbicacion(oDatosDevueltos, sStatus, oAjax) {

    console.log(oDatosDevueltos);
    console.log(oDatosDevueltos[0]);
    console.log(oDatosDevueltos[1]);

    if (sStatus == "success") {
        // oDatosDevueltos[0]  --- si hay o no error
        if (oDatosDevueltos[0] == false) {
            // Mensaje
            alert(oDatosDevueltos[1]);

            // Como ha ido bien cierro el formulario
            $("#frmAltaUbicacion").hide("normal").get(0).reset();

        } else {
            alert(oDatosDevueltos[1]);
        }
    } else {
        alert("Error del servidor: " + sStatus);
    }

}