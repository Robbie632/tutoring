<?php
session_start();

if (!isset($_SESSION['to_do'])) {
    $_SESSION['to_do'] = [];
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['item'])) {
        $item = $_POST['item'];
        $itemArray =['time' => time(), 'item'=> $item]; 
        $_SESSION['to_do'][] = $itemArray;
        // below needed otherwise upon refresh data will be posted again
        header('Location: ' . 'index.php');
    } 
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
            <?php
            foreach ($_SESSION['to_do'] as $item) {
                echo "<li>" . $item['item'] . "</li>";
            }
            ?>
        </ul>
    </div>
</body>

</html>