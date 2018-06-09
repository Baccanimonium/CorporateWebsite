$('.slider-special-offers').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    infinite: true,
    dots: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots:true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider-our-employees').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1
            }
        }
    ]
});

$('.slider-responses').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

$('.can-interest-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    responsive: [
        {
            breakpoint: 2000,
            settings: {
                arrows: true,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: true,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1
            }
        }
    ]
});

$(function() {
    var $menu = $('#my-menu').mmenu({
        "offCanvas": {
            "zposition": "front"
        },
        "extensions": [
            "pagedim-black",
            "theme-dark",
            "listview-huge"
        ]
    });

    var $icon = $("#mmenu-icon");
    var API = $menu.data( "mmenu" );

    $icon.on( "click", function() {
        if($menu.hasClass('mm-opened')) {
            API.close();
        } else {
            API.open();
        }

    });

    API.bind( "opened", function() {
        setTimeout(function() {
            $icon.addClass( "is-active" );
        }, 100);
    });
    API.bind( "closed", function() {
        setTimeout(function() {
            $icon.removeClass( "is-active" );
        }, 100);
    });
});

window.onload = function() {
    // Horizontal


    baron({
        root: '.baron-wrapper',
        scroller: '.scroll',
        bar: '.baron__bar',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging'
    }).controls({
        // Element to be used as interactive track. Note: it could be different from 'track' param of baron.
        track: '.baron__track',
        forward: '.baron__down',
        backward: '.baron__up'
    })
}

$('.house-inside-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: false,
    fade: true,
    asNavFor: '.house-inside-slider-min',
    responsive: [
        {
            breakpoint: 2000,
            settings: {
                arrows: false
            }
        }
    ]
});
$('.house-inside-slider-min').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.house-inside-slider',
    arrows: true,
    infinite: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 4
            }
        }
    ]
});

var animalSelect = new CustomSelect({
    elem: document.getElementById('animal-select')
});

function CustomSelect(options) {
    var elem = options.elem;

    elem.onclick = function(event) {
        if (event.target.className == 'title') {
            toggle();
        } else if (event.target.tagName == 'LI') {
            setValue(event.target.innerHTML, event.target.dataset.value);
            close();
        }
    }

    var isOpen = false;

    // ------ обработчики ------

    // закрыть селект, если клик вне его
    function onDocumentClick(event) {
        if (!elem.contains(event.target)) close();
    }

    // ------------------------

    function setValue(title, value) {
        elem.querySelector('.title').innerHTML = title;

        var widgetEvent = new CustomEvent('select', {
            bubbles: true,
            detail: {
                title: title,
                value: value
            }
        });

        elem.dispatchEvent(widgetEvent);

    }

    function toggle() {
        if (isOpen) close()
        else open();
    }

    function open() {
        elem.classList.add('open');
        document.addEventListener('click', onDocumentClick);
        isOpen = true;
    }

    function close() {
        elem.classList.remove('open');
        document.removeEventListener('click', onDocumentClick);
        isOpen = false;
    }

}