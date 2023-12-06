// WAP to input radius of a circle and log the area of circle.

function areaOfCircle(radius){
    let area = Math.PI * (radius ** 2);
    return area;
}

let inputRadius = 6;
let ans = areaOfCircle(inputRadius);
console.log(ans+' is the area of circle with radius = '+inputRadius);