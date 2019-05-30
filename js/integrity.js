(function($) {
    "use strict";

    var $myTopnav = $("#myTopnav"),
        y_pos = $myTopnav.offset().top,
        height = $myTopnav.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $myTopnav.addClass("myTopnav-fixed").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $myTopnav.removeClass("myTopnav-fixed").clearQueue().animate({
                top: "-48px"
            }, 0);
        }
    });

})(jQuery, undefined);
