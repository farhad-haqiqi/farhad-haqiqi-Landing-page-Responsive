let menu = document.querySelector(".menu")
let lineone = document.querySelector ("#line-one")
let linetwo = document.querySelector ("#line-two")
let linethree = document.querySelector ("#line-three")
let hamburger_icon_and_heder_button = document.querySelector (".hamburger_icon_and_heder-button")
let hamburger_icon = document.querySelector(".hamburger_icon") ;
var backgroundColor = lineone.getAttribute("background-color");
let blur_background = document.querySelector(".blur-background");
hamburger_icon.addEventListener("click", MyFunction) ;
 
function MyFunction (){
    if(hamburger_icon.id === "Hicon"){
    menu.style.animationName = "menu";
    menu.style.animationPlayState = "running";
    lineone.style.animationName = "line-one";
    lineone.style.animationPlayState = "running"
    linetwo.style.animationName = "line-two"
    linetwo.style.animationPlayState = "running"
    linethree.style.animationName = "line-three"
    linethree.style.animationPlayState = "running"
    hamburger_icon_and_heder_button.style.animationName = "hamburger_icon"
    hamburger_icon_and_heder_button.style.animationPlayState = "running"
    hamburger_icon.setAttribute("id","Xicon")
    blur_background.style.display= "block"
    
    }
    else if (hamburger_icon.id === "Xicon") {
        menu.style.animationName = "menux";
        menu.style.animationPlayState="running";
        lineone.style.animationName = "line-onex";
        lineone.style.animationPlayState = "running"
        linetwo.style.animationName = "line-twox"
        linetwo.style.animationPlayState = "running"
        linethree.style.animationName = "line-threex"
        linethree.style.animationPlayState = "running"
        hamburger_icon_and_heder_button.style.animationName = "hamburger_iconx"
        hamburger_icon_and_heder_button.style.animationPlayState = "running"
        hamburger_icon.setAttribute("id","Hicon")
        blur_background.style.display= "none"
           
    }
    
     
       
}
 
 
