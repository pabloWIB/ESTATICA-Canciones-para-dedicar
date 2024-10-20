// LOAD ANIMATIONS

$(function(){
    setTimeout(function(){
        $("#nav").addClass("navigationIDAnimation");
    }, 350);
});

// LOAD ANIMATIONS

// BURGER CLICK

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const path = document.getElementById('burgerPath');
    const overflow = document.getElementById('overflow');
    const body = document.getElementById('body');

    // Estado inicial
    let isMenuOpen = false;

    burger.addEventListener('click', function() {
        // Cambia el estado
        isMenuOpen = !isMenuOpen;

        // Alterna el atributo 'd' del path según el estado
        if (isMenuOpen) {
            path.setAttribute('d', 'M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z');
            overflow.classList.add('overflowAction');
            body.classList.add('bodyOnOverlay');
        } else {
            path.setAttribute('d', 'M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z');
            overflow.classList.remove('overflowAction');
            body.classList.remove('bodyOnOverlay');
        }
    });
});

// BURGER CLICK

const nav = document.getElementById('nav');
    
function scrollValue() {
    var scroll = window.scrollY;
    if (scroll < 20) {
        nav.classList.remove('edit');
    } else {
        nav.classList.add('edit');
    }
}

window.addEventListener('scroll', scrollValue);

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