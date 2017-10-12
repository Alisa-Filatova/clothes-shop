var enterBtn = document.querySelector('.user-operations__btn_enter');
var registrationBtn = document.querySelector('.user-operations__btn_registration');
var card = document.querySelector('#card');
var cardItems = document.querySelector('.card-items');
var cardDeleteBtn = document.querySelectorAll('.card-item__btn-delete');
var catalogBtn = document.querySelector('#catalog-btn');
var catalog = document.querySelector('.catalog');
var registrationWindow = document.querySelector('.modal-window_registration');
var enterWindow = document.querySelector('.modal-window_enter');
var overlay = document.querySelector('.overlay');
var registrationActive = document.querySelector('#registration-active');
var registrationDisabled = document.querySelector('#registration-disabled');
var enterActive = document.querySelector('#enter-active');
var enterDisabled = document.querySelector('#enter-disabled');

catalogBtn.addEventListener('click', function(event) {
    event.preventDefault();
    catalog.classList.remove('hide');
    this.classList.add('main-nav__menu-item_link-active');
});

enterBtn.addEventListener('click', function(event) {
    event.preventDefault();
    enterWindow.classList.remove('hide');
    this.classList.add('user-operations__btn_enter-active');
    overlay.classList.remove('hide');
});

registrationBtn.addEventListener('click', function(event) {
    event.preventDefault();
    registrationWindow.classList.remove('hide');
    this.classList.add('user-operations__btn_enter-active');
    overlay.classList.remove('hide');
});

enterDisabled.addEventListener('click', function(event) {
    event.preventDefault();
    registrationWindow.classList.add('hide');
    enterWindow.classList.remove('hide');
    this.classList.add('user-operations__btn_enter-active');
    registrationDisabled.classList.add('user-operations__btn_enter-active');
    registrationBtn.classList.remove('user-operations__btn_enter-active');
    enterBtn.classList.add('user-operations__btn_enter-active');
});

registrationDisabled.addEventListener('click', function(event) {
    event.preventDefault();
    enterWindow.classList.add('hide');
    registrationWindow.classList.remove('hide');
    this.classList.add('user-operations__btn_enter-active');
    enterDisabled.classList.remove('user-operations__btn_enter-active');
    enterBtn.classList.remove('user-operations__btn_enter-active');
    registrationBtn.classList.add('user-operations__btn_enter-active');
});

card.addEventListener('click', function(event) {
    event.preventDefault();
    cardItems.classList.remove('hide');
    this.classList.add('card_active');
    overlay.classList.remove('hide');
});

overlay.addEventListener('click', function() {
    registrationWindow.classList.add('hide');
    cardItems.classList.add('hide');
    enterWindow.classList.add('hide');
    this.classList.add('hide');
});
