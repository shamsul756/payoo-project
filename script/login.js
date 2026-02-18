// document.getElementById('login-btn').addEventListener('click', function () {



    
    
//     // no 1 - get the mobile Number
//     const inputNumber = document.getElementById("input-number");
//     const contracNumber = inputNumber.value;
//     console.log(contracNumber);
//     // no 2 - get the pin 
//     const inputPin = document.getElementById("input-pin");
//     const pin = inputPin.value;
//     console.log(pin);
//     // no -3 match mobile and pin 
//     if(contracNumber == "01307510449" && pin == "1234"){
//         // true:: alert >> home 
//         alert('login success ')
//         window.location.replace("./script/home.html")
//     }
//     else{
//         // false ::: return
//         alert('login failed');
//         return;
//     }
// })
document.getElementById("login-btn").addEventListener("click", function(){


const inputName = document.getElementById("input-number");
const contracNumber = inputName.value;
console.log(contracNumber);
const inputPin = document.getElementById("input-pin");
const pin = inputPin.value;
console.log(pin);
if(contracNumber == "01307510449" && pin == "1234"){
    alert("login successful");
    // window.location.replace(" ./script/home.html");
    window.location.assign("./script/home.html")
}
else{
    alert("request failed try agin letter");
    return ;
}
});