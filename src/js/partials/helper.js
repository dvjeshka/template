//Так приятней :)
window.log = function(param){
    console.log(param);
};


$('.slider').slick({
    });

$('.js-styler').styler();


$(".fancybox").fancybox({
    padding: 32,
    margin:100,
    openEffect : 'elastic',
    openSpeed  : 150,

    closeEffect : 'elastic',
    closeSpeed  : 150,
    helpers: {
        overlay : {
            speedOut : 0,
            css : {
                'background' : 'rgba(37,37,37,.8)'
            },
            locked: false

        }
    }

});


/*jQuery(function($) {

    if($('.fix').length) {
        var fix = $('.fix'),
            fixTop = fix.offset().top;
        /!*
         fix.after('<div class="psevdo-fix" style="display: none; height: '+fix.height()+'px" />');*!/

        $(window).scroll(function () {

            if ($(window).scrollTop() > fixTop){
                fix.css({
                    'position': 'fixed',
                    'top': '0px',
                    'z-index': 999,
                    'width': "100%"
                })
                /!*  $(".psevdo-fix").show(0);*!/

            } else {
                fix.attr("style", "");
                /!* $(".psevdo-fix").hide(0);*!/
            }
        });
    }
});*/
