$(document).ready(function () {

    let $activeSlide = $('.active');
    let $homeSlide = $('.slide');
    let $slideNavPrev = $('#prev');
    let $slideNavNext = $('#next');

    function init() {
        TweenMax.set($homeSlide.not($activeSlide), {autoAlpha: 0});
        TweenMax.set($slideNavPrev, {autoAlpha: 0.2});
    };

    init()

    function goToNextSlide(slideOut, slideIn, slideInAll) {
        let t1 = new TimelineLite();
        let slideOutContent = slideOut.find('.card-content');
        let slideInContent = slideIn.find('.card-content');
        let slideOutImg = slideOut.find('.card-img');
        let slideInImg = slideOut.find('.card-img');
        let index = slideIn.index(0);
        let size = $homeSlide.length;
        console.log(index);
        console.log(size, 'size');
        console.log(slideIn.length , 'slidein');

        if (slideIn.length !== 0) {
            t1
                .set(slideIn, {autoAlpha: 1, className: '+=active'})
                .set(slideOut, {className: '-=active'})
                .to(slideOutContent, 0.65, {y: '+=40', ease: Power3.easeInOut}, 0)
                .to(slideOutImg, 0.65, {backgroundPosition: 'bottom', ease: Power3.easeInOut}, 0)
                .to(slideInAll, 1, {y: '-=100%', ease: Power3.easeInOut}, 0)
                .fromTo(slideInContent, 0.65, {y: '-=40px'}, {y: 0, ease: Power3.easeInOut}, '-=0.7')
                .fromTo(slideInImg, 0.65, {backgroundPosition: 'top'}, {backgroundPosition: 'bottom', ease: Power3.easeInOut}, '-=0.7')
        }

        TweenMax.set($slideNavPrev, {autoAlpha: 1});

        if (index === size - 1) {
            TweenMax.to($slideNavNext, 0.3, {autoAlpha: 0.2, ease: Linear.easeNone});
        }
    };

    // Controls
    $slideNavNext.click(function(e) {
        e.preventDefault();

        let slideOut = $('.slide.active');
        let slideIn = $('.slide.active').next();
        let slideAll = $('.slide');

        goToNextSlide(slideOut, slideIn, slideAll);
    });

    function goToPrevSlide(slideOut, slideIn, slideInAll) {
        let t1 = new TimelineLite();
        let slideOutContent = slideOut.find('.card-content');
        let slideInContent = slideIn.find('.card-content');
        let slideOutImg = slideOut.find('.card-img');
        let slideInImg = slideOut.find('.card-img');
        let index = slideIn.index(0);
        let size = $homeSlide.length;
        console.log(index);

        if (slideIn.length !== 0) {
            t1
                .set(slideIn, {autoAlpha: 1, className: '+=active'})
                .set(slideOut, {className: '-=active'})
                .to(slideOutContent, 0.65, {y: '-=40', ease: Power3.easeInOut}, 0)
                .to(slideOutImg, 0.65, {backgroundPosition: 'top', ease: Power3.easeInOut}, 0)
                .to(slideInAll, 1, {y: '+=100%', ease: Power3.easeInOut}, 0)
                .fromTo(slideInContent, 0.65, {y: '+=40px'}, {y: 0, ease: Power3.easeInOut}, '-=0.7')
                .fromTo(slideInImg, 0.65, {backgroundPosition: 'bottom'}, {backgroundPosition: 'top', ease: Power3.easeInOut}, '-=0.7')
        }

        TweenMax.set($slideNavPrev, {autoAlpha: 1});

        if (index === 0) {
            TweenMax.to($slideNavPrev, 0.3, {autoAlpha: 0.2, ease: Linear.easeNone});
        } 
    };

    // Controls
    $slideNavPrev.click(function(e) {
        e.preventDefault();

        let slideOut = $('.slide.active');
        let slideIn = $('.slide.active').prev();
        let slideAll = $('.slide');

        goToPrevSlide(slideOut, slideIn, slideAll);
    });



})