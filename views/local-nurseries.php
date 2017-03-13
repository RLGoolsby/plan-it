<?php
  // Report all PHP errors
  error_reporting(-1);
?>

$data = file_get_contents('https://api.yelp.com/v2/search/?location=chapel-hill,nc&limit=5');
$json_data = json_decode($data, true);
// var_dump($json_data);
$nurseries = $json_data['nurseries'];
 ?>


<div id="local-nurseries">

    <div class="nurseries">

      <section class= "additional-info">



        <form action="local-nurseries.php" method="post">
          <label class="local">Local Nurseries</label>

          <input type="text" name="nursery">
          <input type="submit" id="formSubmit" value="Submit">

          <?php
          if ($_SERVER["REQUEST_METHOD"] == "POST") {
          $nursery = htmlspecialchars($_POST["nursery"]);
          // echo nursery;
          echo $nursery;
          }?>


        </form>
      </section>
    </div>
</div>
