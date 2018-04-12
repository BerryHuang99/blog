window.onload = function() {
    let banner = document.getElementById('banner');
    if (banner) {
        let width = window.screen.width;
        let i = parseInt((Math.random() * 20 + 1));
        if (width > 768) {
            banner.style.backgroundImage = 'url(/images/bg/bg-lg-' + i + ')';
        } else {
            banner.style.backgroundImage = 'url(/images/bg/bg-sm-' + i + ')';
        }
    }
}