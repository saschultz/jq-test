$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").hide();
    $("#walrus-hidden").show();
  });
  $(".clickable2").click(function() {
    $("#walrus-hidden").hide();
    $("#giraffe-hidden").show();
  });
  $(".clickable3").click(function() {
    $("#giraffe-hidden").hide();
    $("#monkey-hidden").show();
  });
  $(".clickable4").click(function() {
    $("#monkey-hidden").hide();
    $("#walrus-showing").show();
  });
});
