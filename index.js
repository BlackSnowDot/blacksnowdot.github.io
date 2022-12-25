
is_playing = false
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


window.addEventListener("DOMContentLoaded", () => {
    animateTitle("UwU")
    animator("welcome", "Welcome to My Page")
})

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playAudio() {
    let el1 = document.getElementById("sfw")
    el1.src = choose(["s1.mp3", "s2.mp3", "s3.mp3"])
    el1.play()
}