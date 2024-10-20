document.getElementById('footerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value.trim();

    if (email === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return; 
    }

    let info = 'Correo Electrónico: ' + email;
    let mailtoLink = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pablonietoperez369@gmail.com' + '&body=' + encodeURIComponent(info);
    window.open(mailtoLink, '_blank');
});

document.addEventListener("DOMContentLoaded", function() {
    const mailLove1 = document.getElementById('mailLove1');
    const mailLove2 = document.getElementById('mailLove2');
    const submitFooter = document.getElementById('submitFooter');

    const scaleNormal = 'scale(1)';
    const scaleHover = 'scale(1.1)';

    mailLove1.style.transition = 'transform 0.3s ease';
    mailLove2.style.transition = 'transform 0.3s ease';

    function scaleUp() {
        mailLove1.style.transform = scaleHover;
        mailLove2.style.transform = scaleHover;
    }

    function scaleDown() {
        mailLove1.style.transform = scaleNormal;
        mailLove2.style.transform = scaleNormal;
    }

    submitFooter.addEventListener('mouseenter', scaleUp);
    submitFooter.addEventListener('mouseleave', scaleDown);
});

var fecha = new Date();
var fechaAño = fecha.getFullYear();
const date = document.getElementById('date').textContent = fechaAño;