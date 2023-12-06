// WAP to input the length and breadth of rectangle and calculate the area and perimeter of rectangle.

function areaAndPerimeterCalculator(length,breadth) {
    let area = length*breadth;
    let perimeter = 2*(length+breadth);
    
    return{
        area:area,
        perimeter:perimeter
    }
}

let inputLength = 6;
let inputBreadth = 9;
ans=areaAndPerimeterCalculator(inputLength,inputBreadth);
console.log("Length of the rectangle = "+inputLength);
console.log("Breadth of the rectangle = "+inputBreadth);
console.log("Area of the rectangle = "+ans.area);
console.log("Perimeter of the rectangle = "+ans.perimeter);