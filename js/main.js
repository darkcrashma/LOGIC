$(document).ready( function() {
    $('.main-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.featured-work-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.quotation-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    mapAccordeon();
    accordeon();

    $('.header__logo').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() <= '768') {
            $(this).toggleClass("logo--active");
            $('.navigation-menu').toggleClass('navigation-menu--active');
            $('body, html').toggleClass('overflowHidden');
        }
    });

});


$('.why-list__item--active').find('.why-list__text').slideDown();
function accordeon() {
    var $title = $('.why-list__title');
    var $cont = $('.why-list__text');
    var $clos = $('.why-list__item');
    var classActive = 'why-list__title--active';
    $title.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if(!$this.hasClass(classActive)) {
            $cont.slideUp();
            $title.removeClass(classActive);
            $clos.removeClass('why-list__item--active');
        }
        $this.closest($clos).toggleClass('why-list__item--active');
        $this.next($cont).slideToggle();
        $this.toggleClass(classActive);
    });
}

function mapAccordeon() {
    var $button = $('.map-btn');
    var $map = $('.map-box');
    $button.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('map-btn--active');
        $map.toggleClass('map-box--active');
    });

}

var tab = $(".advantages-list__item");
var text = $('.advantages-text');

tab.on('click', function (e) {
    e.preventDefault();
    var thisId = $(this).attr('data-tab');
    if (!$(this).hasClass('advantages-list__item--active')) {
        tab.removeClass('advantages-list__item--active');
        text.removeClass('advantages-text--active');
    }
    $(this).addClass('advantages-list__item--active');
    $(this).closest('.advantages-block').find('.advantages-text[data-tab= ' + thisId + ']').addClass('advantages-text--active');
});




















