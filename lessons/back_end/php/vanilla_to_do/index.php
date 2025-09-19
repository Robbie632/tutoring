<?php
session_start();



if (!isset($_SESSION['to_do'])) {
    $_SESSION['to_do'] = [];
}

function delete($id) {
    if (isset($_SESSION['to_do'])) {
        $_SESSION['to_do']= array_filter($_SESSION['to_do'], fn($value) => $value['time']!==$id);
    
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $uri_eploded = explode('/', $_SERVER['REQUEST_URI']);
    $id = (int) $uri_eploded[2];
    delete($id);
    http_response_code(204);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['item'])) {
        $item = $_POST['item'];
        $itemArray =['time' => time(), 'item'=> $item]; 
        $_SESSION['to_do'][] = $itemArray;
        // below needed otherwise upon refresh data will be posted again
        header('Location: /index');
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
                $text = $item['item'];
                $id = $item['time'];

                echo "<li class='todo'><input class='add' type='text' value='$text'></input></form><button class='delete' id='$id'>delete</button></li>";
            }
            ?>
        </ul>
    </div>
</body>
<script type="module" src="./main.js"></script>

</html>