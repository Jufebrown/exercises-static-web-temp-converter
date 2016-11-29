


function toCelsius () {

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	console.log("event", clickEvent);
	var inputNum = document.getElementById("tempNum").value;
	var tempType = document.getElementsByName("tempScale").value;
  	if(tempType === "fahrenheit") {
  		toFahrenheit(inputNum);
  	} else {
  		toCelsius(inputNum);
  	}
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter());

// clear input field with clear button
var clearButton = document.getElementById("clear");
function clearInput () {
	document.getElementById("tempNum").value = "";
}
clearButton.addEventListener("click", clearInput());