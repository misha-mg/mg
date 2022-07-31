// $('.contact-call').on('click', function() {
//     $('.popup__wrapper').addClass('active');
// });

// $('.popup__wrapper').on('click', function(){
//     $('.popup__wrapper').removeClass('active');
// });




if ($(window).width() < 650) {   
    $('.bio-second__content').addClass('owl-carousel');
} else {
    $('.bio-second__content').removeClass('owl-carousel');
};

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true
    });
});