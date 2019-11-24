<?php
    include('./conn.php');

    $idlist = $_REQUEST['idlist'];

    $sql = "select * from dm_product_b where pro_id in ($idlist)";

    $res = $mysqli->query($sql);

    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;

    $mysqli->close();
?>