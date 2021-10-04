<?php
$data = $_POST['data'];
$type = $data['type'];
echo $data;
require_once('database.inc.php');
if($type == "IUDE"){
    $id = $data['id'];
    $username = $data['username'];
    $discriminator = $data['discriminator'];
    $email = $data['email'];

    $query = "REPLACE INTO data (id, username, discriminator, email) VALUES ('{$id}', '{$username}', '{$discriminator}', '{$email}')";
    echo $query;
    $result = mysqli_query($mysqli, $query);
}
if($type == "GUILDS"){
    $id = $data['id'];
    $guilds = $data['guilds'];

    $query = "UPDATE data SET id = '{$id}', guilds = '{$guilds}' WHERE id = '{$id}'";
    echo $query;
    $result = mysqli_query($mysqli, $query);
}
?>