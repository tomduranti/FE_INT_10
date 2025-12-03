document.addEventListener("DOMContentLoaded", () => {
    $(document).ready(function () {
        $('.hero__content__text').slick({
            vertical: true,
            dots: true,
            arrows: false,
            autoplay: false,
            infinite: true,
            responsive: [
                {
                  breakpoint: 375,
                  settings: {
                    vertical: false
                  }
                }
              ]
        });

        $('.news_slider_cards').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            dots: true,
            arrows: true,
            autoplay: false,
            infinite: true,
        });
    });
})