'use strict';
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const contactBtn = document.querySelector('.profile__button');
const contact = document.querySelector('#contact');
const navMenu = document.querySelector('.navbar__menu');
const arrow = document.querySelector('.arrow');

//scroll 하면 navbar 색 변화 이벤트
window.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//contact btn event
contactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

//navmenu btn event
navMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
  navMenu.classList.remove('open');
});

//content fade out when scroll down
const home = document.querySelector('.profile__container');
const homeHeight = home.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//go to the top when tapping the arrow btn
window.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.classList.add('visible');
  } else {
    arrow.classList.remove('visible');
  }
});
arrow.addEventListener('click', () => {
  scrollIntoView('#profile');
});

//projects btn handle
const workBtn = document.querySelector('.work-categories');
const projectContainer = document.querySelector('.projects');
const project = document.querySelectorAll('.project');
workBtn.addEventListener('click', (e) => {
  const key = e.target.dataset.key || e.target.parentNode.dataset.key;
  if (key == null) {
    return;
  }
  //btn click event
  const selector = document.querySelector('.category__button.selected');
  selector.classList.remove('selected');
  const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');
  projectContainer.classList.add('anime-out');

  setTimeout(() => {
    project.forEach((project) => {
      const value = project.dataset.value;
      if (key === '*' || key == value) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anime-out');
  }, 300);
});

//nav menu open
const navToggleBtn = document.querySelector('.navbar__toggle');

navToggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
//button function
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
