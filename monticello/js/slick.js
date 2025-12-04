document.addEventListener("DOMContentLoaded", () => {
    $(document).ready(function () {
        $('.hero__content__text').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            dots: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            mobileFirst: true,
            // responsive: [
            //     {
            //       breakpoint: 375,
            //       settings: {
            //         vertical: false
            //       }
            //     }
            //   ]
        });

        $('.news_slider_cards').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            dots: true,
            arrows: false,
            autoplay: false,
            infinite: true,
            mobileFirst: true,
            // responsive: [
            //     {
            //       breakpoint: 375,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         arrows: false,
            //         dots: false
            //       }
            //     }
            //   ]
        });
    });
})