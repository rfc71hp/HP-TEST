let $container = $(".container"),
  $tabButton = $(".tabButton"),
  $headerListContents = $(".headerListContents"),
  $panels = $(".panels");
$(function() {
  // console.log($headerListContents)
  $headerListContents.on("click", function(e) {
    e.preventDefault();

    if ($(this).hasClass("active")) {
      return;
    } else {
      $headerListContents.removeClass("active");
      $(this).addClass("active");
    }
    let href = $(this)
        .find("a")
        .attr("href"),
      $panelContents = $(".panelContents");
    $panelContents.stop(true).fadeOut(function() {
      $(href)
        .stop(true)
        .fadeIn();
    });

    console.log(href);
  });
});
