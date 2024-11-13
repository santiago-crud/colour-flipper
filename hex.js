const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.getElementById('color');

function getRandomNumber(){
    let view = Math.floor(Math.random() * hex.length);
    console.log("view: ", view);
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', function() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
        console.log("hexColor: ", hexColor);
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})








