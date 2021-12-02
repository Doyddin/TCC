<?php
header('Content-Type:application/json');
//header('Access-Control-Allow-Origin:*');
require("conexao.php");
    $postdata=file_get_contents("php://input");
    $request=json_decode($postdata);
    $codigo=$request->codigo;
$sql="select * from produto where pro_id=".$codigo;
$result=mysqli_query($conexao,$sql);

if($result){
    $r=$result->fetch_array(MYSQLI_ASSOC);
    http_response_code(200);
    echo json_encode($r,JSON_UNESCAPED_UNICODE);
}else{
    header("HTTP/1.1500ErronoSQL");
    echo json_encode(["erro"=>"ErroSQL:".$conexao->error]);
}