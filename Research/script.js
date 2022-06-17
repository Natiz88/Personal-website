//assigning variables
const nav = document.querySelector("nav")

//adding event listener 
window.addEventListener("scroll", ()=>{
    //toogling class when scrolY is greater than 0
    nav.classList.toggle("active",window.scrollY>0);

});