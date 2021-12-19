var pass = document.getElementById("pass");
var message = document.getElementById("msg");
var str = document.getElementById("strenght");


pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        message.style.display = "block";
    }
    else{
        message.style.display = "none";
    }
    if(pass.value.length < 4){
        str.innerHTML = "Weak";
        pass.style.borderColor = "#ff5925";
        message.style.color = "#ff5925"
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = "Medium"
        pass.style.borderColor = "yellow";
        message.style.color = "yellow"
    }
    else if(pass.value.length >= 8){
        str.innerHTML = "Strong"
        pass.style.borderColor = "#26d730";
        message.style.color = "#26d730"
    }
} )