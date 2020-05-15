var colors = generateColorArray(6);
var squares = document.querySelectorAll(".square");
var colorElem = document.getElementById("color");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var colorPicked = pickColor();
colorElem.textContent = colorPicked;

resetBtn.addEventListener("click", function() {
    colors = generateColorArray(6);
    colorPicked = pickColor();
    colorElem.textContent = colorPicked;
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#3492eb";
});


for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor === colorPicked) {
            changeAllColors(colorPicked);
            h1.style.backgroundColor = colorPicked;
            message.textContent = "Correct";
        }
        else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again";
        }
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