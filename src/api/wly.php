<?php 
    $username = isset($_GET['username'])?$_GET['username'] : '请传递参数';
    $data = array('王小丫','lili','嘿嘿','小白','金三胖');
    if(in_array($username,$data)){
        echo 'no';
    }else {
        echo 'yes';
    }
?>