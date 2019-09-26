$(function () {
    var duration = 100,
        defaultColor = '#3498DB',
        changeColor = '#ae5e9b',
        defaultBorderWidth = '0px',
        changeBorderWidth = '12px';

    $(".blogpost").on({
        'mouseover': function () {
            $(this).stop(true).animate({
                top: '-2px',
            }, duration)
        },
        'mouseout': function () {
            $(this).stop(true).animate({
                top: '0px',
            }, duration)
        }
    });


    $(".s10w button").on({
        'mouseover': function () {
            $(this).stop(true).animate({
                borderWidth: changeBorderWidth,
                color: changeColor,
                backgroundColor: 'white'
            }, duration)
        },
        'mouseout': function () {
            $(this).stop(true).animate({
                borderWidth: defaultBorderWidth,
                color: 'white',
                backgroundColor: defaultColor
            }, duration)
        }
    });
});
