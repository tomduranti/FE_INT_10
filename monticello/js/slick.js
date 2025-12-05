document.addEventListener("DOMContentLoaded", () => {
    $(document).ready(function () {
        $('.hero__content__text').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            dots: true,
            arrows: false,
            autoplay: true,
            infinite: true,
            mobileFirst: true
        });

        $('.news_slider_cards').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            dots: true,
            arrows: true,
            autoplay: false,
            infinite: true,
            mobileFirst: true,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                }
              ]
        });
    });
})