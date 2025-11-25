document.addEventListener("DOMContentLoaded", () => {
    $(document).ready(function () {
        $('.hero__content__text').slick({
            vertical: true,
            dots: true,
            arrows: false,
            autoplay: true,
            infinite: true
        });

        $('.news_slider_cards').slick({
            vertical: true,
            dots: true,
            arrows: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });

    });
})

