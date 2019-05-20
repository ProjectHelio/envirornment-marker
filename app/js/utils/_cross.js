
// Cross browser API
window.browser = (() => {
    return window.msBrowser || window.browser || window.chrome;
})();
