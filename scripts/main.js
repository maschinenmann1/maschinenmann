function controllScroll() {
    controllScrollHint();
    controllNavMenu();
}

function controllNavMenu() {
    if (window.scrollY >= 600) {
        $(".menu-item").addClass("move-items");
        $(".scrolled-menu").css('opacity', '1');
        $(".underline").css('width', '0');
    } else {
        $(".menu-item").removeClass("move-items");
        $(".scrolled-menu").css('opacity', '0');
        $(".underline").css('width', '75%');
    }
}

function controllScrollHint() {
    if (window.scrollY >= 500) {
        $.wait(function () { $(".scroll-hint").fadeOut("slow"); }, .5);
    } else if (window.scrollY <= 100) {
        $.wait(function () { $(".scroll-hint").fadeIn("slow"); }, .2);
    }
}

$(function () {
    $("body").mousewheel(function (event, delta) {
        this.scrollLeft -= (delta * 60);
        event.preventDefault();
    });
});

// SCROLL TOP ON PAGE LOAD
$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

// WAIT METHOD
$.wait = function (callback, seconds) {
    return window.setTimeout(callback, seconds * 1000);
}