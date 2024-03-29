let isScrollHintVisible = true;

// SCROLL METHODS
function controllScroll() {
    controllScrollHint();
    controllNavMenu();
    animationsAtSpecificScroll();
    testing();
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
    if (window.scrollY >= 100 && isScrollHintVisible === true) {
        $.wait(function () { $(".scroll-hint").fadeOut("slow"); isScrollHintVisible = false }, .5);
    } else if (window.scrollY < 100 && isScrollHintVisible === false) {
        $.wait(function () { $(".scroll-hint").fadeIn("slow"); isScrollHintVisible = true }, .2);
    }
}

function animationsAtSpecificScroll() {
    if (window.scrollY >= 350) {
        //$("#about-me h2").addClass('preorderTitleAnimation');
        $("#about-me h2 span").addClass('span-run');
    }
    if (window.scrollY >= 450) {
        $("#about-me h5").addClass('fadeInAnimation');
        $("#about-me section").addClass('fadeInAnimation');
    }
}

// SCROLL TOP ON PAGE LOAD
$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

// NAVIGATION METHODS
function navigateTo(url) {
    window.location.href = url;
}

function openTab(url) {
    window.open(url, "_blank");
}

// WAIT METHODS
$.wait = function (callback, seconds) {
    return window.setTimeout(callback, seconds * 1000);
}

// SET BACKGROUND HEIGHT
$(document).ready(function () {
    $("header").css("height", screen.availHeight);
});

$(window).on("resize", function () {
    $("header").css("height", screen.availHeight);
});

// SET FAVICON DEPENDING ON BROWSER THEME
const setFavicon = () => {
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = (window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? './assets/images/icon_white.png'
        : './assets/images/icon_black.png';
};

setFavicon();