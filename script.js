const submitButton=document.querySelector(".account");
const form = document.getElementById("myForm");
const password1=document.getElementById("password1");
const password2=document.getElementById("password2");
const error=document.querySelector('.errorLog');
submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    if(validateForm()) {
        form.submit();
    }else{
        console.log("Form validation failed!");
    }
    
});

function validateForm(){
    if(password1.value===password2.value){
        return true;
    }else{
        error.textContent="Passwords do not match!"
    return false;
}};