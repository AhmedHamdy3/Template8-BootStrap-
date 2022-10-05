let nav=document.querySelector(".navbar");
let links=document.querySelectorAll(".navbar .navbar-nav  a");
let lis=document.querySelectorAll(".navbar ul li ");
let services=document.querySelector("#services"),
    portfolio=document.querySelector("#portfolio"),
    about=document.querySelector("#about"),
    team=document.querySelector("#team"),
    contact=document.querySelector("#contact");

window.onload=()=>{
    if(window.scrollY == 0){
        nav.classList.remove("bg-dark")
    }

}

document.addEventListener('scroll',()=>{
    if(window.scrollY == 0){
        nav.classList.remove("bg-dark")
    }
    else{
        nav.classList.add("bg-dark");
    }
})

document.addEventListener('scroll',activateLinks);

function activateLinks(){
    if(window.scrollY >= services.offsetTop ){
        links.forEach(link=>{
            link.classList.remove("acti");
        })
        links[0].classList.add("acti");
    }

    if(window.scrollY >=( portfolio.offsetTop -20)){
        links.forEach(link=>{
            link.classList.remove("acti");
        })
        links[1].classList.add("acti");
    }
    if(window.scrollY >= about.offsetTop-20){
        links.forEach(link=>{
            link.classList.remove("acti");
        })
        links[2].classList.add("acti");
    }
    if(window.scrollY >= team.offsetTop-20){
        links.forEach(link=>{
            link.classList.remove("acti");
        })
        links[3].classList.add("acti");
    }
    if(window.scrollY >= contact.offsetTop-20){
        links.forEach(link=>{
            link.classList.remove("acti");
        })
        links[4].classList.add("acti");
    }

}