const inputContainer  = document.getElementById('input-container');
const countdownForm  = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');


let countdownTitle = '';
let countdownDate = '';

// Set date input min w/ tod ays date 
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute('min', today);

// Event Handlers

function updateCountdown(e){
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownDate, countdownTitle)

}

// Event Listeners
countdownForm.addEventListener('submit',updateCountdown);