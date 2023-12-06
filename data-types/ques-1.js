// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

function convertKilometersToMetersAndCentimeters(kilometer){
    let meters = kilometer * 100;
    let centimeters = meters * 1000;

    return {
        meters : meters,
        centimeters : centimeters
    };
}

let inputKilometers = 7.5;
let ans = convertKilometersToMetersAndCentimeters(inputKilometers);
console.log(inputKilometers + ' Kilometers equals to ' + ans.meters + ' Meters and ' + ans.centimeters + ' Centimeters ');