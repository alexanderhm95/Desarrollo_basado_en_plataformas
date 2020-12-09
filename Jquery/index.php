<?php
   	$conexion=mysqli_connect('localhost','alex','root','insertar'); 
    if (!$conexion) {
        echo "<p> Error al conectar con la BD " . mysqli_connect_error() . "</p>";
        exit;
    }
    $sentencia = "select * from clientes";
    if (!($resultado = mysqli_query($conexion, $sentencia))) {
        echo "<p> Error al ejecutar consulta </p>";
    }
    //fetch Obtener una fila de resultado como un array asociativo
    while ($fila = mysqli_fetch_assoc($resultado)) {
        echo "<option value='{$fila['Id']}'>{$fila['Nombre']}</option>";
    }
    mysqli_free_result($resultado);
    mysqli_close($conexion);

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];

    $sql = "insert into usuarios (nombre, apellido, usuario, password) 
            values ('$nombre','$apellido','$usuario', '$password')";
    echo mysqli_query($conexion,$sql);

?>