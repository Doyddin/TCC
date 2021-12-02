<?php
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:*");
header("Access-Control-Allow-Headers:*");
require("conexao.php");
$postdata=file_get_contents("php://input");
$request=json_decode($postdata);
$mesa = $_GET["mesa"];
$sql="SELECT mesas.mesa_id as id, produto.nome as nome, mesas.quantidade as quantidade , (mesas.quantidade * produto.preco) as preco FROM mesas INNER JOIN produto ON mesas.produto = produto.pro_id where mesa_id = $mesa;";
$result=mysqli_query($conexao,$sql);
if($result){
    $row = $result->fetch_all(MYSQLI_ASSOC);
        // echo json_encode($mesa,JSON_UNESCAPED_UNICODE);
        // echo json_encode($nome,JSON_UNESCAPED_UNICODE);
        // echo json_encode($quantidade,JSON_UNESCAPED_UNICODE);
        echo json_encode($row, JSON_UNESCAPED_UNICODE);
        
}
else{
    header("HTTP/1.1500ErronoSQL");
    echo json_encode(["erro"=>"ErroSQL:".$conexao->error]);
}