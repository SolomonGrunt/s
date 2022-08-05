function disable() {

    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
// this is not depreciated it works and google says it isnt i have no idea why it says this
        window.onscroll = function() {
            window.scrollTo(LeftScroll, TopScroll);
        };
}
function enable() {
    window.onscroll = function() {};
}
