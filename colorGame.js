var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
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

//Updates the H1 span to display chosen color properties
colorDisplay.textContent = pickedColor;
