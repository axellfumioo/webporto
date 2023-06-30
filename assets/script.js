// Burger menus
document.addEventListener('DOMContentLoaded', function () {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var subjectInput = document.getElementById('subjectInput');
var messageInput = document.getElementById('messageInput');

nameInput.addEventListener('input', checkFormValues);
emailInput.addEventListener('input', checkFormValues);
subjectInput.addEventListener('input', checkFormValues);
messageInput.addEventListener('input', checkFormValues);

function checkFormValues() {
    var name = nameInput.value.toLowerCase();
    var email = emailInput.value.toLowerCase();
    var subject = subjectInput.value.toLowerCase();
    var message = messageInput.value.toLowerCase();

    if (name === 'yihan' && email === 'yihan' && subject === 'yihan' && message === 'yihan') {
        alert('[EASTER EGG] YAY KETEMU EASTER EGG NYA, SELAMAT YAH <3');
    }
}