if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    button = document.getElementsByClassName('start-stop-btn')[0]
    button.addEventListener("click", console.log("the button is working")
    )
}