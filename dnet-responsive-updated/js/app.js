$('#partner-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('#gal-slider').owlCarousel({
    loop:true,
    margin:1,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$(document).ready(function() {
    $('.nav-bar').slicknav({
        prependTo: '.mobile-menu',
        label: '',
       allowParentLinks: true,
      });
});

$(function() {
	$('.card-title').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
});