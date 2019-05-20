
// Wait until the DOM is loaded.
document.addEventListener("DOMContentLoaded", () => {

    // Lang attribute used to search lang elements.
    let langAttribute = 'data-lang';
    let langSelector = '[' + langAttribute + ']';

    // Get from the dom all the translatable elements and set the translation.
    document.querySelectorAll(langSelector).forEach((element, number) => {

        // Translation needed for the current element.
        let translation = browser.i18n.getMessage(element.getAttribute(langAttribute));

        // Switch to control behaviour for each kind of tag.
        switch (element.tagName.toLowerCase()){
            case 'html':
            case 'body':
                document.title = translation;
                break;
            default:
                element.innerText = translation;
        }

    });

});
