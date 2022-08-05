// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/l-arrow.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/r-arrow.png"></button>',
//         draggable: false,
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
//   });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: false,
    preventScrollOnTouch: 'auto',
    responsive: {
        320: {
          nav: true,
          autoWidth: true
        },
    }
});
  
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});