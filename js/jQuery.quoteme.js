
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
            author: "Unknown"
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

        $.each($(this), function() {

            if ($(this).data("author")) {
                settings.author = $(this).data("author");
                $(this).hover(
                        function(e) {
                            var positionLeft = e.pageX + 5;
                            var positionTop = e.pageY - 15;
                            $("body").append("<div class='tips'>By: <em>" + settings.author + "</em></div>");
                            $(".tips").css({
                                "position": "absolute",
                                "z-index": "999",
                                "top": positionTop,
                                "left": positionLeft,
                                "border-width": settings.borderWidth,
                                "border-color": settings.borderColor,
                                "border-style": settings.borderStyle,
                                "padding": "8px",
                                "background-color": settings.backgroundColor,
                                "border-radius": "10px",
                                "box-shadow": "2px 2px 2px " + settings.boxShadowColor,
                                "color": settings.textColor
                            });
                            $(this).css({
                                "cursor": "pointer"
                            });
                        },
                        function(e) {
                            $("body div.tips").remove();
                        });
            }
            
            if (options !== undefined) {
                if (options.author !== undefined) {
                    $(this).hover(
                            function(e) {
                                var positionLeft = e.pageX + 5;
                                var positionTop = e.pageY - 15;
                                $("body").append("<div class='tips'>By: <em>" + settings.author + "</em></div>");
                                $(".tips").css({
                                    "position": "absolute",
                                    "z-index": "999",
                                    "top": positionTop,
                                    "left": positionLeft,
                                    "border-width": settings.borderWidth,
                                    "border-color": settings.borderColor,
                                    "border-style": settings.borderStyle,
                                    "padding": "8px",
                                    "background-color": settings.backgroundColor,
                                    "border-radius": "10px",
                                    "box-shadow": "2px 2px 2px " + settings.boxShadowColor,
                                    "color": settings.textColor
                                });
                                $(this).css({
                                    "cursor": "pointer"
                                });
                            },
                            function(e) {
                                $("body div.tips").remove();
                            });
                }

            }

            $("body").mousemove(function(e) {
                $(".tips").css({
                    "top": e.pageY - 50,
                    "left": e.pageX - 25
                });
            });
        });
        return this;
    };
})(jQuery);


