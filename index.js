function animator(id, text) {
    el = document.getElementById(id);
    let temptext = "";
    let time = 1
    for (let obj of text) {
        time += 1
        setTimeout(() => {

            temptext += obj
            el.textContent = temptext
        }, time * 100)
    }
}

function recursiveAnimateTitle(string) {
    let firstLetter = string[0];
    let title = document.querySelector('title');
    title.innerHTML += firstLetter;
    if (string.length > 1) {
        setTimeout(function () {
            recursiveAnimateTitle(string.substring(1));
        }, 100);
    }
}

function animateTitle(string) {
    document.querySelector('title').innerHTML = "";
    recursiveAnimateTitle(string);
}


function better_op(id) {
    let el = document.getElementById(id);
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            el.style.opacity = i / 100
        }, i * 10)
    }
}

window.addEventListener("load", () => {
    animateTitle("UwU")
    animator("welcome", "Welcome to My Page")
    setTimeout(better_op("projects", 2000))
})

