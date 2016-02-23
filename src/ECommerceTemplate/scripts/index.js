$(document).ready(function () {
    $('nav.categories').affix({
        offset: { top: $('nav.categories').offset().top }
    });
});
$(document).on('click touchstart', function (e) {
    if ($(e.target).closest(".navbar-collapse").length === 0 && $(e.target).closest('[data-target=".navbar-collapse"]').length === 0) {
        $(".navbar-toggle").collapse('hide');
    }
});
$(document).ready(function () {
    //$(".dropdown").hover(
    //    function () {
    //        $('.dropdown-menu', this).fadeIn("fast");
    //    },
    //    function () {
    //        $('.dropdown-menu', this).fadeOut("fast");
    //    });
    $('.offers-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
         
        ]
    });

});

