<?php

    $name= $_POST['name'];
    $email= $_POST['email'];
    $mobile= $_POST['mobile'];  
    $weight= $_POST['weight'];
    $height= $_POST['height'];
    $gender= $_POST['gender'];
    $address= $_POST['address'];


    echo $name;
    echo $email;
    echo $mobile;
    echo $weight;
    echo $height;
    echo $gender;
    echo $address;

    

$link = mysqli_connect("localhost", "root", "", "customer");
 
// Check connection // header

if($link === false){
     die("ERROR: Could not connect. " . mysqli_connect_error());
 }

$sql = "INSERT INTO cust_info (name,email,mobile,weight,height,gender,address) VALUES ('$name','$email','$mobile','$weight','$height','$gender','$address')";
if(mysqli_query($link, $sql)){
         

         ?>
            <meta http-equiv="refresh" content="0; url=http://localhost/Project8/HTML/Thanks.html">
         <?php

  } else{


    echo "<script>
    alert('Something went worng..!'); 
    </script>";
        // echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

 // Close connection
 mysqli_close($link);
?>

