$(document).ready(function() { //every jquery must start with this line of code
    
    // For the sticky navigation
    $('.js--section-features').waypoint(function(direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        }

        if (direction === "up") {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;'
        }
    );

    // Scroll on buttons
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); //where to ascroll, speed
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); //where to ascroll, speed
    });

    //Animations on scroll
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%;'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%;'
    });

    // Mobile navigation
    $('.js--nav-icon').click(function() {
        const nav = $('.js--main-nav');
        const iconClose = $('#close');
        const iconReorderFour= $('#reorder-four');
        
        /* iconReorderFour.hide();
        iconClose.show(); */
       /*  iconReorderFour.toggle();
        iconClose.toggle(); */

        iconReorderFour.css("display", 'none');
        iconClose.css('display', 'inline-block'); 

        nav.slideToggle(200); // time of animation duration to open/close
    });

    /*$('h1').click(function() {
        $(this).css('background-color', '#ff0000'); // this refers to h1, the selected element
    }) */
});