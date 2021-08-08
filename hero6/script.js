function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    var icon = menuToggle.firstElementChild;

    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-window-close');

    navigation.classList.toggle('active');

}

function toggleVideo(){
    console.log('video');
    const trailer = document.querySelector('.trailer');
    trailer.classList.toggle('active');
    const video = document.querySelector('video');
    video.currentTime = 0;
    video.pause();
}

function closeVideo(){
    const trailer = document.querySelector('.trailer');
    trailer.classList.toggle('active');
}
