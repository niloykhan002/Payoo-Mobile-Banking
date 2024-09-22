// ------>login js----
console.log('helll')
console.log('hiiiii')
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById('login-mobile-number').value;
    const pinNumber = getInputValueByID('login-pin-number');
    console.log(mobileNumber)
    if(mobileNumber === '01938240375' && pinNumber === 1234){
        window.location.href = './home.html'
    }
    else{
        alert('Invalid Number or Pin');
    }
})


