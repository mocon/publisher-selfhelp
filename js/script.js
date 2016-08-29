// Show and hide off-canvas navigation
(function($) {
    var element = $('[gg-slide-nav]'),
        html = $('[gg-slide-nav-html]'),
        menuOpen = false;

    function toggleMenu(e) {
        $('[gg-slide-nav-button]').toggleClass('gds-page-header__menu--open');
        if (menuOpen) {
            closeMenu();
        } else {
            openMenu(e);
        }
    }

    function openMenu(e) {
        e.stopPropagation();
        element.addClass("gds-slide-out");
        html.addClass('hide-overflow');
        menuOpen = true;
    }

    function closeMenu() {
        element.removeClass("gds-slide-out");
        html.removeClass('hide-overflow');
        menuOpen = false;
    }

    $('body').on('click', '[gg-slide-nav-button]', toggleMenu).on('click', '[gg-nav-closer]', closeMenu);

    // Toggle .gds-slide-nav menu with "a" key
    $(document).keypress(function(e) {
        // If any inputs or textareas are being typed in, disable "a" hotkey for showing .gds-slide-nav menu
        if ($('input[type="text"]:focus').length === 0 && $('input[type="email"]:focus').length === 0 && $('input[type="url"]:focus').length === 0 && $('input[type="password"]:focus').length === 0 && $('textarea:focus').length === 0 && e.which === 97) {
            toggleMenu(e);
        }
    });

    // Hide .gds-slide-nav menu with esc
    $(document).on('keydown', function(e) {
        if (menuOpen && $('input[type="text"]:focus').length === 0 && $('input[type="email"]:focus').length === 0 && $('input[type="url"]:focus').length === 0 && $('input[type="password"]:focus').length === 0 && $('textarea:focus').length === 0 && e.which === 27) {
            toggleMenu();
        }
    });
}(jQuery));

// Off-canvas menu logic
(function($) {
    $('[gg-expandable]').on('click', function() {
        var ea = 'gds-slide-nav__link--expanded',
            el = 'gds-slide-nav__list--expanded';
        if ($(this).hasClass(ea)) {
            $(this).parent().removeClass(el).children('[gg-expand-list]').removeClass(el).parent().find('a').first().removeClass(ea);
        } else {
            $(this).parent().siblings().removeClass(el).find('[gg-expand-list]').removeClass(el).parent().find('a').removeClass(ea);
            $(this).parent().addClass(el).children('[gg-expand-list]').addClass(el).parent().find('a').first().addClass(ea);
        }
        return false;
    });
}(jQuery));

// Avatar menu
(function($) {
    $('body').on('click', '[gg-avatar]', function() {
        $(this).toggleClass('gds-avatar--menu-open');
    });
}(jQuery));

// Minimize header on scroll
$(window).bind('scroll', function() {
    if ($(window).scrollTop() >= 5) {
        $('.gds-page-header__product-bar').addClass('gds-page-header__product-bar--collapsed');
    }
    else {
        $('.gds-page-header__product-bar').removeClass('gds-page-header__product-bar--collapsed');
    }
});
