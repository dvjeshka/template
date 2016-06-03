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
