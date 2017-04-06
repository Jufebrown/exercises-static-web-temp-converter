`use strict`

//initializes variables
let convertedTemp = 0;
let fUnit = " &#8457;";
let cUnit = " &#8451;";
let unit = "";

document.querySelector("#fahrenheit").checked

//function that sets output text
const outputText = () => {
	document.querySelector("#tempOutput").innerHTML = convertedTemp + unit;
	colorText();
}

//converts to C
const toCelsius = (temp) => {
	convertedTemp = ((temp - 32) * (5/9));
	unit = cUnit;
	outputText();
}

// converts to F
const toFahrenheit = (temp) => {
	convertedTemp = (temp * (9/5) + 32);
	unit = fUnit;
	outputText();
}

const colorText = () => {
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
	if ((document.querySelector("#fahrenheit").checked && convertedTemp > 32) || ((document.querySelector("#fahrenheit").checked === false) && (convertedTemp > 90))) {
		document.querySelector("#tempOutput").style.color = "red";
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
	} else if ((document.querySelector("#fahrenheit").checked && convertedTemp < 0) || ((document.querySelector("#fahrenheit").checked === false) && (convertedTemp < 32))) {
		document.querySelector("#tempOutput").style.color = "blue";
// For any other temperature, the color should be green.
	} else {
		document.querySelector("#tempOutput").style.color = "green";
	}
}

// Get a reference to the button element in the DOM
const button = document.querySelector("#converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (clickEvent) => {
	event.preventDefault();
	// console.log("event", clickEvent);
	let inputNum = document.querySelector("#tempNum").value;
	console.log(document.querySelector("#fahrenheit").checked);
	if(document.querySelector("#fahrenheit").checked === true) {
		toCelsius(inputNum);
	} else {
		toFahrenheit(inputNum);
	}
}

// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// clear input field with clear button
const clearButton = document.querySelector("#clear");

// clears input field
const clearInput = () => {
	document.querySelector("#tempNum").value = "";
}

// adds event listener to button
clearButton.addEventListener("click", clearInput);
