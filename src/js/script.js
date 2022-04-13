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
  });
  
