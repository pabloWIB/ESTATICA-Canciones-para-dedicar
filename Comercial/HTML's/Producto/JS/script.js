// LOAD ANIMATIONS

$(function(){
    setTimeout(function(){
        $("#contentProducto").addClass("contentProductoEdit");
    }, 450);
});

// LOAD ANIMATIONS

// VIEWPORT ANIMATIONS 2

function toggleAnimationAyudanos() {
    var targetSection = document.getElementById("contentRepartir");
    var contentRepartirSee = document.getElementById('contentRepartirSee');
    if (isElementInViewport(contentRepartirSee)) {
        targetSection.classList.add('AyudanosClass');
    } 
}

window.addEventListener("scroll", toggleAnimationAyudanos);
window.addEventListener("resize", toggleAnimationAyudanos);

toggleAnimationAyudanos();

// VIEWPORT ANIMATIONS 2 ---


// RESET VIEWPORT ANIMATIONS

const contentRepartir = document.getElementById('contentRepartir');
    
function scrollValue3() {
    var scroll = window.scrollY;
    if (scroll < 10) {
        contentRepartir.classList.remove('AyudanosClass');
    } 
}

window.addEventListener('scroll', scrollValue3);

// RESET VIEWPORT ANIMATIONS ---
