// LOAD ANIMATIONS

$(function(){
    setTimeout(function(){
        $("#nav").addClass("navigationIDAnimation");
    }, 350);
});

// LOAD ANIMATIONS

const nav = document.getElementById('nav');
    
function scrollValue() {
    var scroll = window.scrollY;
    if (scroll < 110) {
        nav.classList.remove('edit');
    } else {
        nav.classList.add('edit');
    }
}

window.addEventListener('scroll', scrollValue);

// BURGER CLICK

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const path = document.getElementById('burgerPath');
    const overflow = document.getElementById('overflow');

    // Estado inicial
    let isMenuOpen = false;

    burger.addEventListener('click', function() {
        // Cambia el estado
        isMenuOpen = !isMenuOpen;

        // Alterna el atributo 'd' del path según el estado
        if (isMenuOpen) {
            path.setAttribute('d', 'M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z');
            overflow.classList.add("burgerToggle");
        } else {
            path.setAttribute('d', 'M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z');
            overflow.classList.remove("burgerToggle");
        }
    });
});

// BURGER CLICK




const overflow = document.getElementById('overflow');
    
function scrollValue2() {
    var scroll = window.scrollY;
    if (scroll < 110) {
        overflow.classList.remove('editoverflow');
    } else {
        overflow.classList.add('editoverflow');
    }
}

window.addEventListener('scroll', scrollValue2);

// 1 NAVIGATION BAR REDUCE ONSCROLL ANIMATION MEDIA (875px) ---

// NAVIGATION BAR REDUCE ONSCROLL ANIMATION ---

// OVERFLOW TOGGLE

