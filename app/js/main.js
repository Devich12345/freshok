$(function(){
    $('.top-slider').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrows/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrows/right.svg"></button>'
    })

    var mixer = mixitup('.product-item');
});