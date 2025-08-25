$(document).ready(function() {

    //main mobile menu toggle
    $('.mobile-menu-icon').on('click', function(even) {
        even.preventDefault();
        $('.header-main, .navigation-links, .mobile-menu-icon').toggleClass('active');
    });

    //mobile sub menu link
    // Toggle active class when "before" is clicked
    $('.sub-toggle').on('click', function(e) {
        e.preventDefault();

        $(this).next('ul').toggleClass('active');
        $(this).toggleClass('active');
    });

});
