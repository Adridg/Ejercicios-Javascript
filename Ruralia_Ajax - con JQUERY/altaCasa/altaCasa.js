

$.getScript("altacasa/obtenerOption.js", cargarOtroCombo);
$("#btnAltaCasa").click(altaCasa);


function cargarOtroCombo()
{
	$.ajax({
		method: "POST",
		url:  "altaCasa/obtenerOptionProp.php",
		dataType: "json",
		complete: respuestaObtenerOption
		});
}



function respuestaObtenerOption(oDatosDevueltos, sStatus, oAjax)
 {


        	var sdatos= oDatosDevueltos.responseJSON;

        //var sdatos= JSON.parse(we);
	
		for (var i = 2; i < sdatos[2].length; i++) 
		{	
			var option= document.createElement("OPTION");
			option.textContent=sdatos[3][i];
			option.value=sdatos[2][i];
			document.querySelector("#cmbPropietario").appendChild(option);
		}
}






function altaCasa() 
{



	if(validarAltaCasa() == true)
	{
		var iCodPropietario= frmAltaCasa.cmbPropietario.value.trim();
		var iCodUbicacion= parseInt(frmAltaCasa.cmbUbicaciones.value.trim());
		var sDescripcion=  frmAltaCasa.txtDescripcion.value.trim()
		var iHabitaciones= parseInt(frmAltaCasa.txtHabitaciones.value.trim());
		var sPiscina=  frmAltaCasa.chkPiscina.value.trim();

		if (sPiscina == undefined)
		{
			sPiscina = "N";
		}
		var dbPrecio=   parseFloat(frmAltaCasa.txtPrecio.value.trim());


	 	var oCasa = new Casa("",iCodPropietario, iCodUbicacion, sDescripcion, iHabitaciones, sPiscina, dbPrecio);
	 
	 	var sDatos = "datos=" + JSON.stringify(oCasa);

			 	$.ajax({
		method: "POST",
		url:  "altaCasa/altaCasa.php",
		dataType: "json",
		data: sDatos,
		complete: respuestaAltaCasa
		});
	}

}

function respuestaAltaCasa(oDatosDevueltos, sStatus, oAjax) {


        	alert(oDatosDevueltos.responseJSON);

        // Como ha ido bien cierro el formulario
        $("#frmAltaCasa").hide("normal").get(0).reset();
}



function validarAltaCasa(oEvento)
{
	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";

	if (document.frmAltaCasa.cmbPropietario.length ==0  && document.frmAltaCasa.cmbUbicaciones.length==0)
	{
		sError += "No tengas tanta prisa, los select se están cargando \n"; 
	}


 var sHabitacion = document.frmAltaCasa.txtHabitaciones.value.trim(); 

	if (sHabitacion !="")
	{
		var oExpReg = /^[\d]{1,11}$/i;
		if (oExpReg.test(sHabitacion) == false){

				document.frmAltaCasa.txtHabitaciones.classList.add("error");

			if(bValido) 
				document.frmAltaCasa.txtHabitaciones.focus();

				bValido = false;
				sError += "La habitación debe ser numérica \n"; 
			} else {
				document.frmAltaCasa.txtHabitaciones.classList.remove("error");
			}
	}
	else
	{
		document.frmAltaCasa.txtHabitaciones.classList.add("error");
		
		if(bValido) 
			document.frmAltaCasa.txtHabitaciones.focus();

		bValido = false;
		sError += "No puedes dejar el campo habitación vacio \n"; 
	}




 var sPrecio = document.frmAltaCasa.txtPrecio.value.trim(); 

	if (sPrecio !="")
	{
		var oExpReg = /^([0-9])+(,([0-9])+)*$/; 
		if (oExpReg.test(sPrecio) == false){

				document.frmAltaCasa.txtPrecio.classList.add("error");

			if(bValido) 
				document.frmAltaCasa.txtPrecio.focus();

				bValido = false;
				sError += "El precio debe ser numérico  \n"; 
			} else {
				document.frmAltaCasa.txtPrecio.classList.remove("error");
			}
	}
	else
	{
		document.frmAltaCasa.txtPrecio.classList.add("error");
		document.frmAltaCasa.txtPrecio.focus();
		bValido = false;
		sError += "No puedes dejar el campo precio vacio \n"; 
	}

 var sDescrpcion = document.frmAltaCasa.txtDescripcion.value.trim(); 

	if (sDescrpcion =="")
	{
		document.frmAltaCasa.txtDescripcion.classList.add("error");
		document.frmAltaCasa.txtDescripcion.focus();
		bValido = false;
		sError += "No puedes dejar el campo descripcion vacio \n"; 
	}

	if (bValido == false){
		alert(sError);
		return false;
	}
	else
	{
		return true;
	}





}

