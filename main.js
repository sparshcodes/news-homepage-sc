const hamburger = document.querySelector('.hamburger');
const navListContainer = document.querySelector('.nav-list-container');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click',function(){
    navListContainer.classList.toggle('show');
    hamburger.classList.toggle('open');
    overlay.classList.toggle('hamburger-show');
})