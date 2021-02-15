<?php
function multiples($a, $b, $start, $stop, $mult){
    for($i = $start; $i <=$stop; $i++){
        if($i%$a == 0 and $i%$b != 0){
            $mult[0] += 1;
        } else if($i%$a != 0 and $i%$b == 0){
            $mult[1] += 1;
        } else if($i%$a == 0 and $i%$b == 0){
            $mult[2] += 1;
        } else {
            $mult[3] += 1;
        }
    }
    return $mult;
}

$myfile = fopen("input.txt", "r") or die("Unable to open file!");
$a = 0;
$b = 0;
$mult = [0,0,0,0];

$firstLine =  fgets($myfile, filesize("input.txt"));
$nums = explode(" ", $firstLine);
$a = $nums[0];
$b = $nums[1];
$secondLine = fgets($myfile, filesize("input.txt"));
$range = explode(" ", $secondLine);
$start = $range[0];
$stop = $range[1];

$mult = multiples($a, $b, $start, $stop, $mult);
foreach ($mult as $j){
    echo $j." ";
}

fclose($myfile);
?>