<?php

include('database.php');

if(isset($_POST['search'])) {
    
$search = $_POST['search'];
  $query = "SELECT * FROM task WHERE name LIKE '$search%'";
  $result = mysqli_query($conexion, $query);
  
  if(!$result) {
    die('Query Error' . mysqli_error($conexion));
  }
  
  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'name' => $row['name'],
      'description' => $row['description'],
      'id' => $row['id']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
}

?>