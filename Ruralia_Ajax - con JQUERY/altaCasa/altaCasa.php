<?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "ruralia";
$usuario   = "root";
$password  = "";

$datos=$_POST['datos'];

$oCasa = json_decode($datos);




// Abrir conexion con la BD
$conexion=mysqli_connect("localhost","root","","ruralia")or die(mysqli_error());
mysqli_set_charset($conexion,"utf8");


$sql ="SELECT max(CodCasa) as maximo from casas";
$resultados = mysqli_query($conexion, $sql) or die(mysqli_error());
while ($fila=mysqli_fetch_array($resultados,MYSQL_NUM))
{
	$idCasa=$fila[0] +1;  
}

	$mensaje='INSERTADO CON EXITO';

	$sql = "INSERT into CASAS (CodCasa,CodPropietario,CodUbic,Habitaciones,Piscina,Precio, Descripcion) VALUES ('$idCasa','$oCasa->CodPropietario','$oCasa->CodUbicacion','$oCasa->Habitaciones','$oCasa->Piscina','$oCasa->Precio', '$oCasa->Descripcion')";

	$resultados = mysqli_query($conexion, $sql) or die($mensaje=mysqli_error());
	


$respuesta = $mensaje;

echo json_encode($respuesta); 

mysqli_close($conexion);

?> 