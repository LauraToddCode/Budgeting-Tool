const message = document.getElementById("message");
const button = document.getElementById("submit");



button.addEventListener("click", function() {
    let fundAmount = document.getElementById("fundAmount");
    let item1Amount = document.getElementById("item1Amount");
    let item2Amount = document.getElementById("item2Amount");
    let item3Amount = document.getElementById("item3Amount");
    
    let itemsTotal = item1Amount.value + item2Amount.value + item3Amount.value;
    
    if (fundAmount.value >= itemsTotal) {
        message.innerHTML = "Go ahead, treat yourself";
    } else {
        message.innerHTML = "Keep on saving";
    }
})

const toggle = document.getElementById("toggle-container");
const ball = document.getElementById("ball");
const costs = document.getElementById("costs");
const budget = document.getElementById("budget");
const inset = document.getElementById("inset");
const inputs = document.getElementsByTagName("input");


toggle.addEventListener("click", function () {
    
    
  if (ball.classList.contains("moveRight")) {
    ball.classList.add("moveLeft");
    ball.classList.remove("moveRight");
    setTimeout(() => {
        document.body.classList.remove("body-darkMode");
        costs.classList.remove("boxes-darkMode");
        budget.classList.remove("boxes-darkMode");
        inset.classList.remove("inset-darkMode");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.backgroundColor = "#FFFFFF";
            inputs[i].style.color = "#000000";
        }
    }, 350)
  } else {
    ball.classList.add("moveRight");
    ball.classList.remove("moveLeft");
    setTimeout(() => {
        document.body.classList.add("body-darkMode");
        costs.classList.add("boxes-darkMode");
        budget.classList.add("boxes-darkMode");
        inset.classList.add("inset-darkMode");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.backgroundColor = "#2B4257";
            inputs[i].style.color = "#FFFFFF";
        }
    }, 350)     
  }
});
