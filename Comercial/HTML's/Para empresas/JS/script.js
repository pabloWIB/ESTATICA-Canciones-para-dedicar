// LOAD ANIMATIONS

$(function(){
    setTimeout(function(){
        $("#firstSectionFaqs").addClass("firstSectionFaqsAnimation");
        $("#secondSection").addClass("firstSectionFaqsAnimation");
    }, 350);
});

// LOAD ANIMATIONS

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
// RESET VIEWPORT ANIMATIONS ---
