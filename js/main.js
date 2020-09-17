/*
function calcAmount () {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value); 
    
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber; 
    
    if ( amountNumber > 10 ) {
        alert("Maximum 10 db hamburgert vásárolhat.");
    } else if ( amountNumber < 1 ) {
        alert("Minimum 1 db hamburgert kell vásárolnia.");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}    
*/

function calcAmount () {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value); 
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber; 
    
    showSumPrice(price, amountNumber); 
}

function showSumPrice(price = 1000, amountNumber = 1) {
    // amountNumber = amountNumber || 0; 
    let showAmount = document.querySelector("span.show-amount");
    if ( amountNumber > 10 ) {
        alert("Maximum 10 db hamburgert vásárolhat.");
    } else if ( amountNumber < 1 ) {
        alert("Minimum 1 db hamburgert kell vásárolnia.");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}   

/*
// Add helptext
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";
// console.log( helpText );
let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

// Remove helptext
parent.removeChild(helpText);
*/


/*
// Window events
let sendButton = document.querySelector("form .btn.btn-primary");

sendButton.onclick = function() {
    alert("Hello JS!");
}

sendButton.addEventListener("click", function() {
    alert("Hello JS II. !");
});

window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
});
*/


//Űrlap események
let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();
    // console.log( this );
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i=0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }

    console.log( values );
});


// Parent element kezelése
let alertCloseButtons = document.querySelectorAll(".close");
let alertCloseEventHandlerFunction = function(ev) {
    // console.log( ev );
    this.parentElement.style.display = "none";
};
for (let i=0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction);
}

// Select elem kitöltése
let toppings = [
    "Chili",
    "Hagyma",
    "Olivabogyó",
    "Zöldfűszer"
]
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}