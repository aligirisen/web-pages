<!-- Ali Riza Girisen -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Currency Page</title>
</head>

<body>
    <br> <br>
    <form action="Activity5.php" method="post">

        <div>
            <label for="name">From:</label>
            <input type="number" name="amount" id="amount" value="<?php if ($amount = isset($_POST['amount']) and !empty($_POST['amount'])) {
                                                                        echo $_POST['amount'];
                                                                    } else {
                                                                        echo null;
                                                                    } ?>">

            <label for="currency">Currency</label>
            <select id="country" name="country">
                <option value="USD">US Dollar</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="EUR">Euro</option>


            </select>

        </div>


        <div>
            <label for="name">To:</label>
            <input type="text" name="converted_amount" id="name" value="    <?php

                                                                            $rates = array(
                                                                                "EUR/EUR" => 1.0,
                                                                                "USD/USD" => 1.0,
                                                                                "CAD/CAD" => 1.0,
                                                                                "USD/CAD" => 1.36,
                                                                                "CAD/USD" => 0.74,
                                                                                "USD/EUR" => 0.91,
                                                                                "EUR/USD" => 1.11,
                                                                                "EUR/CAD" => 1.47,
                                                                                "CAD/EUR" => 0.67
                                                                            );

                                                                            if (isset($_POST['convert'])) {
                                                                                $from_currency = $_POST['country'];
                                                                                $to_currency = $_POST['country2'];
                                                                                $amount = $_POST['amount'];


                                                                                $rate = $rates["$from_currency/$to_currency"];
                                                                                $converted_amount = $rate * $amount;


                                                                                echo $converted_amount;
                                                                            }

                                                                            ?>">


            <label for="currency">Currency</label>
            <select id="country2" name="country2">
                <option value="USD">US Dollar</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="EUR">Euro</option>
            </select>

        </div>

        <input class="button" type="submit" value="convert" name="convert">

    </form>



</body>

</html>