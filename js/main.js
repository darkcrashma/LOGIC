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
});

$('.why-list__item--active').find('.why-list__text').slideDown();

function accordeon () {
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
accordeon();