$(document).ready(function(){ 
  $.get("membership-content.html", function(data) {
    $("#membership-content").html(data);
  });
}); 