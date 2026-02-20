
document.getElementById("add-money-btn").addEventListener("click", function () {
    // 1.bank account get 
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount === "Select a Bank") {
        alert("please select a bank");
        return;
    }
    console.log(bankAccount);
    // 2. get bank account Number
    const accountNumber = getValueFromInput("add-money-number");
    if (accountNumber.length != 11) {
        alert("invalid account number")
    }
    // 3.get amount 
    const amount = getValueFromInput("add-money-amount");
    const newBalance = getBalance() + Number(amount);
    console.log(newBalance);

 

    //  pin varify
    const pin = getValueFromInput("add-money-pin");
    if (pin === "1234") {
        alert(`add money successful
             from ${bankAccount} 
             at ${new Date}`);
        setBalance(newBalance);
    }
    else {
        alert("invalid pin ");
        return;
    }
})










