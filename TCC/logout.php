<?php
session_start();
//session_destroy();

unset($_SESSION['token_id']);

header('Location:login.html');