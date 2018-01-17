var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard")

//Easy and Hard game choice option buttons
easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	//Choose three new colors for easy mode, as easy mode only has three squares
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		//Set bottom three squares display to none
		} else {
			squares[i].style.display = "none";
		}
	}
}) 

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	//Choose six new colors for hard mode, as hard mode has six squares
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function() {
	//Generate new colors
	colors = generateRandomColors(numSquares);
	//Pick a new random color from array
	pickedColor = pickColor();
	//Change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//Change colors of squares
	for(i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.background = "orange";
})

for(i = 0; i < squares.length; i++) {
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//Add click listeners to squares
	squares[i].addEventListener("click", function() {
		//Get color of clicked square
		var clickedColor = this.style.backgroundColor;
		//Compare clicked color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color) {
	//Loop through all squares
	for(i = 0; i < squares.length; i++) {
		//Change colors to match a given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//Create an array
	var arr = [];
	//Add num random colors to array
	for(i = 0; i < num; i++) {
		//Get random color and push into array
		arr.push(randomColor());
	}
	//Return the array
	return arr;
}

function randomColor() {
	//Pick a red, green and blue from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	//Return string of random rgb color
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Updates the H1 span to display chosen color properties
colorDisplay.textContent = pickedColor;


