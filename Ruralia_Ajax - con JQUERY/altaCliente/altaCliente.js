$("#btnAceptarCliente").click(altaCliente);



function altaCliente() {

    // if(validarAltaCliente())
    var oCliente = new Cliente(frmAltaCliente.txtCodCliente.value.trim(), frmAltaCliente.txtNombreCliente.value.trim(), frmAltaCliente.txtApellidosCliente.value.trim(), frmAltaCliente.txtTelefonoCliente.value.trim());
    var sDatos = "datos=" + JSON.stringify(oCliente);

    $.post("altaCliente/altaCliente.php", sDatos, respuestaAltaCliente, 'json');

}

function respuestaAltaCliente(oDatosDevueltos, sStatus, oAjax) {

    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#frmAltaCliente").hide("normal").get(0).reset();

    } else {
        alert(oDatosDevueltos[1]);
    }


}