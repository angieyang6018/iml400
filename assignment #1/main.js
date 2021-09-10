$(document).ready(function() {
  $(function () {
    $("#playlist, #jellyfish, #cake, #Messenger, #moon, #Tuscany, #plants1, #plants2, #plants3").draggable();
  });
});

$(document).ready(function () {
  $(".messagename").click(function () {
    $(this).parents(".messages").find(".content").slideToggle();
  });
  // $(".title").click(function () {
  //   $(".content").slideToggle();
  // });
});
