$(document).ready(function(){ 
  $.get("glossary-content.html", function(data) {
    $("#glossary-content").html(data);
  });
}); 