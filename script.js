var progress = 0;
var imgCount = $('img').length;
$("img").each(function () {
    var src = $(this).attr('src');
    $("<img>").attr('src', src).on('load', function () {
        progress++;
    });
});
setInterval(function () {
    $("#progress-bar").css({
        'width': (progress / imgCount) * 100 + '%'
    });
}, 1);