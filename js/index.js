import '../less/index.less';

var userBlockBtn = document.querySelectorAll('.user-operations__btn');

var card = document.querySelector('#card');
var cardItems = document.querySelector('.card-items');
var cardItemsCount = document.querySelector('.card__items-count');
var cardDeleteBtn = document.querySelectorAll('.card-item__btn-delete');
var cardItem = document.querySelectorAll('.card-item');

var catalogBtn = document.querySelector('#catalog-btn');
var catalog = document.querySelector('.catalog');

var registrationWindow = document.querySelector('.modal-window_registration');
var enterWindow = document.querySelector('.modal-window_enter');

var overlay = document.querySelector('.overlay');

var registrationActive = document.querySelector('#registration-active');
var registrationDisabled = document.querySelector('#registration-disabled');
var enterActive = document.querySelector('#enter-active');
var enterDisabled = document.querySelector('#enter-disabled');

var userIcon = document.querySelector('.user-block__icon_color');

var searchField = document.querySelector('#search');
var searchIcon = document.querySelector('.search__icon_color');

var menuOpen = document.querySelector('.menu-open');
var passwordField = document.querySelectorAll('.form__input-text_password');

var languageRus = document.querySelectorAll('.language-nav__item_rus');
var languageEn = document.querySelectorAll('.language-nav__item_en');

menuOpen.addEventListener('click', function(event) {
    event.preventDefault();

    var menuOpenBar = document.querySelectorAll('.menu-open__open-bar');
    var mainNav = document.querySelector('.main-nav');

    mainNav.classList.toggle('main-nav_open');
    
    Array.prototype.forEach.call(menuOpenBar, function(item) {
        item.classList.toggle('menu-open__open-bar_active');
    });
});

catalogBtn.addEventListener('click', function(event) {
    event.preventDefault();

    catalog.classList.toggle('hide');
    this.classList.toggle('main-nav__menu-item_link-active');
});

catalogBtn.addEventListener('mouseenter', function() {
    catalog.classList.remove('hide');
    this.classList.add('main-nav__menu-item_link-active');
});

catalog.addEventListener('mouseenter', function() {
    catalog.classList.remove('hide');
    catalogBtn.classList.add('main-nav__menu-item_link-active');
});

catalog.addEventListener('mouseleave', function() {
    this.classList.add('hide');
    catalogBtn.classList.remove('main-nav__menu-item_link-active');
});

userBlockBtn[0].addEventListener('click', function(event) {
    event.preventDefault();

    enterWindow.classList.remove('hide');
    this.classList.add('user-operations__btn-active');
    
    var overlay = document.querySelector('.overlay');
    
    overlay.classList.remove('hide');
    userIcon.style.fill = '#928560';
});

userBlockBtn[1].addEventListener('click', function(event) {
    event.preventDefault();

    enterWindow.classList.remove('hide');
    this.classList.add('user-operations__btn-active');

    userIcon.style.fill = '#928560';
    overlay.classList.remove('hide');
});

enterDisabled.addEventListener('click', function(event) {
    event.preventDefault();

    registrationWindow.classList.add('hide');
    enterWindow.classList.remove('hide');
    this.classList.add('user-operations__btn-active');
    registrationDisabled.classList.add('user-operations__btn-active');
});

registrationDisabled.addEventListener('click', function(event) {
    event.preventDefault();

    enterWindow.classList.add('hide');
    registrationWindow.classList.remove('hide');
    this.classList.add('user-operations__btn_active');
    enterDisabled.classList.remove('user-operations__btn-active');
});

card.addEventListener('click', function(event) {
    event.preventDefault();
    cardItems.classList.toggle('hide');
    this.classList.toggle('card_active');
});

card.addEventListener('mouseenter', function() {
    cardItems.classList.remove('hide');
    this.classList.add('card_active');
});

cardItems.addEventListener('mouseenter', function() {
    card.classList.add('card_active');
    this.classList.remove('hide');
});

cardItems.addEventListener('mouseleave', function() {
    card.classList.remove('card_active');
    this.classList.add('hide');
});

overlay.addEventListener('click', function() {
    var registrationWindow = document.querySelector('.modal-window_registration');
    var enterWindow = document.querySelector('.modal-window_enter');
    var userIcon = document.querySelector('.user-block__icon_color');

    registrationWindow.classList.add('hide');
    enterWindow.classList.add('hide');

    userIcon.style.fill = '#bebebe';
    this.classList.add('hide');
});

searchField.addEventListener('focus', function() {
    searchIcon.style.fill = '#000000';
});

searchField.addEventListener('blur', function() {
    searchIcon.style.fill = '#c2bdb4';
});

passwordField[1].addEventListener('focus', function() {
    this.value = '';
});

passwordField[0].addEventListener('focus', function() {
    this.value = '';
});

languageRus[0].addEventListener('click', function() {
    this.classList.add('hide');
    languageEn[0].classList.remove('hide');
});

languageEn[0].addEventListener('click', function() {

    this.classList.add('hide');
    languageRus[0].classList.remove('hide');
});

languageRus[1].addEventListener('click', function() {

    this.classList.add('hide');
    languageEn[1].classList.remove('hide');
});

languageEn[1].addEventListener('click', function() {

    this.classList.add('hide');
    languageRus[1].classList.remove('hide');
});