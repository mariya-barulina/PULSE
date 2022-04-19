$(document).ready(function(){
    $('.watch__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/leftarrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/rightarrow.png"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });  
    $(function() {
  
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
          $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });
        
      });  
      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-card__content').eq(i).toggleClass('catalog-card__content_active');
                $('.catalog-card__back').eq(i).toggleClass('catalog-card__back_active');
            })
        });
    };

    toggleSlide('.catalog-card__link');
    toggleSlide('.catalog-card__linkback')
  });
  
