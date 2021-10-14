const code = document.getElementById('code')
const button = document.getElementById('button')
console.log(button)

const changeColor = event => {
    event.preventDefault()
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    code.innerText = randomColor
    document.body.style.backgroundColor = randomColor
    console.log("Hello vaidee")
}

button.addEventListener('click', changeColor) 