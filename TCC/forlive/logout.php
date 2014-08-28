<?php
session_start();
//session_destroy();

unset($_SESSION['token_id']);

header('Location: http://localhost/update2/');