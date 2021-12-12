let message = document.querySelector('.subscription-message');
let email = document.querySelector('.subscribe__input');
let subscribe = document.querySelector ('.subscribe');

subscribe.onsubmit = function(evt) {
    evt.preventDefault();
    message.textContent = 'The e-mail' + email.value + 'has been added.';
};