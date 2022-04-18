const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

//Error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message; 
}
//Success input
function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Email validation
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }    
  };    

//check required
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${input.name} is required`);
        }else{
            showSuccess(input);
        }
    });
}

//check length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${input.name} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${input.name} must be at least or equal to ${max} characters`);
    }else{
        showSuccess(input);
    } 
}
//
function checkPasswordMatch(input1, input2){
    if (pass1.value !== pass2.value) {
        showError(input2, 'Passwords does not match');
    } 
}

//EventListener
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, pass1, pass2]);
    checkLength(username, 3, 15);
    checkLength(pass1, 6, 20);
    checkEmail(email);
    checkPasswordMatch(pass1, pass2);
});