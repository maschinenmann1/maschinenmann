function controllScroll() {
    controllScrollHint();
    controllNavMenu();
}

function controllNavMenu() {

}

function controllScrollHint() {
    if (window.scrollY <= 0) {
        $.wait(function () { $(".scroll-hint").fadeIn("slow"); }, 2);
    } else {
        $.wait(function () { $(".scroll-hint").fadeOut("slow"); }, 2);
    }
}

// SCROLL TOP ON PAGE LOAD
$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

// WAIT METHOD
$.wait = function (callback, seconds) {
    return window.setTimeout(callback, seconds * 1000);
}

