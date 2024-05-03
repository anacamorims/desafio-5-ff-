window.addEventListener('scroll', function() {
    let header = document.querySelector('.nav-header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


