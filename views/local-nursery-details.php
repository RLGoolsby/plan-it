<?php
  // Report all PHP errors
  error_reporting(-1);

  //page variables
  $pageTitle = 'Local Nurseries';
  $includeSidebar = false;

  //Main page content. The if statement changes the width of the main container if not using the sidebar.
?>



    <h2>Local Nurseries</h2>
    <p>The best way to give back to your community. Buy Local.</p>
    <table style="width:100%">
      <tr>
        <th>Name:</th>

        <td> <?php $name = htmlspecialchars($_GET["name"]);
        echo $name?></td>
      </tr>
      <tr>
        <th>Website:</th>
        <td><?php $website = htmlspecialchars($_GET["website"]);
        echo $website?></td>
      </tr>
    </table>
  </section>
