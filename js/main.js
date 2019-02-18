$(document).ready( function() {
    $('.main-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: '<div class="article-slider__arrow article-slider__arrow--next"><svg><use xlink:href="img/sprites.svg#next"></use></svg></div>', // Кастомная стрелка "далее"
        // prevArrow: '<div class="article-slider__arrow article-slider__arrow--prev"><svg><use xlink:href="img/sprites.svg#prev"></use></svg></div>'
    });

});