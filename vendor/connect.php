<?php

    $connect = mysqli_connect('localhost', 'root', 'root', 'testbd');

    if (!$connect) {
        die('Error connect to DataBase');
    }