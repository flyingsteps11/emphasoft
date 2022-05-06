$(document).ready(function () {
    document.addEventListener('scroll', () => {
        if (scrollY > 148) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    $('.tell-us__btn, .fields__btn').on('click', () => {
        document.body.style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        $('#popup').addClass('overlay-visible');
    });

    $(document).mouseup(function (e) {
        var container = $("#popup");
        if (container.has(e.target).length === 0) {
            $('#popup').removeClass('overlay-visible');
            document.body.style.overflowY = 'auto';
            document.querySelector('html').style.overflowY = 'auto';
        }
    });
    $('.menu__btn').on('click', () => {
        $('body').toggleClass('hidden');
        $('html').toggleClass('hidden');
    });
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 3,
        slidesPerGroup: 3,
        observer: true,
        observeSlideChildren: true,
        observeParents: true,
        speed: 500,
        pagination: {
            el: '.customer__pagination',
            bulletClass: 'swiper--bullet',
            bulletActiveClass: 'active',
            clickable: true,
            renderBullet(index, className) {
                return '<button class="bullets--item ' + className + '"></button>';
            },
        },
        breakpoints: {
            0: {
                slidesPerView: "auto",
                slidesPerGroup: 1,
            },
            1440: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            }
        },

        navigation: {
            nextEl: '.slide-right',
            prevEl: '.slide-left',
        },
    });

});
