<!DOCTYPE html>
<html lang="en">
<head>
  <style></style>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Home</title>
	<link rel="stylesheet" href = "home.css">
    <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>
<!-- design part yung HTML here take note yung inaassign na name especially sa buttons -->

<body class="bd">
    <h1>welcome to my portpolio</h1>


    <table class="tbl">
    <tr class="hometr">
    <th>About Me</th>
    <th>Experience</th>
    <th>Contact</th>
    </tr>
    <tr class="hometr">
    <td><button name= "modal1" class = "modal-open" data-modal = "modal1" id="myBtn"><i class="fa fa-id-card" style="font-size:100px"></button></td>
    <td><button class = "modal-open" data-modal = "modal2" id="Btn"><i class="fa fa-database" style="font-size:100px"></button></td>
    <td><button class = "modal-open" data-modal = "modal3" id="Btn"><i class="fa fa-user-plus" style="font-size:100px"></button></td>
  </tr>
</table>


<!-- The Modal Admission-->
<div id="modal1" class="modal">

  <!-- Modal content -->
  <div class="modal-content1">
    <button class="icon modal-close"><i class="fa fa-close" style="font-size:24px"></i></button>
    <h1 style="text-align: center;">About Me</h1><br>
  </div>
</div>

<!-- The Modal Admission-->
<div id="modal1" class="modal">
 <!-- Modal content -->
 <div class="modal-content1">
    <button class="icon modal-close"><i class="fa fa-close" style="font-size:24px"></i></button>
    <h1 style="text-align: center;">Experience</h1><br>
  </div>
</div>

<!-- The Modal Admission-->
<div id="modal1" class="modal">
 <!-- Modal content -->
 <div class="modal-content1">
    <button class="icon modal-close"><i class="fa fa-close" style="font-size:24px"></i></button>
    <h1 style="text-align: center;">Contact</h1><br>
  </div>
</div>
</body>




</html>
