
// 1. get the agent number and validate
document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNumber = getValueFromInput("cashout-number");
    if (cashoutNumber.length != 11) {
        alert("invalid number");
        return;
    }
    console.log(cashoutNumber);

    // 2. get the amount , validate, convert to number
    const cashoutAmount = getValueFromInput("cashout-amount");

    console.log(cashoutAmount);

    // 3. get the current amount, validate, convert to number
    const currentBalance = getBalance()
    // 4. calculate new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log("newbalace are:", newBalance);
    if (newBalance < 0) {
        console.log("Invalid Amount");
        return;
    }
    const pin = getValueFromInput("cashout-pin");
    if (pin === "1234") {
        alert("cashoutSuccessful");
     setBalance(newBalance);
    
     // 1.catch history container
        const history = document.getElementById("history-container")
        // 2. create a new div
        const newHistory = document.createElement("div");
        // 3.add new div inner html
        newHistory.innerHTML = ` 
            <div class="transaction-card p-5 bg-base-200">
                cashout $(cashoutAmount)Taka Success
                to: ${cashoutNumber} 
               at${new Date}
                
            </div>
        `;
newHistory.innerHTML = `
 <div class = "transaction-card p-5 bg-base-200">
 cashout ${cashoutAmount} Taka success to ${cashoutNumber}, at ${new Date()}
 </div>
 
`;
  

        // 4. append new div in history container
        history.append(newHistory);
    }
    else {
        alert("invalid pin");
        return;
    }
    
    }
   
)
// document.getElementById("cashout-btn").addEventListener("click", function () {
//
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if (cashoutNumber.length != 11) {
//         alert("invalid agent number");
//         return;
//     }

//
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);


//
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if (newBalance < 0) {
//         alert("Invalid Amount ");
//         return;
//     }


//     // 5. get the pin and varify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     // 5.1 : true:: show an alert > set new balance
//     if (pin === "1234") {
//         alert("cashout successful")
//         console.log("new balace:", newBalance);
//         balanceElement.innerText = newBalance;

//     }

//     // 5.2 false:: show an error alert and return
//     else {
//         alert("Invalid Pin ");
//         return;
//     }
// })
