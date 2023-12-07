// WAP to input n numbers and log the average of those number.

function average(arrayNumbers){
    let arrayLength = arrayNumbers.length;
    let sum = 0;
    for(let i=0;i<arrayLength;i++){
        sum += arrayNumbers[i];
    }
    let avg = sum/arrayLength;
    return avg;
}

let inputNumber;
let arrayOfNumbers = [];
while(inputNumber!=0){
    inputNumber = Number(prompt("Enter any number : "));
    arrayOfNumbers.push(inputNumber);
}
arrayOfNumbers.pop();
let ans = average(arrayOfNumbers);
alert(`Average of ${arrayOfNumbers} = ${ans}`); 