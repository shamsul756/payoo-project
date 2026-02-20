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
    };
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

        // 1.catch history container
        const history = document.getElementById("history-container")
        // 2. create a new div
        const newHistory = document.createElement("div");
        // 3.add new div inner html
        newHistory.innerHTML = ` 
            <div class="transaction-card p-5 bg-base-200">
                <h4 class="font-bold">Add Money Success</h4>
                <p>From: ${bankAccount} (${accountNumber})</p>
                <p class="text-sm text-gray-500">${new Date().toLocaleString()}</p>
                <p class="text-green-600 font-bold">+$${amount}</p>
            </div>
        `;



        // 4. append new div in history container
        history.append(newHistory);
    }
    else {
        alert("invalid pin");
        return;
    }
})












