// fonction auto exécutable
(function () {
    "use strict"
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    
    const $slides = document.querySelectorAll('.slide');
    
    let $dots;
    
    let currentSlide = 0;
    
    function slideTo(index) {
        currentSlide = index >= $slides.length || index < 1 ? 0 : index;
        $slides.forEach($elt => $elt.style.transform = `translateX(-${currentSlide * 100}%)`);
        $dots.forEach(($elt, key) => $elt.classList = `dot ${key === currentSlide? 'active': 'inactive'}`);
    }
    for (let i = 1; i <= $slides.length; i++) {
        // fix avec le +1
        let dotClass = i == currentSlide+1 ? 'active' : 'inactive';
        let $dot = `<span data-slidId="${i}" class="dot ${dotClass}"></span>`;
        document.querySelector('.carousel-dots').innerHTML += $dot;
    }
    $dots = document.querySelectorAll('.dot');
    $dots.forEach(($elt, key) => $elt.addEventListener('click', () => slideTo(key)));
    prev.addEventListener('click', () => slideTo(--currentSlide))
    next.addEventListener('click', () => slideTo(++currentSlide))
})()