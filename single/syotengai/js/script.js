$(function() {
  if (location.hash !== "") {
    var id = location.hash;
    $(".reqTypeBtn").removeClass("active");
    $(id).addClass("active");

    let avtiveHref = $(id).attr("href");
    $(".contents")
      .stop(true)
      .hide();
    $(avtiveHref)
      .stop(true)
      .show();
  }

  if (location.hash === "" && $(".active").attr("id") === "gojubanBtn") {
    $("#gojubanBtn").addClass("active");
    history.pushState(null, null, "#gojubanBtn");
  }

  $(".reqTypeBtn").on("click", function(e) {
    e.preventDefault();

    if ($(this).hasClass("active")) {
      return;
    }

    $(".reqTypeBtn").removeClass("active");
    $(this).addClass("active");

    //ハッシュ付与
    var addHash = "#" + $(".active").attr("id");
    history.pushState(null, null, addHash);

    let avtiveHref = $(this).attr("href");
    $(".contents")
      .stop(true)
      .hide();
    $(avtiveHref)
      .stop(true)
      .show();
  });
});
