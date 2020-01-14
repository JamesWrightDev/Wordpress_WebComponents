<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class FrontPage extends Controller
{
  public function text()
  {
    $text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reiciendis iste ab! Itaque quia provident magnam nesciunt voluptates ullam, consectetur accusamus, eos distinctio voluptate quod, fuga officiis ipsum exercitationem saepe?";

    return $text;
  }
}