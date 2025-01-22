const button = document.getElementById("showMessageButton")
//gets the button 
const message=document.getElementById("message")
//gets the message div

function displayHiddenMessage() {
    message.style.display = "block" //changes message to be visible
    setTimeout(() => {
        message.style.display = "none" //then makes it invisible after 5 seconds.
    },5000)
}


button.addEventListener("click",displayHiddenMessage)

//when button is clicked, displayes hidden message after 5 seconds 


const timerButton = document.getElementById("timerButton")
const timer = document.getElementById("timer")
let isRunning= false
let intervalID //Stores it globally, so i can use it accross the functions

function runStopwatch() {
    
    let second=1 //sets initial second count
    intervalID=setInterval(() => {  //every second, update the content to second + 1
        timer.textContent=(second)
        second += 1
    }, 1000)
}

let interval;

timerButton.addEventListener("click", () => {
    if (isRunning == false) {
        runStopwatch()
        isRunning = true
        timerButton.textContent = "Stop Timer"
    } else {
        clearInterval(intervalId); // Stop the interval
        timerButton.textContent = "Start Timer"; // 
        isRunning = false; //
    }
    
})
