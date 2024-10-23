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

function thirdSection() {
    var targetSection = document.getElementById("thirdSection");
    var thirdSectionSee = document.getElementById("thirdSectionSee");
    if (isElementInViewport(thirdSectionSee)) {
        targetSection.classList.add('thirdSectionAnimation');
    } 
}

function resetViewportAnimations() {
    var scroll = window.scrollY;
    var contentRepartir = document.getElementById('contentRepartir');
    var thirdSection = document.getElementById('thirdSection');

    if (scroll < 10) {
        contentRepartir.classList.remove('AyudanosClass');
        thirdSection.classList.remove('thirdSectionAnimation');
    }
}

// Combine all scroll event listeners
window.addEventListener("scroll", function() {
    toggleAnimationAyudanos();
    thirdSection();
    resetViewportAnimations();
});

window.addEventListener("resize", function() {
    toggleAnimationAyudanos();
    thirdSection();
});

// Initial call
toggleAnimationAyudanos();
thirdSection();

// VIEWPORT ANIMATIONS 2 ---
