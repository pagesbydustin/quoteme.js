
(function($) {
    $.fn.quoteme = function(options) {

        var defaults = {
            backgroundColor: '#d0d0d0',
            cornerRadius: "5px",
            borderWidth: "1px",
            borderStyle: "dotted",
            borderColor: "black",
            textColor: "black",
            boxShadowColor: "gray",
        },
        settings = $.extend({}, defaults, options);

        $(this).css({
            "padding": "3px 7px 5px 3px",
            "margin": "3px",
            "font-style": "italic",
            "box-shadow": "inset -3px -3px 8px " + settings.boxShadowColor,
            "background-color": settings.backgroundColor,
            "border-radius": settings.cornerRadius,
            "border-style": settings.borderStyle,
            "border-width": settings.borderWidth,
            "border-color": settings.borderColor,
            "color": settings.textColor
        });

        return this;
    };
})(jQuery);


