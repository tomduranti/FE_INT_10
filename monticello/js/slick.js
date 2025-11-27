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
            vertical: false,
            dots: true,
            arrows: true,
            autoplay: false,
            infinite: true,
        });
    });
})

