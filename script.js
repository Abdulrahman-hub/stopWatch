if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

var isRuning = false
// a virable to store the setInterval function id
var idVar   
// a variable to keep track of the current timer value when the watch stop
var currentTimer = 0    
var startTime

function ready() {
    var button = document.getElementsByClassName('start-btn')[0]
    button.addEventListener("click", buttonClicked)
}

function buttonClicked(event) {
    var button = event.target
    if (isRuning) {
        stop(button, idVar)
    } else {
        // storing the setInterval id
        idVar = start(button, startTime)
    }
}

// the function that will go inside the setInterval
function ticking() {
    // a varible to calculate every passing second
    var timeProgress = Date.now() - startTime
    // adding the second to the current timer
    currentTimer = currentTimer + timeProgress
    var seconds = document.getElementsByClassName('seconds')[0]
    seconds.innerText = Math.floor(currentTimer / 1000)
    // getting the current time before another second pass
    startTime = Date.now()
}

// the function that will start the watch it will take two arguments the button element and the setInterval id
function stop(button, id) {
    button.innerText = "START"
    isRuning = false
    button.classList.remove('stop-btn')
    clearInterval(id)
}

// the function that will stop the watch 
// it take two argument :
// the button element & the start time
// will return the setInterval id
function start(button, time) {
    button.innerText = "STOP"
    isRuning = true
    startTime = Date.now()
    button.classList.add('stop-btn')
    return setInterval(ticking, 1000)
}