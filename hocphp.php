<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php 
    echo" bai 1";
    echo "hello world".'<br>';

    // bai 2 + - * /
    echo" bai 2";
    $a = 10;
    $b = 5;
    
    echo " a + b = ", $a + $b .'<br>';
    echo " a - b = ", $a - $b .'<br>';
    echo " a * b = ", $a * $b . '<br>';
    echo " a / b = ", $a / $b .'<br>';

    // bai 3: for và foreach
    echo" bai 3";
    for($i = 0;$i< 10; $i++){
        if($i ==3) continue;
        echo"the number is: $i <br>";
        if($i ==7) break;
    }

    // foreach 
    $color = array("red" => "1", "green"=> "2", "blue"=> "3", "yellow"=> "4");
    
    foreach($color as $i => $j){
        echo "$i : $j <br>";
    }

    //bai 4 sắp xếp 1 mảng
    echo" bài 4 sắp xếp 1 mảng "."<br>";
    $arr = array("1","9","2","6","4","5","3","8","10","7");
   echo"mảng chưa chuyển tăng dần:";
   echo "<pre>";
    print_r($arr);
    echo "</pre>";

    for( $i = 0; $i < count($arr)-1;$i++){
        for( $j =0; $j < count($arr)-$i-1;$j++){
            if($arr[$j] > $arr[$j+1]){
                $temp = $arr[$j];
                $arr[$j] = $arr[$j+1];
                $arr[$j+1] = $temp;
            }
        }

    }
    
    echo"mảng đã chuyển tăng dần:";
    
    echo "<pre>"; print_r($arr); echo "</pre>";
    
    // bài 5 lấy ra phần tử giống và khác của mảng
    $arr1 = array("1","2","3","6","7","10","9","44","22");
    $arr2 = array("1","2","6","5","11","12","10","22");

    // cách làm: tạo 1 mảng rổng. duyệt qua mảng 1 nếu có phần tử trùng vs mảng 2 thì ra thêm vô mảng rỗng. 

    $intersection =[];
  
    foreach($arr1 as $i){
        foreach($arr2 as $j){
            if($i === $j){
                $intersection[]=$i;
                break;
            }
        }
    }
   
    echo " bài 5: 2 mảng là: <br>";
    echo "<pre>"; print_r($arr1); echo "</pre>";

    echo "<br>";
    echo "<pre>"; print_r($arr2); echo "</pre>";
   
    

    echo"<br> mảng giống nhau là: ";
    
    echo "<pre>"; print_r($intersection); echo "</pre>";

    // tìm phẩn tử khác nhau. thì tương tự nhưng mà là không bằng và phải duyệt mảng 1 rồi tới mảng 2.
    // hàm in_array là kiểm tra có tồn tại hay k
      $difference =[];
    foreach($arr1 as $i){
        if( !in_array($i,$arr2)){
            $difference[] = $i;
        }
    }

    foreach($arr2 as $j){
        if( !in_array($j,$arr1) && !in_array($j , $difference)){
            $difference[] = $j;
        }
    }
    
    echo"<br> mảng khác nhau là: ";
    
    echo "<pre>"; print_r($difference); echo "</pre>";

    
    ?>

</body>
</html>