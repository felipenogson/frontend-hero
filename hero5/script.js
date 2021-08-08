function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var banner = document.querySelector('.banner');
    var icon = menuToggle.firstElementChild;

    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-window-close');

    banner.classList.toggle('active');
}


let toggleBtn = document.querySelector('.toggle');
toggleBtn.addEventListener('click', toggleMenu);