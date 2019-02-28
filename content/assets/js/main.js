(function ($) {
    "use strict";
    $(document).ready(function () {

        // ---------------------------------------------//
        // WOW Settings
        // ---------------------------------------------//
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();

        // ----------------------------------------------//
        // Animated menu Button
        // ----------------------------------------------//
        $('button.navbar-toggler').on('click', function (e) {
            $(this).toggleClass('hamburgler');
        });

        // ---------------------------------------------//
        // Smooth Scroll
        //----------------------------------------------//
        $('a.page-scroll').on('click', function (e) {
            event.preventDefault();
            var link = this;
            $.smoothScroll({
                scrollTarget: link.hash
            });
        });

        // ---------------------------------------------//
        // Back To Top
        // ---------------------------------------------//
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        // ---------------------------------------------//
        // Youtube Video Bg
        // ---------------------------------------------//
        $(".youtube-video-bg").each(function () {
            if ($(this).length > 0) {

                var urlId = $(this).attr('data-video-url-id');
                var controls = $(this).data('controls');
                var loop = $(this).data('loop');

                $(this).YTPlayer({
                    showControls: controls,
                    loop: loop,
                    showYTLogo: false,
                    containment: ".youtube-video-bg",
                    videoURL: urlId
                });
            }
        });

        // ---------------------------------------------//
        // Text Rotator
        // ---------------------------------------------//
        if ($(".text-rotate").length > 0) {
            $(".text-rotate").each(function () {
                var separator = $(this).attr('data-separator');
                var animation = $(this).attr('data-animation');
                var speed = $(this).data('speed');
                $(this).textrotator({
                    animation: animation,
                    separator: separator,
                    speed: speed
                });

            });
        }

        // ---------------------------------------------//
        // Slick Slider
        // ---------------------------------------------//
        $('.slider').each(function () {
            var play = $(this).data('autoplay');
            var playSpeed = $(this).data('autoplay-speed');
            var nav = $(this).data('nav');
            var dot = $(this).data('dots');
            var slidesToshow = $(this).data('slides-to-show');
            var slidesToscroll = $(this).data('slides-to-scroll');
            var slideCenter = $(this).data('slick-center-mode');
            $(this).slick({
                arrows: nav,
                dots: dot,
                slidesToShow: slidesToshow,
                autoplay: play,
                autoplaySpeed: playSpeed,
                centerMode: slideCenter,
                slidesToScroll: slidesToscroll,
                responsive: [{
                    breakpoint: 500,
                    settings: {
                        slidesToShow: slidesToshow < 2 ? slidesToshow : 1
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: slidesToshow < 2 ? slidesToshow : 3
                    }
                }]
            });
            $(this).slickAnimation();
        });

        $('.slider-for').each(function () {
            var play = $(this).data('autoplay');
            var playSpeed = $(this).data('autoplay-speed');
            var nav = $(this).data('nav');
            var dot = $(this).data('dots');
            var slidesToshow = $(this).data('slides-to-show');
            var slidesToscroll = $(this).data('slides-to-scroll');
            var slideCenter = $(this).data('slick-center-mode');
            $(this).slick({
                arrows: nav,
                dots: dot,
                slidesToShow: slidesToshow,
                autoplay: play,
                autoplaySpeed: playSpeed,
                centerMode: slideCenter,
                slidesToScroll: slidesToscroll,
                asNavFor: ".slider-nav",
                responsive: [{
                    breakpoint: 500,
                    settings: {
                        slidesToShow: slidesToshow < 2 ? slidesToshow : 1
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: slidesToshow < 2 ? slidesToshow : 3
                    }
                }]
            });
            $(this).slickAnimation();
        });

        $('.slider-nav').each(function () {
            var play = $(this).data('autoplay');
            var playSpeed = $(this).data('autoplay-speed');
            var nav = $(this).data('nav');
            var dot = $(this).data('dots');
            var slidesToshow = $(this).data('slides-to-show');
            var slidesToscroll = $(this).data('slides-to-scroll');
            var slideCenter = $(this).data('slick-center-mode');
            $(this).slick({
                arrows: nav,
                dots: dot,
                slidesToShow: slidesToshow,
                autoplay: play,
                autoplaySpeed: playSpeed,
                centerMode: slideCenter,
                slidesToScroll: slidesToscroll,
                asNavFor: ".slider-for",
                focusOnSelect: true
            });
        });

        // ---------------------------------------------//
        // Multi lavel Dropdown Menu
        // ---------------------------------------------//
        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
            var $el = $(this);
            var $parent = $(this).offsetParent(".dropdown-menu");
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');

            $(this).parent("li").toggleClass('show');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-menu .show').removeClass("show");
            });
            if (!$parent.parent().hasClass('navbar-nav')) {
                $el.next().css({
                    "top": $el[0].offsetTop,
                    "left": $parent.outerWidth() - 4
                });
            }
            return false;
        });

        // ---------------------------------------------//
        // Toggle Search
        // ---------------------------------------------//
        $("header.header").each(function () {
            $("li.search > a", this).on("click", function (e) {
                e.preventDefault();
                $(".top-search").addClass("top-search-open");
            });
        });
        $(".input-group-addon.close-search").on("click", function () {
            $(".top-search").removeClass("top-search-open");
        });

        // ---------------------------------------------//
        // Floating header
        // ---------------------------------------------//
        $(window).on("scroll", function () {
            var $window = $(window);
            var windowsize = $window.width();
            if (windowsize > 991) {
                var bodyScroll = $(window).scrollTop();
                var navbar = $("header.header-sticky nav.navbar");

                if (bodyScroll > 200) {
                    navbar.addClass("header-gone")
                } else {
                    navbar.removeClass("header-gone")
                }
                if (bodyScroll > 400) {
                    navbar.addClass("sticky-active")
                } else {
                    navbar.removeClass("sticky-active")
                }
            }
            if (windowsize > 480) {
                /* init Jarallax */
                $('.parallax').jarallax();
            }
        });

        // ---------------------------------------------//
        // Date & Time Picker
        // ---------------------------------------------//
        $('.datepicker').pickadate();
        $('.timepicker').pickatime();

        // ---------------------------------------------//
        // Mailchimp
        // ---------------------------------------------//
        if ($('.mailchimp').length > 0) {
            $(".mailchimp").each(function () {
                $(this).ajaxChimp({
                    language: 'es',
                    callback: mailchimpCallback,
                    url: "https://techindia.us14.list-manage.com/subscribe/post?u=9006702a98a4e963ed8155a32&amp;id=df1b436182" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
                });
            });
        }

        function mailchimpCallback(resp) {
            if (resp.result === 'success') {
                $('.mailchimp .subscribe-form input.form-control').addClass("is-valid");
                $('.mailchimp .valid-feedback').html(resp.msg).fadeIn(1000);
                $('.mailchimp .invalid-feedback').fadeOut(500);
                $('.mailchimp .subscribe-form input.form-control').removeClass("is-invalid");

            } else if (resp.result === 'error') {
                $('.mailchimp .subscribe-form input.form-control').addClass("is-invalid");
                $('.mailchimp .invalid-feedback').html(resp.msg).fadeIn(1000);
                $('.mailchimp .valid-feedback').fadeOut(500);
            }
        }
        $.ajaxChimp.translations.es = {
            'submit': 'Submitting...',
            0: 'We have sent you a confirmation email',
            1: 'Please enter a value',
            2: 'An email address must contain a single @',
            3: 'The domain portion of the email address is invalid (the portion after the @: )',
            4: 'The username portion of the email address is invalid (the portion before the @: )',
            5: 'This email address looks fake or invalid. Please enter a real email address'
        };

        // ----------------------------------------------//
        // Google Recaptcha
        // ----------------------------------------------//
        if ($('.g-recaptcha').length > 0) {
            var siteKey = "6LebV1gUAAAAAFkHWn3XzwWZYcXDcYPozJrwROlW";
            $("head").append("<script src='https://www.google.com/recaptcha/api.js'></script>");
            $(".g-recaptcha").attr("data-sitekey", siteKey);
        }
        $("form").submit(function (event) {
            var recaptcha = $("#g-recaptcha-response").val();
            if (recaptcha === "") {
                event.preventDefault();
                alert("Please check the recaptcha");
            }
        });

        // ----------------------------------------------//
        // Twitter
        // ----------------------------------------------//
        $('.tweets-feed').each(function () {
            if ($(this).length > 0) {
                var tweetusername = $(this).attr('data-username');
                var tweetcount = $(this).attr('data-amount');

                $(this).attr("id", tweetusername);

                var configProfile = {
                    "profile": {
                        "screenName": tweetusername
                    },
                    "domId": tweetusername,
                    "maxTweets": tweetcount,
                    "enableLinks": true,
                    "showUser": true,
                    "showTime": true,
                    "showImages": false,
                    "showRetweet": false,
                    "lang": 'en'
                };
                twitterFetcher.fetch(configProfile);
            }
        });

        // -------------------------------------------//
        //  progress - box
        // -------------------------------------------//
        $('.progress-bar').each(function () {
            if ($(this).length > 0) {
                var percent = $(this).attr('data-percent');

                $(this).attr("style", "width:" + percent + ";");
            }
        });

        // -------------------------------------------//
        //  CountDown
        // -------------------------------------------//
        if ($('.countdown').length > 0) {
            $('.countdown').each(function () {

                var date = $(this).attr('data-countdown-date');

                $(this).countdown({
                    date: date
                });
            });
        }

        // ---------------------------------------------//
        //  Nice Select
        // ---------------------------------------------//
        $('select').niceSelect();
        $('select[multiple]').niceSelect('destroy');

        // ---------------------------------------------//
        //  Magnific Popup
        // ---------------------------------------------//
        $('.image-popup').magnificPopup({
            delegate: 'a',
            type: 'image',
            removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true,
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });

        // ---------------------------------------------//
        //  Magnific Popup For Video
        // ---------------------------------------------//
        if ($(".videopopup").length > 0) {
            $('.videopopup').each(function () {

                var src = $(this).attr('href');

                $(this).magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false,
                    iframe: {
                        patterns: {
                            youtube: {
                                index: 'youtube.com/',
                                id: 'v=',
                                src: src
                            }
                        }
                    }
                });
            });
        }

    });


    $(window).on('load', function () {
        // ---------------------------------------------//
        //  Preloader
        //--------------------------------------------- //
        jQuery('.preloader').fadeOut(1000);

        // ---------------------------------------------//
        //  counter Up
        //----------------------------------------------//
        if ($('.counter').length > 0) {
            $('.timer').each(function () {
                var delay = $(this).data('counter-delay');
                var playSpeed = $(this).data('counter-time');
                $(this).counterUp({
                    delay: delay, //The delay in milliseconds per number count up
                    time: playSpeed // The total duration of the count up animation
                });
            });
        }

        // -----------------------------------------------//
        // Instafeed
        // -----------------------------------------------//
        $(".instafeed").each(function () {
            if ($(this).length > 0) {
                var id = $(this).attr('data-insta-user-id');
                var item = $(this).attr('data-insta-item');
                var accessToken = $(this).attr('data-accessToken');
                $(this).attr("id", id);

                var instafeed = new Instafeed({
                    target: id,
                    get: 'user',
                    userId: id,
                    limit: item,
                    accessToken: accessToken,
                    resolution: "low_resolution",
                    template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /><div class="insta-counts"><span> <i class="fa fa-heart"></i> <span class="count-number">{{likes}}</span></span></div></a></li>',

                });
                instafeed.run();
            }
        });

        // ---------------------------------------------//
        //  filterizr
        //----------------------------------------------//
        if ($(".portfolio-wrapper").length > 0) {
            var filterizd = $('.portfolio-wrapper').filterizr({});
        }
        if ($(".portfolio-masonry-wrapper").length > 0) {
            var filterizd = $('.portfolio-masonry-wrapper').filterizr({ 
                layout: 'sameWidth'  
            });
        }
        $('.portfolio-nav li').click(function () {
            $('.portfolio-nav li').removeClass('active');
            $(this).addClass('active');
        });

        $('.masonry-grid').masonry({
            // options
            itemSelector: '.masonry-item',
            columnWidth: '.masonry-item',
            percentPosition: true
        });

    });

    // ---------------------------------------------//
    //  Background
    //--------------------------------------------- //
    $("[data-background]").each(function () {
        $(this).attr('style', 'background-image:url(' + $(this).attr("data-background") + ')');
    });

    // ---------------------------------------------//
    //  Smoothscroll
    //--------------------------------------------- //
    SmoothScroll({
        animationTime: 650,
        stepSize: 55,
        accelerationDelta: 60,
        accelerationMax: 4,
        keyboardSupport: true,
        arrowScroll: 50,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        touchpadSupport: false,
        fixedBackground: true,
        excluded: ''
    });

    // ---------------------------------------------//
    //  Partical Background
    //--------------------------------------------- //
    if ($('.particl-bg').length > 0) {

        $(".particl-bg").append("<div id='particles-js'></div>");
        particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 50,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#fff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#fff"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.8,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 3,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 10,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#fff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "50% 50%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            }

        );
    }
})(jQuery);

// ---------------------------------------------//
//  Google Map
//--------------------------------------------- //
if ($('.gmap').length > 0) {

    function initMap() {
        $('.gmap').each(function () {
            var map;
            var mapid = $(this).attr('id');
            var lat = $(this).attr('data-lat');
            var lng = $(this).attr('data-lng');
            var icon = $(this).attr('data-marker-icon');
            var color = $(this).attr('data-style');
            var mapStyle = [];
            if (color === 'light') mapStyle = [{
                    "featureType": "landscape",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "stylers": [{
                            "hue": "#00aaff"
                        },
                        {
                            "saturation": -100
                        },
                        {
                            "gamma": 2.15
                        },
                        {
                            "lightness": 12
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "lightness": 24
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "lightness": 57
                    }]
                }
            ];
            else if (color === 'blue') mapStyle = [{
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "hue": "#00bcff"
                        },
                        {
                            "saturation": "44"
                        },
                        {
                            "lightness": "39"
                        },
                        {
                            "gamma": "0.50"
                        },
                        {
                            "weight": "0.40"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "lightness": 57
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "lightness": 24
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }
            ];
            else if (color === 'dark') mapStyle = [{
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "saturation": 36
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                }
            ];

            // some code
            var map = new google.maps.Map(document.getElementById(mapid), {
                zoom: 15,
                center: new google.maps.LatLng(lat, lng),
                gestureHandling: 'cooperative',
                streetViewControl: false,
                mapTypeControl: false,
                zoomControl: true,
                draggable: true,
                disableDoubleClickZoom: true,
                overviewMapControl: true,
                overviewMapControlOptions: {
                    opened: false,
                },
                zoomControlOptions: {
                    position: google.maps.ControlPosition.TOP_LEFT
                },
                styles: mapStyle
            });
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                icon: icon,
                map: map
            });
        });
    }
    // dynamically add your map
    var tag = document.createElement('script');
    tag.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDi4Q7O7nH5Uo-zdFNeXsP3GZDZ6AFkeQI&callback=initMap";
    tag.defer = true;
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}