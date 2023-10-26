// navbar
// Toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
})
// alhir navbar

// img parallax

// parallax 
// let text = document.getElementById('text');
// let leaf = document.getElementById('leaf');
// let hill1 = document.getElementById('hill1');
// let hill4 = document.getElementById('hill4');
// let hill5 = document.getElementById('hill5');

// window.addEventListener('scroll', () => {
//     let value = window.scrollY;

//     text.style.marginBottom = value * 2.5 + 'px';
//     leaf.style.top = value * -1.5 + 'px';
//     leaf.style.left = value * 1.5 + 'px';
//     hill5.style.left = value * 1.5 + 'px';
//     hill4.style.left = value * -1.5 + 'px';
// })
// akhir parallax