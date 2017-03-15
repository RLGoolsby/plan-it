<?php
  // Report all PHP errors
  error_reporting(-1);

  //page variables
  $pageTitle = 'Nursery Listing';
  $includeSidebar = false;


  //Pull in the data about our cats
  include 'nurserydata.php';


?>
  <div id= "local-nurseries">

    <div class= "nurseries">

      <div class= "additional-info">
        <div class = "local">Local Nurseries
        <h3>Build Community. Buy Local</h3>
    <ul>
      <li><a target="_tab" href="views/local-nursery-details.php?name=<?php echo $nursery1->name?>&amp;website=<?php echo $nursery1->website?>"><?php echo $nursery1->name?></a> <a target = "_tab" href="https://www.southernstates.com">click here</a></li>
      <li><a target="_tab" href="views/local-nursery-details.php?name=<?php echo $nursery2->name?>&amp;website=<?php echo $nursery2->website?>"><?php echo $nursery2->name?></a> <a target = "_tab" href="http://fifthseasongardening.com">click here</a></li>
      <li><a target="_tab" href="views/local-nursery-details.php?name=<?php echo $nursery3->name?>&amp;website=<?php echo $nursery3->website?>"><?php echo $nursery3->name?></a> <a target = "_tab" href="http://www.camforest.com">click here</a></li>
      <li><a target="_tab" href="views/local-nursery-details.php?name=<?php echo $nursery4->name?>&amp;website=<?php echo $nursery4->website?>"><?php echo $nursery4->name?></a> <a target = "_tab" href="http://www.theuniqueplant.com">click here</a></li>
      <li><a target="_tab" href="views/local-nursery-details.php?name=<?php echo $nursery5->name?>&amp;website=<?php echo $nursery5->website?>"><?php echo $nursery5->name?></a> <a target = "_tab" href="http://www.nichegardens.com">click here</a></li>
    </ul>
  </div>
  </div>

</div>
</div>
