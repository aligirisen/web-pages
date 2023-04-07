<!DOCTYPE html>
<html>

<head>
	<title>PHP Form</title>
</head>

<body>
    <h2>Preview</h2>
<?php
    //name

use JetBrains\PhpStorm\Language;

    if (isset($_POST['name']) && !empty($_POST['name'])){
       $name = $_POST['name'];
       echo "$name <br>";
    }
    else{
        echo "Name: Not provided <br>";
    }



    //username
    if (isset($_POST['username']) && !empty($_POST['username'])) {
        $username = $_POST['username'];
        echo "$username <br>";
    }
    else {
        echo "Username: Not provided <br>";
    }



    //password
    if (isset($_POST['password']) && !empty($_POST['password'])){
        $password = $_POST['password'];
        echo "$password <br>";
    }
    else{
         echo "Password: Not provided <br>";
    }



    //address
    if (isset($_POST['address']) && !empty($_POST['address'])){
        $address = $_POST['address'];
        echo "$address <br>";
    }
    else{
         echo "address: Not provided <br>";
    }


    //country
    if (isset($_POST['country']) && !empty($_POST['country'])){
        $country = $_POST['country'];
        if($country == "de"){
            echo "Germany " ;
        }
        else if($country == "fr"){
            echo "France ";
        }
        else{
            echo "England ";
        }
        
        echo "<br>";
    }
    else{
         echo "country: Not provided <br>";
    }


    //zipcode
    if (isset($_POST['zipcode']) && !empty($_POST['zipcode'])){
        $zipcode = $_POST['zipcode'];
        echo "$zipcode <br>";
    }
    else{
         echo "Zipcode: Not provided <br>";
    }


    //email
    if (isset($_POST['email']) && !empty($_POST['email'])){
        $email = $_POST['email'];
        echo "$email <br>";
    }
    else{
         echo "Email: Not provided <br>";
    }

    //sex
    if (isset($_POST['gender']) && !empty($_POST['gender'])){
        $gender = $_POST['gender'];
        echo "$gender <br>";
    }
    else{
         echo "Sex: Not provided <br>";
    }

    //language
    if (isset($_POST['languages']) ){
        foreach ($_POST['languages'] as $language) {

            if($language == "de"){
                echo "German <br>" ;
            }
            else if($language == "fr"){
                echo "French <br>";
            }
            else{
                echo "English <br>";
            }
        }
    }
    else{
         echo "Language: Not provided <br>";
    }
    


    //about
    if (isset($_POST['about']) && !empty($_POST['about'])){
        $about = $_POST['about'];
        echo "$about <br>";
    }
    else{
         echo "About: Not provided <br>";
    }
  


?>


</body>