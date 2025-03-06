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
        485: {
            items: 2,
            nav: true,
            center: false,
            margin: 10
        },
        768: {
            items: 3,
            nav: true,
            center: false,
            margin: 10
        },
        992: {
            items: 4,
            nav: true,
            center: false,
            margin: 10
        },
        1200: {
            items: 5,
            nav: true,
            center: false,
            margin: 10
        },
        1366: {
            items: 6,
            nav: true,
            center: false,
            margin: 10
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

$("#el-presentation .el-zone-left .el-block-one .el-container-nav li").on("click", function () {
    $(this).toggleClass("el-closed");
});

$( "#tabs" ).tabs();

