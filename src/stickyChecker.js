
export default function checkNav(){
 window.onscroll=function(){foo()}

    let navbar = document.querySelector(".navbar")
    let bodyArea = document.getElementById("body_area")
    let sticky = navbar.offsetTop

 function foo(){
   if(window.scrollY >= sticky) {
    navbar.classList.add("sticky")
   }else {
    navbar.classList.remove("sticky")
   }
 }
}