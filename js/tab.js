

var tab = $('.card-product__tab');
var wrap = $('.card-product__desc-wrap');

class="card-product__tab" data-tab="one" . class="card-product__desc-wrap" data-tab="one" .





tab.on('click', function (e) {
    e.preventDefault();
    var thisId = $(this).attr('data-tab');
    if (!$(this).hasClass('card-product__tab--active')) {
        tab.removeClass('card-product__tab--active');
        wrap.removeClass('card-product__desc-wrap--active');
    }
    $(this).addClass('card-product__tab--active');
    $(this).closest('.card-product__desc').find('.card-product__desc-wrap[data-tab= ' + thisId + ']').addClass('card-product__desc-wrap--active');
});
