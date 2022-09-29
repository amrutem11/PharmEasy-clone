import navbar from "../components/navbar.js";

document.getElementById("main_nav").innerHTML=navbar()





let entNum = JSON.parse(localStorage.getItem('number'));
let abc = document.querySelector('.num');
abc.innerText = `+91 ${entNum}`;


let subBtn = document.getElementById('entOtp');
subBtn.addEventListener('click',function() {
    verifyOtp();
})


const verifyOtp = () => {

    let OTP = JSON.parse(localStorage.getItem('otp'));

    let enteredOtp = document.getElementById('otp').value;
    if(OTP == enteredOtp){
        alert('Login Successful');
        window.location.href='index.html';
        
       
    }
    else{
        let error = document.getElementById('msg');
        error.innerText = 'Invalid OTP';
        
    }
}

