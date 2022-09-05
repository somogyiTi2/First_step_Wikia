<?php

/**
 * Get the database connection
 *
 * @return object Connection to the database server
 */
function getDB()
{
    $db_host = "localhost";
    $db_name = "cms";
    $db_user = "cms_www";
    $db_pass = "64w6H2rOJ1zwLRyk";

    $conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

    if (mysqli_connect_error()) {
        echo mysqli_connect_error();
        exit;
    }

    return $conn;
}
