var checkHash = function(){
    var handler = function() {
        console.log('dsfsdf');
        if ($(event.target).closest(".popup__wp").length) return;
        window.location.hash="#x";
        history.pushState('', document.title, window.location.pathname);
        event.stopPropagation();
        $(document).unbind('click', handler);
    };
    $(document).bind('click', handler);  // установим обработчик нажатия кнопки мыши на элементе foo



    if(window.location.hash.indexOf("#popup") != -1) {
        $('body').addClass('overflow-hidden');

    } else $('body').removeClass('overflow-hidden');
    /* history.pushState('', document.title, window.location.pathname);*/ //удаляет hash
};

checkHash();

$(window).bind('hashchange', function() {
    checkHash();
});