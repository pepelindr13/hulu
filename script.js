const hamburger =  document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click" , () => {
  navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n. 
 addEventListener("click", () => {
   navMenu.classList.remove("active")
   
 }))



function breaking() {
  document.getElementById("box").style.display = "none"
  document.getElementById("boxx").style.display = "block"
  document.getElementById("boxxx").style.display = "none"
}

function live() {
  document.getElementById("box").style.display = "block"
  document.getElementById("boxx").style.display = "none"
  document.getElementById("boxxx").style.display = "none"
}

function big() {
  document.getElementById("box").style.display = "none"
  document.getElementById("boxx").style.display = "none"
  document.getElementById("boxxx").style.display = "block"
}