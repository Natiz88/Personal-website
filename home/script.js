const nav = document.querySelector("nav")
//adding eventlistener to scroll event
window.addEventListener("scroll", ()=>{
    nav.classList.toggle("active",window.scrollY>0);

});
//pop up icon code
const icon = document.getElementById("icon");
const container = document.getElementById("container");
//toogle class when clicked
icon.addEventListener("click",()=>{
  container.classList.toggle("active");
});
//assigning variables
const form = document.querySelector("form");
const email = document.getElementById("Email");
const fullName = document.getElementById("fullName");
const message = document.getElementById("message");
const submit = document.querySelector("submit");

// Showing input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }

// Showing success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }
//adding event listener to form
form.addEventListener('submit',(e)=>{
    
//checking if the email field is empty
    if(email.value===''){
        showError(email, 'email is required!!')
        e.preventDefault();
    }else{
        showSuccess(email);
    }
 //checking if the name field is empty   
    if(fullName.value===''){
        showError(fullName, 'Your name is required!!')
        e.preventDefault();
    }else{
        showSuccess(fullName);
    }
});
