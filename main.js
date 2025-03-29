let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;
function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// document.getElementById("shopNowBtn").addEventListener("click", function() {
//     window.open("shop.html", "_blank"); // Opens shop.html in a new tab/window
// });

var shopButtons = document.getElementsByClassName("btn");

// Add click event listener to each button
for (var i = 0; i < shopButtons.length; i++) {
    shopButtons[i].addEventListener("click", function() {
        window.open("shop.html", "_blank"); // Opens shop.html in a new tab/window
    });
}


