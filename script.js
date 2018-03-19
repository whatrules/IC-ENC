$(document).ready(function(){ 
  $.get("Header.html", function(data) {
    $("#header").html(data);
  });
}); 

$(document).ready(function(){ 
  $.get("Footer.html", function(data) {
    $("#footer").html(data);
  });
}); 