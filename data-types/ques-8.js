// WAP to input the temperature in fahrenheit and convert this temperature in celsius.

function fahrenheitToCelsiusConverter(fahrenheit){
    let celsius = (fahrenheit - 32)*(5/9);
    return celsius;
}

let inputFahrenheit = prompt("Enter the temperature in Fahrenheit : ");
let ans = fahrenheitToCelsiusConverter(inputFahrenheit);
alert(`${inputFahrenheit}° Fahrenheit is equal to ${ans}° Celsius`)