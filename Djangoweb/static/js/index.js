
if ($(window).width() < 480) { //當視窗小於480時才運作
    $(function() {
        $('.navbar a').on('click', function() {
            $('.navbar-toggler').click();
        });
    })
};

var nav_status = document.getElementsByClassName("navbar fixed-top navbar-expand-md navbar-light bg-test fixed-top")[0];

function scrolldown() {
    var scroll_down = document.documentElement.scrollTop;
    if (scroll_down > 90) {
        nav_status.className = "navbar fixed-top navbar-expand-md navbar-light bg-light fixed-top";
    } else {
        nav_status.className = "navbar fixed-top navbar-expand-md navbar-light bg-test fixed-top";
    }
}

function bg2white() {
    nav_status.className = "navbar fixed-top navbar-expand-md navbar-light bg-light fixed-top";
}

window.addEventListener("scroll", scrolldown());

$(function() {
    $('.navbar-toggler').on("click", function() {
        bg2white();
    })
})

$(window).on('load', function() {
    $('#loading').fadeOut(1000);
});