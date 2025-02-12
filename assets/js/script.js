$("#el-hero-slider .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    center: true,
    responsiveClass: true,
    responsive:{
        0: {
            items: 1,
            dots: true
        },
    }
});

$("#el-clients .owl-carousel, #el-partners .owl-carousel").owlCarousel({
    //items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    center: true,
    responsiveClass: true,
    responsive:{
        0: {
            items: 1,
            nav: true
        },
    }
});

$("#el-realisation .owl-carousel").owlCarousel({
    //items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    center: true,
    margin: 10,
    responsiveClass: true,
    responsive:{
        0: {
            items: 1,
            nav: true
        },
    }
});