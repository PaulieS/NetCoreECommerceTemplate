$(document).ready(function () {
    $('.main-top-bar').affix({
        offset: {top: $('.main-top-bar').offset().top}
    });
});
$(document).on('click touchstart', function (e) {
    if ($(e.target).closest(".navbar-collapse").length === 0 && $(e.target).closest('[data-target=".navbar-collapse"]').length === 0) {
        $(".navbar-toggle").collapse('hide');
    }
});
//$(document).ready(function () {
//    $(".dropdown").hover(
//        function () {
//            $('.dropdown-menu', this).fadeIn("fast");
//        },
//        function () {
//            $('.dropdown-menu', this).fadeOut("fast");
//        });
//});