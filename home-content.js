$(document).ready(function(){ 
  $.get("home-content.html", function(data) {
    $("#home-content").html(data);
  });
}); 
