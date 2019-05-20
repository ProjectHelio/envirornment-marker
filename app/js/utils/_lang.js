
// Wait until the DOM is loaded.
document.addEventListener("DOMContentLoaded", function () {

    // Get from the dom all the translatable elements and set the translation.
    document.querySelectorAll('[data-lang]').forEach(function (element, number) {
        element.innerText = browser.i18n.getMessage(element.getAttribute('data-lang'));
    });

});
