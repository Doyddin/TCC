<?php
$host = "localhost";
$user = "root";
$password = "";
$base = "restaurante";

$conexao = @mysqli_connect($host, $user, $password);
$conexao->set_charset("UTF8");
if($conexao->connect_error){
    die("Falhaaoconectar:".$conexao->connect_error);
}

if(!$conexao->select_db($base)){
    die("O Banco de dados não existe");
}
?>