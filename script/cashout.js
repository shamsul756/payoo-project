document.getElementById("cashout-btn").addEventListener("click", function () {
    // 1. get the agent number and validate
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert("invalid agent number");
        return;
    }
  
    // 2. get the amount , validate, convert to number
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
    
    // 3. get the current amount, validate, convert to number
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);


    // 4. calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount);

    if (newBalance < 0) {
        alert("Invalid Amount ");
        return;
    }


    // 5. get the pin and varify 
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    // 5.1 : true:: show an alert > set new balance
    if (pin === "1234") {
        alert("cashout successful")
        console.log("new balace:", newBalance);
        balanceElement.innerText = newBalance;
        
    }

    // 5.2 false:: show an error alert and return 
    else {
        alert("Invalid Pin ");
        return;
    }
})