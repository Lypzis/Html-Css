// use JQuery and its plugins when everything is ready
$(document).ready(function () {

    /* Example */
    // when an h1 element is clicked, execute the below :D
    /*
    $('h1').click(function(){
         // will change the background color of the H1 to red
        $(this).css('background-color', '#ff0000');
    });
    */

    /* JQuery Waipoint Plugin - Sticky navigation */
    // from this section forward
    $('.js--section-features').waypoint(function (direction) {
        // if direction is down, appear sticky nav
        if (direction == 'down') {
            $('nav').addClass('sticky');
        }
        // if goes up from the section, disappear 
        else {
            $('nav').removeClass('sticky');
        }
    }, { offset: '85px' });
    /* ----------------------------------------------- */

    /* Scroll on buttons */
    // when button clicked, scroll to another section
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });
    /* ----------------------------------------------- */

    /* Navigation Scroll: Smooth-Scrolling-Accessibility Snippet from css-tricks.com */
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    /* ----------------------------------------------- */

    /* Animations on Scroll: Using Animate.css, obs: it's not necessary to use JQuery for this, these effects can be achieved with just css */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
            offset: '50%' // will trigger on start of section
        });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
            offset: '50%' // will trigger on start of section
        });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
            offset: '50%' // will trigger on start of section
        });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
            offset: '50%' // will trigger on start of section
        });
    /* ----------------------------------------------- */

    /* Responsive Navigation */
    $('.js--mobile-nav-icon').click(function () {
        const nav = $('.js--main-nav');
        const icon = $('.js--mobile-nav-icon ion-icon');

        nav.slideToggle(200); // vualá, opens the list items!

        // old
        /*
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        */

        icon[0].name === 'reorder' ?
            icon[0].name = 'close' :
            icon[0].name = 'reorder';

        //icon.removeName('reorder');
        //console.log(icon);
        //console.log(icon[0].name);
    });
    /* ----------------------------------------------- */

});