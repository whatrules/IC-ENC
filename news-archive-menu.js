$(document).ready(function(){ 
  $.get("news-archive-menu.html", function(data) {
    $("#news-archive-menu").html(data);
  });
}); 