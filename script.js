const keys = document.querySelectorAll('kbd');
const audio = document.querySelectorAll('audio')

keys.forEach((key) => {
    key.addEventListener('keypress', (e) => {
        // e.preventDefault()
        console.log(e.target);
    })
})