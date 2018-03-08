 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "ruralia";
$usuario   = "root";
$password  = "";

$txtCodProp=$_POST['txtCodProp'];
$txtNombreProp=$_POST['txtNombreProp'];
$txtApellidosProp=$_POST['txtApellidosProp'];
$txtTelefonoProp=$_POST['txtTelefonoProp'];

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());

$sql = "select CodPropietario from propietarios where CodPropietario = '".$txtCodProp."' ";


$resultados = mysql_query($sql, $conexion) or die(mysql_error());


$contador=mysql_num_rows($resultados);

if($contador>0)
{
	$mensaje= 'YA EXISTE ESE PROPIETARIO';
	$error = true;

}
else
{
	$mensaje='INSERTADO CON EXITO';
	$error = false;

	$sql = "insert into PROPIETARIOS (CodPropietario,Nombre,Apellidos,Telefono) VALUES ('$txtCodProp','$txtNombreProp','$txtApellidosProp','$txtTelefonoProp')";

	$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 