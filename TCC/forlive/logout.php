<?php
session_start();
session_destroy();

// unset($_SESSION['token_id']);
// unset($_SESSION['email']);

header('Location: http://localhost/update2/');