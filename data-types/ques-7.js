// WAP to input the distance between two cities (in km) , convert and print this distance in 
// meter, feet, inches, and centimeter.

function distanceConverter(kilometers) {
    let meter = kilometers * 1000;
    let centimeter = kilometers * 100000;
    let feet = kilometers * 3280.84;
    let inches = kilometers * 39370.1;

    return{
        meter : meter,
        centimeter : centimeter,
        feet : feet,
        inches : inches
    }
}

let inputKilometers = prompt("Enter the distance in Kilometers : ");
let ans = distanceConverter(inputKilometers);
alert(`${inputKilometers} Kilometer is equal to =>\n\n${ans.meter} Meter\n${ans.centimeter} Centimeter\n${ans.feet} Feet\n${ans.inches} Inches`)