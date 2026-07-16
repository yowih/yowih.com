let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // scrolling down - hide the header
        header.style.top = '-120px'; // adjust value to header's height;
    } else {
        // scrolling up - show the header
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});