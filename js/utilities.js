function getInputValueByID(id){
    const inputField = document.getElementById(id).value;
    const inputNumber = parseFloat(inputField);
    return inputNumber;
}
function getTextValueByID(id){
    const balance = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balance);
    return balanceNumber;
}
function getClickedValueByID(id){
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('transfer-money-section').classList.add('hidden');
    document.getElementById('get-bonus-section').classList.add('hidden');
    document.getElementById('pay-bill-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
