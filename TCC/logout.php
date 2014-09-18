<?php
session_start();
//session_destroy();

unset($_SESSION['token_id']);

unset($_SESSION['user']);

header('Location:login.html');