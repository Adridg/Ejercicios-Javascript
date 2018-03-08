
	$(document).ready(function()
	{
		$.get("altaCasa/obtenerOption.php", respuestaOption);
	});



function respuestaOption(oDatosDevueltos, sStatus, oAjax) 
{
	var we= oAjax.responseText;
	var sdatos= JSON.parse(we);
	
	
	   for (var i = 0; i < sdatos[0].length; i++) 
		{	
			var option= document.createElement("OPTION");
			option.textContent=sdatos[1][i];
			option.value=sdatos[0][i];
			document.querySelector("#cmbUbicaciones").appendChild(option);
		}


}





