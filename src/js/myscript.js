
//Isotope
const gal = $('.gallery');

gal.isotope({
    itemSelector: '.photo',

});
$(document).on('click', '.container-3__nav-item',
    function (e){
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
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        appendDots: '.my-dots',
        dotsClass: 'my-dots',
    });
});
$(function () {
    $('.slick2').slick({
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        appendDots: '.my-dots',
        dotsClass: 'my-dots',
    });
});
$(function () {
    $('.slick1').slick({
        autoplay: false,
        speed: 300,
        infinite: false,
        edgeFriction: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        appendDots: '.my-dots1',
        dotsClass: 'my-dots1',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
    });
});
////Smooth Scroll
new SmoothScroll('a[href*="#"]',{
    speed: 1500,
    offset: 30
});
//////ToTop Button
$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() !== 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });

});
//FancyBox
$(document).ready(function() {
    $(".fancybox").fancybox({
});
});
$(document).ready(function() {
    $(".fancybox1").fancybox({
    });
});
//Menu
const  menuButton = $('.menu-button');
const mobileMenu = $('.mobile-menu-container');

$(document).on('click', '.menu-button', function(){
    const $this =  $(this);
    $this.toggleClass('active');
    mobileMenu.slideToggle();
});
function initMobile() {
    console.log("is-mobile");
}
function initDesktop() {
    mobileMenu.hide();
    menuButton.removeClass('active');
    console.log("is-desktop");
}
ssm.addState({
    id: 'tablet',
    query: '(max-width: 900px)',
    onEnter: function(){
        initMobile();
    }
});
ssm.addState({
    id: 'desktop',
    query: '(min-width: 900px)',
    onEnter: function(){
        initDesktop();
    }
});
//Form Validation
var patternName = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
const vm = new Vue({
    el: '#app',
    data: {
        name: '',
        email: '',
        noValidEmail: false,
        noValidName: false,
        showBtn: false,

    },
    created: function() {
    document.querySelectorAll('.valid-msg').forEach(function (el) {
        el.classList.remove('hide')
    } )
    },
    watch: {
        name: function(val) {
            if (val.length) {
                this.showBtn = true
            }
            this.noValidName = val.length > 3 && patternName.test(this.name) ? false : true;

        },
        email: function(val) {
            if (val.length) {
                this.showBtn = true
            }
            this.noValidEmail = pattern.test(this.email) ? false : true;
        }
    },
    methods: {
        handleSubmit: function(e) {
            if (this.name.length < 2) {
                this.noValidName = true;
                e.preventDefault()
            }
            if (!this.validateEmail(this.email)) {
                this.noValidEmail = true;
                e.preventDefault()
            }
        },
        validateEmail: function(val) {
            if (pattern.test(this.email)) {
                return true;
            }

        }
    }
})


