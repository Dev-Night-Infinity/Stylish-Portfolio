//Selectors
var a = document.querySelectorAll("a");
var nav = document.querySelector("nav");
var scrool_top=document.querySelector(".scrool-top");
//All a tags prevent default
a.forEach(element => {
    element.addEventListener("click", function (event) {
        event.preventDefault();
    })
});
//Menu click
document.querySelector(".menu i").addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-bars")) {
        e.target.className = "fas fa-times";
        nav.style.display = "block";
    } else {
        e.target.className = "fas fa-bars";
        nav.style.display = "none";
    }
})
//Scrool_top click
document.querySelector(".scrool-top").addEventListener("click", function (event) {
    $("html,body").animate({scrollTop:0},"slow");
});
//Scrool 500px down element show etc..
window.addEventListener("scroll",function(){
    if(window.pageYOffset>500){
        scrool_top.style.visibility="visible";
    }
    else if(window.pageYOffset<500){
        scrool_top.style.visibility="hidden";
    }
})