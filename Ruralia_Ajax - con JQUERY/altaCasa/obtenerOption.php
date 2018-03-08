<?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


// Creamos la conexión al servidor.
$conexion=mysqli_connect("localhost","root","","ruralia")or die(mysqli_error());
mysqli_set_charset($conexion,"utf8");

// Consulta SQL para buscar en la bbdd
$sql = "select CodUbic, Nombre from ubicaciones";
$resultados = mysqli_query($conexion, $sql) or die(mysqli_error());

$arrayOptions = array();
$arrayValues = array();

while ($fila=mysqli_fetch_array($resultados,MYSQL_NUM))
{
	//$arrayOptions[]= '<option value="'.$fila[0].'">'.$fila[1].'</option>';
	$arrayOptions[]=$fila[1];
	$arrayValues[]=$fila[0];
}

//provisional por si no manda la otra forma de hacer los propietarios
$sql = "select CodPropietario, Nombre from propietarios";
$resultados = mysqli_query($conexion, $sql) or die(mysqli_error());

$arrayOptions2 = array();
$arrayValues2 = array();

while ($fila=mysqli_fetch_array($resultados,MYSQL_NUM))
{
	//$arrayOptions[]= '<option value="'.$fila[0].'">'.$fila[1].'</option>';
	$arrayOptions2[]=$fila[1];
	$arrayValues2[]=$fila[0];
}




mysqli_close($conexion);

//$resultado = array($arrayValues,$arrayOptions);
$resultado = array($arrayValues,$arrayOptions, $arrayValues2, $arrayOptions2);

echo json_encode($resultado);





?> 