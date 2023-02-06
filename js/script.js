$(document).ready(function(){
    $('.slider__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 1000,
        fade: true,
        draggable: false,
        swipe: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        asNavFor: '.slider__nav'
    });
    $('.slider__nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider__for',
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        draggable: false,
        swipe: false,
        speed: 1000,
        dots: false,
        pauseOnHover: true,
        pauseOnFocus: true,
    });
});

// $('.section').slick({
//     infinite: true,
//     dots: true,
//     speed: 1200,
//     arrows: false,
//     autoplay: true, 
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     slidesToScroll:1,
//     // adaptiveHeight: true,
//     draggable: false,
//     swipe: false,
//     // touchThreshold: 10,
//     swipe: true,
//     variableWidth: false,
//     responsive: [
//       {
//           breakpoint: 850,
//           settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//               dots: true,
//           }
//       },
//   ]
// });


window.onscroll = ()=>{
    if(this.scrollY > 1) {
        $('.navbar').addClass('sticky')
        $('.hamburger').addClass('sticky2')
    }else{
        $('.navbar').removeClass('sticky');
        $('.hamburger').removeClass('sticky2')
    }  
}
$('.section_1_nav ul li a').on('click', function(){
    $('.section_1_nav ul li a').removeClass('section_1_nav_a_active');
    $(this).addClass('section_1_nav_a_active');
})
$('.nav_container').on('click', function(){
    $('.hamburger_container').toggleClass('hamburger_container_active');
    $('.line1').toggleClass('line1_active');
    $('.line2').toggleClass('line2_active');
    $('.line3').toggleClass('line3_active');
    $('body').toggleClass('body_overflow');
})
function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.navbar').addClass('none');
        $('.hamburger').removeClass('none');
        
    }else{
        $('.navbar').removeClass('none');
        $('.hamburger').addClass('none');
    }
}
var x = window.matchMedia("(max-width: 760px)");
myFunction(x);
x.addListener(myFunction);