//getting modal opening buttons
var modalbtns = document.querySelectorAll(".modal-open");

modalbtns.forEach(function(btn){
    btn.onclick = function () {
        var modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = "block";
    };
});

var closebtns = document.querySelectorAll(".modal-close");

closebtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = (btn.closest(".modal").style.display="none");
    };
});

function myFunction() {
    alert("Successfully Added");
  }

function myFunction1() {
    alert("New Admin Added");
  }