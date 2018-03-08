// Manejador tras la carga completa de la página
window.addEventListener("load",inicio,false);

function inicio(){

	mform1.submitbutton.addEventListener("click",validarEnvio,false);
	// Alternativa: Validacion sobre evento de formulario submit
	//contacto.addEventListener("submit",validarEnvio,false);

	document.getElementById("mform1").cp.addEventListener('keypress', teclaAbajo);//para el evento del Código Postal
	
	

}

//*********************evento para que solo pueda escribir  número en el código Postal***************/
	function teclaAbajo (oEvento)
	{
	 var oE = oEvento || window.event;
	 if (!soloNumeros(oE)) //si soloNumero devuelve false es que es una letra o caracter especial (menos retroceso)
	 {
  			oE.preventDefault();	 //para el evento predeterminado para que no escribas la letra
 	 }
   }

	//Solo permite introducir numeros.
	function soloNumeros(oE)
	{
	    var key = oE.charCode; //obtiene el charCode de la tecla pulsada
	    var keyCode= oE.keyCode; //sirve para ver si le damos al retroceso, el cual es 8
	    return key >= 48 && key <= 57 || keyCode==8 ; //dara true si el keyCode es el 8 el del retroceso
	}//key del 48 al 57 son los correspondientes a los números
/*******************************************************************************************************/

function validarEnvio(oEvento)
{
	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";


	//usuario

	/*El nombre de usuario debe tener entre 5 y 15 caracteres y utilizar sólo caracteres alfabéticos en mayúsculas o minúsculas o espacios.*/
	var sUsuario = document.getElementById("mform1").username.value.trim();


	if (sUsuario !="")
	{
		var oExpReg = /^[a-z\s]{6,16}$/i;
		if (oExpReg.test(sUsuario) == false){

				document.getElementById("mform1").username.classList.add("error");
				document.getElementById("mform1").username.focus();
				bValido = false;
				sError += "El nombre de usuario debe tener entre 5 y 15 caracteres y utilizar sólo caracteres alfabéticos en mayúsculas o minúsculas o espacios \n"; 
			} else {
				document.getElementById("mform1").username.classList.remove("error");
			}
	}
	else
	{
		document.getElementById("mform1").username.classList.add("error");
				document.getElementById("mform1").username.focus();
				bValido = false;
				sError += "El nombre de usuario no puede estar vacio \n"; 
	}
		

	//contraseña

	var sPass = document.getElementById("mform1").password.value.trim();

	if (sPass !="")
		{

	/*
  La contraseña tiene que tener cierta complejidad: Entre 6 y 15 caracteres.
  Alguna letra mayúscula. Alguna letra minúscula. Algún número.*/

		var oExpReg = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,15}$/i;
		if (oExpReg.test(sPass) == false){

				document.getElementById("mform1").password.classList.add("error");
				
				if(bValido) 
					document.getElementById("mform1").password.focus();
				bValido = false;
				sError += "La contraseña tiene que tener entre 6 y 15 caracteres, y debe haber números, letras mayusculas y letras minusculas \n";
 
			} else {
				document.getElementById("mform1").password.classList.remove("error");
			}
		}
		else
		{
			document.getElementById("mform1").password.classList.add("error");
					if(bValido) 
						document.getElementById("mform1").password.focus();
					bValido = false;
					sError += "la contraseña no puede estar vacia \n"; 
		}
				 		
	//repetir contraseña
	var sRPass = document.getElementById("mform1").password2.value.trim();

	if (sRPass !="")
		{
		/*La contraseña debe ser igual en los dos campos que se utilizan.*/
			 if (sRPass!= sPass )
			 {
			 	document.getElementById("mform1").password2.classList.add("error");
			 	if(bValido) 
					document.getElementById("mform1").password2.focus();
				bValido = false;
				sError += "Las contraseñas deben coincidir \n";
			 
			 }
			 else
			 {
			 	document.getElementById("mform1").password2.classList.remove("error");
			 }
		}
		else
		{
			document.getElementById("mform1").password2.classList.add("error");
			if(bValido)
			{
				document.getElementById("mform1").password2.focus();
			}
			bValido = false;
			sError += "La verificación de la contraseña no puede estar vacio \n";
		}

	//email
	var sEmail = document.getElementById("mform1").email.value.trim();
	if (sEmail !="")
	{
		var oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i;
		if (oExpReg.test(sEmail) == false){

			document.getElementById("mform1").email.classList.add("error");
				
			if(bValido) 
				document.getElementById("mform1").email.focus();
			bValido = false;
			sError += "El email debe tener la siguiente estructura: Caracteres_permitidos@caracteres_permitidos.caracteres_permitidos \n";
 
			} else {
				document.getElementById("mform1").email.classList.remove("error");
			}
	}
	else
	{
		document.getElementById("mform1").email.classList.add("error");
		if(bValido) 
		  document.getElementById("mform1").email.focus();
		bValido = false;
		sError += "El email no puede estar vacio \n";

	}

	//repetir email
	var sRemail = document.getElementById("mform1").email2.value.trim();
	if (sRemail !="")
	{
		 if (sRemail!= sEmail )
		 {
		 	document.getElementById("mform1").email2.classList.add("error");
		 				if(bValido) 
							document.getElementById("mform1").email2.focus();
						bValido = false;
						sError += "Los emails deben coincidir \n";
		 }
		 else
		 {
		 	document.getElementById("mform1").email2.classList.remove("error");
		 }
	}
	else
	{
		document.getElementById("mform1").email2.classList.add("error");
		if(bValido) 
		  document.getElementById("mform1").email2.focus();
		bValido = false;
		sError += "El comprobador de email no puede estar vacio \n";	
	}


	//nombre
	var sNombre = document.getElementById("mform1").firstname.value.trim();
	if (sNombre !="")
	{
		/*El nombre debe tener entre 5 y 15 caracteres y utilizar sólo caracteres alfabéticos en mayúsculas o minúsculas o espacios.*/
		var oExpReg = /^[a-z\s]{6,16}$/i;
		if (oExpReg.test(sNombre) == false){

				document.getElementById("mform1").firstname.classList.add("error");
				document.getElementById("mform1").firstname.focus();
				bValido = false;
				sError += "El nombre de usuario debe tener entre 5 y 15 caracteres y utilizar sólo caracteres alfabéticos en mayúsculas o minúsculas o espacios \n"; 
			} else {
				document.getElementById("mform1").firstname.classList.remove("error");
			}
	}
	else
	{
		document.getElementById("mform1").firstname.classList.add("error");
		if(bValido) 
		  document.getElementById("mform1").firstname.focus();
		bValido = false;
		sError += "El nombre no puede estar vacio \n";	
	}


	//apellidos
	var sApellidos = document.getElementById("mform1").lastname.value.trim();
	if (sApellidos !="")
	{
		/*El campo apellido debe tener entre 5 y 30 caracteres y utilizar sólo caracteres alfabéticos en mayúsculas o minúsculas o espacios.*/
		var oExpReg = /^[a-z\s]{6,30}$/i;
		if (oExpReg.test(sApellidos) == false){

				document.getElementById("mform1").lastname.classList.add("error");
				document.getElementById("mform1").lastname.focus();
				bValido = false;
				sError += "El campo apellido debe tener entre 5 y 30 caracteres y utilizar sólo caracteres alfabéticos en mayúsculas o minúsculas o espacios \n"; 
			} else {
				document.getElementById("mform1").lastname.classList.remove("error");
			}
	}
	else
	{
		document.getElementById("mform1").lastname.classList.add("error");
		if(bValido) 
		  document.getElementById("mform1").lastname.focus();
		bValido = false;
		sError += "El campo apellidos no puede estar vacio \n";		
	}


	//ciudad
	var sCiudad = document.getElementById("mform1").city.value.trim();
	if (sCiudad !="")
	{
		/*la ciudad debe tener entre 4 y 15 caracteres y utilizar sólo caracteres alfabéticos en mayúsculas o minúsculas o espacios.*/
		var oExpReg = /^[a-z\s]{4,16}$/i;
		if (oExpReg.test(sCiudad) == false){

				document.getElementById("mform1").city.classList.add("error");
				document.getElementById("mform1").city.focus();
				bValido = false;
				sError += "La ciudad debe tener entre 5 y 15 caracteres y utilizar sólo caracteres alfabéticos en mayúsculas o minúsculas o espacios \n"; 
			} else {
				document.getElementById("mform1").city.classList.remove("error");
			}

	}
	else
	{	
		document.getElementById("mform1").city.classList.add("error");
		if(bValido) 
		  document.getElementById("mform1").city.focus();
		bValido = false;
		sError += "El campo ciudad no puede estar vacio \n";		
	}


	//postal 
	var iPostal = document.getElementById("mform1").cp.value.trim();

	if (iPostal !="")
	{	
		//El código postal tiene que contar de cinco dígitos numéricos.
		//Es necesario codificar el evento pertinente para que sólo se puedan escribir dígitos en este campo.

		var oExpReg = /^[0-9\s]{5,5}$/i;

		if (oExpReg.test(iPostal) == false){

				document.getElementById("mform1").cp.classList.add("error");
				document.getElementById("mform1").cp.focus();
				bValido = false;
				sError += "El código postal debe tener 5 dígitos \n"; 
			} else {
				document.getElementById("mform1").cp.classList.remove("error");
			}

	}
	else
	{
		document.getElementById("mform1").cp.classList.add("error");
		if(bValido) 
		  document.getElementById("mform1").cp.focus();
		bValido = false;
		sError += "El código postal no puede estar vacio \n";	
	}


	//pais
	var sPais = document.getElementById("mform1").country.value.trim();
	if (sPais == "")
		{
			document.getElementById("mform1").country.classList.add("error");
				if(bValido) 
		 		 document.getElementById("mform1").country.focus();
				bValido = false;
				sError += "Debes seleccionar un pais \n";
		}
		else
		{
			document.getElementById("mform1").country.classList.remove("error");
		}


	if (bValido == false){
		alert(sError);
		oE.preventDefault();
	}
	else
	{
		if (sUsuario != getCookie("usuario"))
		   {
		   	 	setCookie("usuario", sUsuario, 4);
				document.getElementById("mform1").submit();
		   }
		   else
		   {
		   	  alert("Ese usuario ya existe");
		   }
	}


/***********************************************************************************************************************/
//cookies
// Sirve para establecer o modificar el valor de una cookie
function setCookie(cname, cvalue, exdays) { // cookie name, cookie value, dias de validez
    var d = new Date();
    
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    
    var expires = "expires="+d.toUTCString();
    
    document.cookie = cname + "=" + cvalue + "; " + expires;  // Aqui es donde se escribe la cookie
    
}

//Sirve para recuperar el valor almacenado para una cookie
function getCookie(cname) { // cookie name
    var name = cname + "=";
    var ca = document.cookie.split(';'); // Splitea los pares key (clave) / value (valor) name1=valor1;name2=valor2
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

// Sirve para borrar una cookie
function deleteCookie(cname) { // cookie name
      
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";  // Así es como se borra una cookie
    
}


function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}



}


