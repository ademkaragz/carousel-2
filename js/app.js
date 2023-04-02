$(document).ready(function () {

    var $carousel = $('.carousel ul');

    var $slides = $('.carousel li');

    var slideCount = $slides.length;

    var currentIndex = 0;

    var interval;

    function startSlider() {

        interval = setInterval(function () {

            $carousel.animate({ 'margin-left': '-=100%' }, 1000, function () {

                currentIndex++;

                if (currentIndex === slideCount) {

                    currentIndex = 0;

                    $carousel.css('margin-left', 0);

                }

            });

        }, 3000);

    }

    function stopSlider() {

        clearInterval(interval);

    }

    $carousel

        .on('mouseenter', stopSlider)

        .on('mouseleave', startSlider);

    $('.next').click(function () {

        if (currentIndex === slideCount - 1) {

            currentIndex = 0;

            $carousel.css('margin-left', 0);

        } else {

            currentIndex++;

        }

        $carousel.animate({ 'margin-left': '-=100%' }, 1000);

    });

    $('.prev').click(function () {

        if (currentIndex === 0) {

            currentIndex = slideCount - 1;

            $carousel.css('margin-left', '-200%');

        } else {

            currentIndex--;

        }

        $carousel.animate({ 'margin-left': '+=100%' }, 1000);

    });

    startSlider();

});

