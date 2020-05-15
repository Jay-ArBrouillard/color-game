
var squares = document.querySelectorAll(".square");
var colorElem = document.getElementById("color");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var slider = document.getElementById("difficulty");
var colors = generateColorArray(slider.value);
var colorPicked = pickColor();
colorElem.textContent = colorPicked;

initalize()

function initalize() {
    setupSlider();
    setupResetButton();
    addListenersToSquares();
}

function setupSlider() {
    slider.addEventListener('change', function() {
        var node = document.getElementById('container');
        node.innerHTML = '';
        for (var i = 0; i < slider.value; i++) {
            addElement();
        }
        colors = generateColorArray(slider.value);
        colorPicked = pickColor();
        colorElem.textContent = colorPicked;
        addListenersToSquares();
    });
}

function setupResetButton() {
    resetBtn.addEventListener("click", function() {
        colors = generateColorArray(slider.value);
        colorPicked = pickColor();
        colorElem.textContent = colorPicked;
        for (var i = 0; i < colors.length; i++) {
            squares[i].style.backgroundColor = colors[i];
        }
        h1.style.backgroundColor = "#3492eb";
        resetBtn.textContent = "New Colors";
        message.textContent = "";
    });
}

function changeAllColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    const rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateColorArray(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(generateRandomColor())
    }

    return arr;
}

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb("+red+", "+green+", "+blue+")";
}

function addElement() {
    // Adds an element to the document
    var p = document.getElementById('container');
    var newElement = document.createElement('div');
    newElement.setAttribute('class', 'square');
    newElement.setAttribute('style', 'background-color: rbg(255, 0, 0);');
    p.appendChild(newElement);
}

function addListenersToSquares() {
    squares = document.querySelectorAll(".square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
            if (this.style.backgroundColor === colorPicked) {
                changeAllColors(colorPicked);
                h1.style.backgroundColor = colorPicked;
                message.textContent = "Correct";
                resetBtn.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try again";
            }
        });
    }
}