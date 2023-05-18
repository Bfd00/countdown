const daysEl = document.querySelector ("#days");
const hoursEl = document.querySelector ("#hours");
const minutesEl = document.querySelector ("#minutes");
const secondsEl = document.querySelector ("#seconds");

const premierDate = new Date("20/mai/2023");

function countdown (){
    const actualDate = new Date();  
    const calcbase = Math.floor ((premierDate - actualDate) / 1000);
    const day =  Math.floor (calcbase / 3600 / 24);
    const hour =  Math.floor (calcbase / 3600) % 24;
    const minute =  Math.floor (calcbase / 60) % 60;
    const second =  Math.floor (calcbase % 60);

    console.log(day, hour, minute, second);
}
