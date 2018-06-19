'use strict';

$(document).ready(function () {
    new WOW({
        offset: 0
    }).init();
    // $('header').scrollToFixed({
    //     zIndex: 1000,
    // });
    if ($(window).width() > 1199) {
        $('.filter-wrap2').scrollToFixed({
            marginTop: 166,
            zIndex: 50,
            limit: function limit() {
                return $('.pages').offset().top - $('.filter-wrap2').outerHeight();
            }
        });
    }

    if ($(window).width() > 1199) {
        $('.product-description .tabs-list').scrollToFixed({
            marginTop: 166,
            zIndex: 50
        });
    }
    if ($(window).width() < 1200) {
        $('.product-description .tabs-list').scrollToFixed({
            marginTop: 60,
            zIndex: 50
        });
    }
    $('[data-toggle="tooltip"]').tooltip();

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.product-fly-button').addClass('open');
        } else {
            $('.product-fly-button').removeClass('open');
        }
    });
    $('.up').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    $(".counter").countimator({
        duration: 1000
    });
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());
    $('#responsivetabs, .responsive-tab').responsiveTabs({
        startCollapsed: 'accordion'
    });

    // MENU
    if ($(window).width() < 1200) {
        $('.cart').insertAfter('.login-dropdown');
    }

    $('.btn-showmenu').click(function () {
        $('.menu').toggleClass('open');
        $('.overlay').fadeToggle(500);
    });
    $('.overlay').click(function () {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
    });
    $('.btn-showsub').click(function () {
        $(this).siblings('.sub').slideToggle(300);
        $(this).siblings('.mega').slideToggle(300);
    });
    $('.searchtoggle').click(function () {
        $('.searchwrap').toggleClass('open');
        // $('.overlay').fadeIn(500);
        // $('html').css('overflow', 'hidden');
    });
    $('.btn-closesearch').click(function () {
        $('.searchwrap').removeClass('open');
        // $('.overlay').fadeOut(500);
        // $('html').css('overflow', 'auto');
    });
    // END-MENU

    // LOGIN SCRIPT
    $('.login-toggle').click(function () {
        $('.login-popup').fadeToggle(500);
    });
    // END LOGIN


    $('.btn-apply').click(function () {
        $(this).parent('.btn-wrap').siblings('.apply-form').slideToggle(300);
    });
    $('#map').click(function () {
        $(this).find('iframe').addClass('active');
    }).mouseleave(function () {
        $(this).find('iframe').removeClass('active');
    });
    $('.addresslist .address').click(function () {
        $('.addresslist .address').removeClass('active');
        $(this).addClass('active');
    });

    // BRAND
    // $('.brand-intro .btn-viewmore').click(function() {
    //     $('.brand-intro .content').toggleClass('open');
    //     $(this).slideUp(300);
    // });

    // FILTER SCRIPT
    $('.btn-view2').click(function () {
        $(this).addClass('active');
        $('.btn-view4').removeClass('active');
        $('.product-list .col-lg-3').addClass('col-lg-6').removeClass('col-lg-3');
    });
    $('.btn-view4').click(function () {
        $(this).addClass('active');
        $('.btn-view2').removeClass('active');
        $('.product-list .col-lg-6').addClass('col-lg-3').removeClass('col-lg-6');
    });

    $('.btn-showsubfilter').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(300);
    });
    $('.btn-showcate').click(function () {
        $(this).toggleClass('active');
        $('.btn-showfilter').removeClass('active');
        $('.option-group').removeClass('open');
        $('.category-group').toggleClass('open');
        // $('html').css('overflow', 'hidden');
    });
    $('.btn-showfilter').click(function () {
        $(this).toggleClass('active');
        $('.btn-showcate').removeClass('active');
        $('.category-group').removeClass('open');
        $('.option-group').toggleClass('open');
        // $('html').css('overflow', 'hidden');
    });
    $('.btn-closefilter').click(function () {
        $('.btn-showcate').removeClass('active');
        $('.btn-showfilter').removeClass('active');
        $('.filter-wrap').removeClass('open');
        $('.filter-wrap2').removeClass('open');
        // $('html').css('overflow', 'auto');
    });

    $('.faqtitle').click(function () {
        $(this).siblings('.faqcontent').slideToggle(300);
    });

    // USER
    $('.user-sidebar').click(function () {
        $('.user-sidelink').slideToggle(300);
    });

    $('#btn-changepw').click(function () {
        $('.changepw-form').slideToggle(300);
    });

    // PRODUCT SCRIPT
    if ($(window).width() < 576) {
        // $('.product-info .product-name').insertBefore('.product-page .slidewrap .product-slide');
        // $('.product-info .promotion').insertAfter('.product-page .slidewrap .product-name');
        // $('.product-info .product-overview').insertBefore('.product-page .product-info .share');
    }

    $('.btn-showdetail').click(function () {
        $(this).css('display', 'none');
        $('.product-content').addClass('open');
        $('.btn-hidedetail').css('display', 'block');
    });
    $('.btn-hidedetail').click(function () {
        $(this).css('display', 'none');
        $('.product-content').removeClass('open');
        $('.btn-showdetail').css('display', 'block');
    });

    $('.btn-expand').click(function () {
        var $this = $(this);
        $this.toggleClass('active');
        $('.brand-intro .content').toggleClass('open');
        if ($this.hasClass('active')) {
            $this.text('Thu gọn');
        } else {
            $this.text('Xem thêm');
        }
    });

    // CAREER
    $('.feature .feature-title').click(function () {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.feature-content').slideUp(300);
        } else {
            $('.feature').removeClass('active');
            $('.feature').find('.feature-content').slideUp(300);
            $(this).parent().addClass('active');
            $(this).parent().find('.feature-content').slideDown(300);
        }
    });

    // CAREER
    $('.job .job-title').click(function () {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.job-content').slideUp(500);
        } else {
            $('.job').removeClass('active');
            $('.job').find('.job-content').slideUp(500);
            $(this).parent().addClass('active');
            $(this).parent().find('.job-content').slideDown(500);
        }
    });

    $('.btn-apply').click(function () {
        $('.apply-frm').slideToggle(300);
    });

    // SLIDE
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        infinite: true
    });
    $('.home-brand-slide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 500,
        autoplay: false,
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.home-sale-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        swipe: true,
        swipeToSlide: true,
        infinite: false,
        arrows: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.award-slick').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false
    });

    $('.other-slide, .product-slick').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        swipe: true,
        swipeToSlide: true,
        infinite: false,
        arrows: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.cart-lastview-slide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        swipe: true,
        swipeToSlide: true,
        infinite: false,
        arrows: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.product-center-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        dots: false
    });

    $('.bannerads').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        speed: 1000
    });

    $('.home-system .store-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        arrows: true,
        dots: false,
        autoplay: false
    });

    // ***PRODUCT PAGE SCRIPT***
    // var primgHeight = $('.product-col .product-img').width();
    // $('.product-col .product-img').css('height', primgHeight);
    // var prslideHeight = $('.product-slide a').width();
    // $('.product-slide a').css('height', prslideHeight);
    // $(window).resize(function() {
    //     var primgHeight = $('.product-col .product-img').width()
    //     $('.product-col .product-img').css('height', primgHeight);
    //     var prslideHeight = $('.product-slide a').width();
    //     $('.product-slide a').css('height', prslideHeight);
    // });

    // PRODUCT SLIDE

    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        fade: true,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.product-slide',
        dots: false,
        focusOnSelect: true,
        infinite: false,
        swipe: true,
        swipeToSlide: true,
        vertical: true,
        verticalSwiping: true
        // responsive: [{
        //         breakpoint: 1199,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     },
        //     {
        //         breakpoint: 991,
        //         settings: {
        //             slidesToShow: 4,
        //         }
        //     },
        //     {
        //         breakpoint: 767,
        //         settings: {
        //             slidesToShow: 4,
        //         }
        //     },
        //     {
        //         breakpoint: 543,
        //         settings: {
        //             slidesToShow: 5,
        //             vertical: false,
        //             verticalSwiping: false
        //         }
        //     }
        // ]
    });
    $('.lastview-slide').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 8
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 7
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $('.news-list-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        fade: true,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    // CART PAGE SCRIPT

    $('.removenotice').click(function () {
        $('.cartnotice').slideToggle(300);
    });

    $('#btn-ttmh').click(function () {
        $('.user-info').slideToggle(300);
    });
    $('#btn-xuathd').click(function () {
        $('.bill-form').slideToggle(300);
    });

    $('#ship1').click(function () {
        $('#ship1-popup').show(300);
        $('#ship2-popup').hide(300);
    });
    $('#ship2').click(function () {
        $('#ship2-popup').show(300);
        $('#ship1-popup').hide(300);
    });

    $('.btn-spin').click(function () {

        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);
    });

    // NEW CART PAGE
    $('.btn-exportbill').click(function () {
        $('.form-bill').slideToggle(300);
    });
});