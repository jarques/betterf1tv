var F1 = {

  init: function() {
    // Add Button
    var buttons = "<div id='show-drivers'></div><div id='full-screen-button'></div>";

    $('body').append(buttons);

    $("#full-screen-button").click(function() {
      $('body').toggleClass("larger-view");
    });

    $("#show-drivers").click(function() {
      $('.leaderboard-__-U6G2h').toggleClass("hide-it");
    })
  }

}
$(document).ready(function() {
  F1.init();
})
