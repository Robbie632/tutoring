<?php
session_start();
$item =  $_POST['item'];
if (!is_null($item)) {
    $_SESSION['to_do_item'] = $item;
}
?>

<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>To do list</h1>
    <div class="container">
        <p>Add items below</p>
        <form action="/index.php" method="post">
            <label for="item">item</label>
            <input type="text" name="item" id="item">
            <input type="submit" value="add item">
        </form>
        <ul>
            <li>item 1</li>
            <?php
            echo "<li>" . $_SESSION['to_do_item'] . "</li>"
            ?>
        </ul>
    </div>
</body>

</html>