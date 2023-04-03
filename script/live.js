$(window).on('resize', function() {
    var win = $(this);
    if (win.width() <= 720) {
        $("#everything").css("grid-template-columns", "repeat(3, 1fr)");
    }
    if (win.width() >= 1280) {
        $("#everything").css("grid-template-columns", "repeat(4, 1fr)");
    }
});
