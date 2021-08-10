'use strict';
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const contactBtn = document.querySelector('.profile__button');
const contact = document.querySelector('#contact');
const navMenu = document.querySelector('.navbar__menu');

//scroll 하면 navbar 색 변화 이벤트
window.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});
