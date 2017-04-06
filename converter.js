`use strict`

//initializes variables
let convertedTemp = 0;
let fUnit = " &#8457;";
let cUnit = " &#8451;";
let unit = "";

var convertedTemp = 0;
var fUnit = " &#8457;";
var cUnit = " &#8451;";
var unit = "";
document.getElementById("fahrenheit").checked

function outputText () {
	document.getElementById("tempOutput").innerHTML = convertedTemp + unit;
	colorText();
}

function toCelsius (temp) {
	convertedTemp = ((temp - 32) * (5/9));
	unit = cUnit;
	outputText();
}

function toFahrenheit (temp) {
	convertedTemp = (temp * (9/5) + 32);
	unit = fUnit;
	outputText();
}

// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.

// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

function colorText () {
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
	if ((document.getElementById("fahrenheit").checked && convertedTemp > 32) || ((document.getElementById("fahrenheit").checked === false) && (convertedTemp > 90))) {
		document.getElementById("tempOutput").style.color = "red";
	} else if ((document.getElementById("fahrenheit").checked && convertedTemp < 0) || ((document.getElementById("fahrenheit").checked === false) && (convertedTemp < 32))) {
		document.getElementById("tempOutput").style.color = "blue";
	} else {
		document.getElementById("tempOutput").style.color = "green";
	}


}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	event.preventDefault();
	console.log("event", clickEvent);
	var inputNum = document.getElementById("tempNum").value;
	console.log(document.getElementById("fahrenheit").checked);
  	if(document.getElementById("fahrenheit").checked === true) {
  		toCelsius(inputNum);
  	} else {
  		toFahrenheit(inputNum);
  	}
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// clear input field with clear button
var clearButton = document.getElementById("clear");

function clearInput () {
	document.getElementById("tempNum").value = "";
}
clearButton.addEventListener("click", clearInput);
