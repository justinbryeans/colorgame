var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

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
			changeColors(clickedColor);
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
	return "rgb(" + r + "," + g + "," + b + ")";
}

//Updates the H1 span to display chosen color properties
colorDisplay.textContent = pickedColor;
