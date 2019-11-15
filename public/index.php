<?php

require_once "./conference.php";

$archlinuxcn_shenzhen_2019 = new conference_t(["lily", "fc", "xyh"]);

echo $archlinuxcn_shenzhen_2019 . "\n";

echo $archlinuxcn_shenzhen_2019->sponsors[0] . "\n";
