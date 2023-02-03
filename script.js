const container = document.querySelector('.container');

const keys = document.querySelectorAll('.key')

const keyCode = {
    A: 65,
    S: 83,
    D: 68,
    F: 70,
    G: 71,
    H: 72,
    J: 74,
    K: 75,
    L: 76,
};

function playSound(e) {
    const audio = document.querySelector(
        `audio[${keyCode[e.target.innerHTML]}]`
        )
}