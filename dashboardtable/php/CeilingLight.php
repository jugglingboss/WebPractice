<?php
    $jsonString = file_get_contents('../Data.json');
    $data = json_decode($jsonString, true);

    $data['Lights']['CeilingLight'] = "On";
    $newJsonString = json_encode($data);

    echo $newJsonString;
    
    file_put_contents('../Data.json', $newJsonString);
?>