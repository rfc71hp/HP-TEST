//スムーススクロール

$(function () {
  $('nav a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

/***************** MENU ******************/

$(function () {
  $(".navbar-toggle").click(function () {
    $("#gnavi").slideToggle(200);
    $(".icon-bar").toggleClass("closeup");
    return false;
  });
});

//スマホのメニューをタップしたら閉じる

$(document).ready(function () {
  $(".navbar-nav li a").click(function (event) {
    $(".navbar-collapse").removeClass("show");
  });
});

const pics_src = [
  "../img/main.jpg",
  "../img/image-top.jpg",
  "../img/image-top2.jpg"
];
let num = -1;

function slideshow_timer() {
  if (num === 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slide").src = pics_src[num];
}

setInterval(slideshow_timer, 1000);