let owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    center: true,
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    dotsContainer: "owl-dots"
});
$('.customers__arrow_next').click(function() {
    owl.trigger('next.owl.carousel');
});

$('.customers__arrow_prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
});

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});


let burger = $('.burger');
let list = $('.header__list');

burger.on('click',function () {
    burger.toggleClass('active');
    list.toggleClass('active');
});