// ---->all buttons----
document.getElementById('btn-add-money').addEventListener('click', function(){
    getClickedValueByID('add-money-section');
})
document.getElementById('btn-cash-out').addEventListener('click', function(){
    getClickedValueByID('cash-out-section');
})
document.getElementById('btn-transfer-money').addEventListener('click', function(){
    getClickedValueByID('transfer-money-section');
})
document.getElementById('btn-get-bonus').addEventListener('click', function(){
    getClickedValueByID('get-bonus-section');
})
document.getElementById('btn-pay-bill').addEventListener('click', function(){
    getClickedValueByID('pay-bill-section');
})
document.getElementById('btn-transaction').addEventListener('click', function(){
    getClickedValueByID('transaction-section');
})

// ---> log out btn---

document.getElementById('log-out-btn').addEventListener('click', function(){
    window.location.href = './login.html'
})

// -->Add Money section-----
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const balance = getTextValueByID('balance');
    const accountNumber = document.getElementById('add-money-ac-number').value;
    const amount = getInputValueByID('add-money-amount');
    const pinNumber = getInputValueByID('add-money-pin-number');

    if(pinNumber === 1234){
        const totalBalance = balance + amount;
        document.getElementById('balance').innerText = totalBalance;
        const p = document.createElement('p');
        p.innerText = `Add Money: ${amount} New Balance: ${totalBalance}`;
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Invalid Input')
    }
})

// --> cash out section--
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const balance = getTextValueByID('balance');
    const agentNumber = getInputValueByID('cash-out-agent-number');
    const amount = getInputValueByID('cash-out-amount');
    const pinNumber = getInputValueByID('cash-out-pin-number');

    if(amount > balance){
        alert('Invalid');
        return;
    }
    if(pinNumber === 1234){
       const totalAmount = balance - amount;
       document.getElementById('balance').innerText = totalAmount;
       const p = document.createElement('p');
       p.innerText = `Cash Out: ${amount} New Balance: ${totalAmount}`
       document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Invalid Input');
    }
})

// --> Transfer money section---
document.getElementById('transfer-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const balance = getTextValueByID('balance');
    const amount = getInputValueByID('transfer-money-amount');
    const pinNumber = getInputValueByID('transfer-money-pin');

    if(pinNumber === 1234){
        const totalBalance = balance - amount;
        document.getElementById('balance').innerText = totalBalance;
    }
    else{
        alert('Invalid Input');
    }
})

// ---> Pay bill section--
document.getElementById('pay-bill-btn').addEventListener('click', function(event){
    event.preventDefault();
    const balance = getTextValueByID('balance');
    const amount = getInputValueByID('pay-bill-amount');
    const pinNumber = getInputValueByID('pay-bill-pin');

    if(pinNumber === 1234){
        const totalBalance = balance - amount;
        document.getElementById('balance').innerText = totalBalance;
    }
    else{
        alert('Invalid Input');
    }
})