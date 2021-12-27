var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("header");
    }
    else{
        navbar.classList.remove("header");
    }
}