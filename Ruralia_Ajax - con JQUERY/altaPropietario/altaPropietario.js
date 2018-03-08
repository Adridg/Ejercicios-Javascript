$("#btnAceptarProp").click(altaPropietario);

function altaPropietario() {

    // if(validarAltaPropietario())

    var sDatos = $("#frmAltaPropietario").serialize();

    $.post("altaPropietario/altaPropietario.php", sDatos, respuestaAltaPropietario, 'json');

}

function respuestaAltaPropietario(oDatosDevueltos, sStatus, oAjax) {

    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#frmAltaPropietario").hide("normal").get(0).reset();

    } else {
        alert(oDatosDevueltos[1]);
    }


}