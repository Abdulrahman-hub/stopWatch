if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var button = document.getElementsByClassName('start-stop-btn')[0]
    button.addEventListener("click", buttonClicked)
}

var isRuning = false

function buttonClicked(event) {
    var button = event.target
    if (isRuning) {
        button.innerText = "START"
        isRuning = false
    } else {
        button.innerText = "STOP"
        isRuning = true
    }


}