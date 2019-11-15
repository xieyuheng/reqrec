<?php

require_once "./postbin.php";

$bin_id = bin()["binId"];

$url = "https://postb.in/$bin_id";

$data = [
    "email" => "cicada@example.com",
    "display_name" => "xieyuheng",
];

$req = [
    "http" => [
        "method" => "POST",
        "header" => "Content-Type: application/x-www-form-urlencoded",
        "content" => http_build_query($data)
    ]
];

$req_id = bin_req($bin_id, $req);

print_r(bin_get($bin_id, $req_id));
