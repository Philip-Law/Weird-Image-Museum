// Show / Hide paragraph text animation

let shown = false;

function showText() {
    // Shows hidden "For now..."" text on div hover"
    var text = $(".hidden");

    const TIME = 1000;

    // Changes opacity of hidden text

    if (!shown) {
        text.animate({opacity: "1"}, TIME);

        setTimeout(function() {
            shown = true;
        }, TIME);
    }
}

function resetText() {
    // Hides the hidden text on mouse out of div
    var text = $(".hidden");

    const TIME = 1000;

    if (shown) {
        text.animate({opacity: "0"}, TIME);

        setTimeout(function () {
            shown = false;
        }, TIME);
    }
}