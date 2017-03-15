<?php
class nursery {
  public $name = true;
  public $website;


  public function __construct($name, $website) {
    $this->name = $name;
    $this->website = $website;

  }
}

$nursery1 = new nursery("Southern States","https://www.southernstates.com");
$nursery2 = new nursery("Fifth Seasons Gardening", "http://fifthseasongardening.com");
$nursery3 = new nursery("Camellia Forest", "http://www.camforest.com");
$nursery4 = new nursery("Unique Plants", "http://www.theuniqueplant.com");
$nursery5 = new nursery("Niche Gardens", "http://www.nichegardens.com");
?>
