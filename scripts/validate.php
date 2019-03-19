<?php

$email = $_POST['email'];
$password = $_POST['password']; 

array_push($user_info, $email, $password);

function areCredentialsValid(array $user_info): boolval
{
    echo $user_info;
}