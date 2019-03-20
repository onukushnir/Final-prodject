function initMobile() {
    console.log("is-mobile");  
}
      
function initTablet() {  
  console.log("is-tablet");
}
   
function initDesktop() {
    console.log("is-desktop"); 
 }   
    

ssm.addStates([
    {
        id: 'mobile',
        query: '(max-width: 640px)',
        onEnter: function(){
            initMobile();
        }
    },
    {  
        id: 'tablet',
        query: '(min-width: 641px) and (max-width: 992px)',
        onEnter: function(){
            initTablet();
        }
    },
    {
        id: 'desktop',
        query: '(min-width: 993px)',
        onEnter: function(){
            initDesktop();
        }
    }
]);


//Isotope
const gal = $('.gallery');

gal.isotope({
    itemSelector: '.photo',

});
$(document).on('click', '.container-3__nav-item', e => {
    const filter = $(e.target).data('filter');
    if($(e.target).hasClass('active')){
        return false
    }
    $(e.target).addClass('active').siblings().removeClass('active')
    gal.isotope({ filter: '.' + filter });

});

gal.imagesLoaded().progress( function() {
    gal.isotope('layout');
});

////Slick
$(function () {
    $('.slick').slick({
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        appendDots: '.my-dots',
        dotsClass: 'my-dots',
    });
});
$(function () {
    $('.slick1').slick({
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        appendDots: '.my-dots1',
        dotsClass: 'my-dots1',
    });
});
////Smooth Scroll
new SmoothScroll('a[href*="#"]',{
    speed: 1500,
    offset: 0
});



