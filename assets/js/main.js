(function () {
    window.onload = function () {
        window.setTimeout(function() {
            document.querySelector('.preloader').style.opacity = '0';
            document.querySelector('.preloader').style.display = 'none';
        }, 500);
    }

    new WOW().init();
})();