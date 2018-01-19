var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
//Initial function
function init() {
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpSquares() {
	for(i = 0; i < squares.length; i++) {
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
}

function setUpModeButtons() {
	//Easy and Hard game choice option buttons
	for(i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	})
  }
}


function reset() {
	//Generate new colors
	colors = generateRandomColors(numSquares);
	//Pick a new random color from array
	pickedColor = pickColor();
	//Change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//Change colors of squares
	for(i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "orange";
}

resetButton.addEventListener("click", function() {
	reset();
})

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


