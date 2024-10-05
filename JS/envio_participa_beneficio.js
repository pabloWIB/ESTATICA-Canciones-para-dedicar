// VIEWPORT FUNCTION

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// VIEWPORT FUNCTION ---

// VIEWPORT ANIMATIONS 1

function toggleAnimationN1() {
    var targetSection = document.getElementById("envio_participa_beneficio");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } 
}

window.addEventListener("scroll", toggleAnimationN1);
window.addEventListener("resize", toggleAnimationN1);

toggleAnimationN1();

// VIEWPORT ANIMATIONS 1 ---

// RESET VIEWPORT ANIMATIONS

const envio_participa_beneficio = document.getElementById('envio_participa_beneficio');
    
function scrollValue3() {
    var scroll = window.scrollY;
    if (scroll < 10) {
        envio_participa_beneficio.classList.remove('animationN1');
    } 
}

window.addEventListener('scroll', scrollValue3);

// RESET VIEWPORT ANIMATIONS ---
